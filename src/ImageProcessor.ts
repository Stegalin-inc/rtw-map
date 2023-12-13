import { MyMapId, MyMapCmp } from "./MyMap";
import { Line, Point } from "./types";
import { colToRgb, eq, eqLine, numToCol } from "./utils";

export class ImageProcessor {
  data = [];
  w = 0;
  h = 0;
  init(w, h, d) {
    this.w = w;
    this.h = h;
    this.data = d;
  }
  getPixel(x, y) {
    if (x < 0 || x > this.w || y < 0 || y > this.h) return [0, 0, 1];
    const xx = Math.max(0, Math.min(x, this.h));
    const yy = Math.max(0, Math.min(y, this.w));
    const d = this.data;

    const base = (this.w * y + x) * 4;
    // console.log(d[base]);
    return [d[base], d[base + 1], d[base + 2]];
  }
  setPixel(x,y,num){
    const base = (this.w * y + x) * 4;
    const col = numToCol(num)
    this.data[base] = col[0]
    this.data[base+1] = col[1]
    this.data[base+2] = col[2]
  }
  getCol(r, g, b) {
    return (r << 16) + (g << 8) + b;
  }
  getNum(x, y) {
    const p = this.getPixel(x, y);
    // return p.join()
    return this.getCol(...p);
  }
  getSquare(x, y) {
    const P = this.getNum.bind(this);
    return [
      [P(x - 1, y - 1), P(x, y - 1)],
      [P(x - 1, y), P(x, y)],
    ];
  }
  getBorders(x, y, c) {
    const S = this.getSquare(x, y);
    // console.log(S);
    // const main = c; //?? S[1][1]
    const cmp = (col) => {
      // if (main === this.getCol(41, 140, 233)) return col === main;
      // if (main === this.getCol(255, 255, 255)) return col === main;
      return c === col; // || col === this.getCol(255,255,255)  || col=== 0// || col === 255<<16+255<<8+255
    };
    return [cmp(S[0][0]), cmp(S[0][1]), cmp(S[1][0]), S[1][1] === c];
  }
  forEachPixel(fn: Function) {
    for (let j = 0; j < this.h; ++j) {
      for (let i = 0; i < this.w; ++i) {
        const col = this.getNum(i, j);
        fn(col, i, j, this.pointId([i, j]));
      }
    }
  }
  forEachColor(fn: Function) {
    const colors: any = {};
    this.forEachPixel((col) => {
      if (!colors[col]) {
        colors[col] = true;
        fn(col);
      }
    });
  }
  getLine(x, y, c) {
    const result: Point[] = [];

    let cnt = 0;
    while (true) {
      const [lu, ru, lb, rb] = this.getBorders(x, y, c);
      //    console.log(x,y,c,lu,ru,lb,rb);
      let complited = false;
      const mx = () => {
        for (let i = 1; i < 6; ++i) {
          const last = result.at(-i);
          if (last[0] === x - 1 && last[1] === y) {
            complited = true;
          }
        }

        if (!complited) --x;
      };
      const px = () => {
        if (!complited) return;
        ++x;
      };
      if (lu && ru && lb && rb) break;
      if (lu && ru && lb && !rb) y++;
      if (lu && ru && !lb && rb) x--;
      if (lu && ru && !lb && !rb) x--;
      if (lu && !ru && lb && rb) x++;
      if (lu && !ru && lb && !rb) y++;
      if (lu && !ru && !lb && rb) {
        mx();
        px();
      }
      if (lu && !ru && !lb && !rb) x--;
      if (!lu && ru && lb && rb) y--;
      if (!lu && ru && lb && !rb) y++; //{mx(); px()};
      if (!lu && ru && !lb && rb) y--;
      if (!lu && ru && !lb && !rb) y--;
      if (!lu && !ru && lb && rb) x++;
      if (!lu && !ru && lb && !rb) y++;
      if (!lu && !ru && !lb && rb) x++;
      if (!lu && !ru && !lb && !rb) break;
      if (cnt++ > 3750) break;
      /*                 if(!ru) {
                          x+=1
                      }
                      else if(!lb) {
                          y+=1
                      } else break  */
      if (cnt > 1 && eq([x, y], result[0])) break;
      const repeating = result.filter((a) => eq(a, [x, y])).length;
      if (repeating > 2) {
        console.log("sliwkom mnogo povtorov");
        break;
      }
      result.push([x, y]);
    }

    return result;
  }
  private getPossibleDirections([x, y]: Point, col: number, col2: number) {
    const result: Point[] = [];
    const cond = (a, b) => (a === col && b === col2)// || (b === col && a === col2);
    if (col2===undefined) {
      const [lu, ru, lb, rb] = this.getBorders(x, y, col, col2);
      if (rb ^ lb) result.push([x, y + 1]);
      if (ru ^ rb) result.push([x + 1, y]);
      if (lb ^ lu) result.push([x - 1, y]);
      if (lu ^ ru) result.push([x, y - 1]);
    } else {
      const [[lu, ru], 
             [lb, rb]] = this.getSquare(x, y);
      if (cond(rb, lb)) result.push([x, y + 1]);
      if (cond(ru, rb)) result.push([x + 1, y]);
      if (cond(lb, lu)) result.push([x - 1, y]);
      if (cond(lu, ru)) result.push([x, y - 1]);
    }
    return result;
  }
  getLine2(p: Point, col: number, col2: number, initial: Point[], walked) {
    // return this.getLine(p[0], p[1], col)
    const result: Point[] = initial || [];

    const isLineExistsMore1Times = (p1: Point, p2: Point) => {
      let cnt = 0;
      for (let i = 0; i < result.length - 1; ++i) {
        const l1 = result[i];
        const l2 = result[i + 1];
        if (eq([l1, l2], [p1, p2])) return true;
      }
      return cnt > 0;
    };
    let cnt = 0;
    while (true) {
      const dirs = this.getPossibleDirections(p, col, col2);
      const filtered = dirs.filter((x) => !isLineExistsMore1Times(x, p)).filter(x=>!walked?.has([x,p]));
      if (filtered.length === 0) {
        // console.log("Мы в тупике");
        break;
      }
      if (filtered.length > 1) {
        // console.log("Мы на развилке");
      }
      const next = filtered.at(-1);
      if (eq(result[0], next)) {
        // result.push(next)
        break;
      }
      result.push(next);
      walked?.set([next,p], true)
      p = next;
      if (++cnt > 6000) {
        console.log("Очень много итераций");
        break;
      }
    }

    return result;
  }
  private pointId([x, y]: Point) {
    return x * this.w + y;
  }
  private lineId([a, b]: Line) {
    if(this.pointId(a)<this.pointId(b)) return [a,b].toString()
    return [b,a].toString()
  }
  getAllBordersLines2() {
    // const painted;
    const walked = {};
    const borders = [];
    for (let j = 0; j < this.h; j += 1) {
      for (let i = 0; i < this.w; i += 1) {
        const [[lu, ru], [lb, rb]] = this.getSquare(i, j);
        if (ru !== rb)
          borders.push({
            a: rb,
            b: ru,
            l: [
              [i, j],
              [i + 1, j],
            ],
          });
        if (lb !== rb)
          borders.push({
            a: rb,
            b: lb,
            l: [
              [i, j],
              [i, j + 1],
            ],
          });
        if (ru !== lu)
          borders.push({
            a: rb,
            b: ru,
            l: [
              [i, j],
              [i, j - 1],
            ],
          });
        if (lb !== lu)
          borders.push({
            a: rb,
            b: ru,
            l: [
              [i, j],
              [i - 1, j],
            ],
          });
      }
    }
    console.log(borders);
  }
  getAllBordersLines() {
    const borders = [];
    const bordesMap: any = {};
    for (let j = 0; j < this.h; j += 2) {
      for (let i = 0; i < this.w; i += 2) {
        const [[lu, ru], [lb, rb]] = this.getSquare(i, j);
        if (ru !== rb) {
          const point = [
            [i, j],
            [i + 1, j],
          ];
          bordesMap[point.toString()] = { a: rb, b: ru };
          borders.push({ a: rb, b: ru, l: point });
        }
        if (lb !== rb) {
          const point = [
            [i, j],
            [i, j + 1],
          ];
          bordesMap[point.toString()] = { a: rb, b: lb };
          borders.push({ a: rb, b: lb, l: point });
        }
        if (ru !== lu) {
          const point = [
            [i, j],
            [i, j - 1],
          ];
          bordesMap[point.toString()] = { a: lu, b: ru };
          borders.push({ a: lu, b: ru, l: point });
        }
        if (lb !== lu) {
          const point = [
            [i, j],
            [i - 1, j],
          ];
          bordesMap[point.toString()] = { a: lb, b: lu };
          borders.push({ a: lb, b: lu, l: point });
        }
      }
    }

    console.log(bordesMap);
  }
  allDirections([x, y]: Point) {
    return {
      up: [x, y - 1],
      le: [x - 1, y],
      ri: [x + 1, y],
      do: [x, y + 1],
    };
  }
  allll() {
    const walked = MyMapId(this.lineId.bind(this));
    const borders = MyMapCmp((a,b) => a[0]===b[0]&&a[1]===b[1] || a[0]===b[1]&&a[1]===b[0])
    this.forEachPixel((c, i, j) => {
      const p: Point = [i, j];
      const [[lu, ru], [lb, rb]] = this.getSquare(i, j);
      const dirs = this.allDirections(p);
      if (!walked.has([p, dirs.up]) && lu !== ru) {
        const pair = [lu,ru]
        // if(!borders.has(pair)){borders.set(pair, [])}
        walked.set([p, dirs.up], true)
        borders.get(pair, []).push(this.getLine2(dirs.up, lu, ru, [p, dirs.up], walked));
      }
      if (!walked.has([p, dirs.ri]) && ru !== rb) {
        const pair = [ru,rb]
        walked.set([p, dirs.ri], true)
        // if(!borders.has(pair)){borders.set(pair, [])}
        borders.get(pair, []).push(this.getLine2( dirs.ri, ru, rb, [p, dirs.ri], walked));
      }
      if (!walked.has([p, dirs.do]) && rb !== lb) {
        const pair = [rb,lb]
        walked.set([p, dirs.do], true)
        // if(!borders.has(pair)){borders.set(pair, [])}
        borders.get(pair, []).push(this.getLine2( dirs.do, rb, lb, [p, dirs.do], walked));
      }
      if (!walked.has([p, dirs.le]) && lb !== lu) {
        const pair = [lb,lu]
        walked.set([p, dirs.le], true)
        // if(!borders.has(pair)){borders.set(pair, [])}
        borders.get(pair, []).push(this.getLine2( dirs.le, lb, lu, [p, dirs.le], walked));
      }
    });
console.log(borders)
    return borders
  }
}


