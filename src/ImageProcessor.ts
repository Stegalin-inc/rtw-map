import { Point } from "./types";
import { eq } from "./utils";

export class ImageProcessor {
  data = []
  w = 0
  h = 0
  init(w, h, d) {
    this.w = w;
    this.h = h;
    this.data = d;
  }
  getPixel(x, y) {
    if (x < 0 || x > this.w || y < 0 || y > this.h) return [0, 0, 0];
    const xx = Math.max(0, Math.min(x, this.h));
    const yy = Math.max(0, Math.min(y, this.w));
    const d = this.data;

    const base = (this.w * y + x) * 4;
    // console.log(d[base]);
    return [d[base], d[base + 1], d[base + 2]];
  }
  getNum(x, y) {
    const p = this.getPixel(x, y);
    // return p.join()
    return (p[2] * (2 ** 16)) + (p[1] * (2 ** 8)) + p[0];
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
    const main = c; //?? S[1][1]
    return [
      S[0][0] === main, S[0][1] === main,
      S[1][0] === main, S[1][1] === main
    ];
  }
  forEachPixel(fn: Function) {
    for (let i = 0; i < this.w; ++i)
      for (let j = 0; j < this.h; ++j) {
        const col = this.getNum(i, j)
        fn(col, i, j)
      }
  }
  forEachColor(fn: Function) {
    const colors: any = {}
    this.forEachPixel(col => {
      if (!colors[col]) {
        colors[col] = true
        fn(col)
      }
    })

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
      if (lu && !ru && !lb && rb) { mx(); px(); };
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
      const repeating = result.filter(a => eq(a, [x, y])).length
      if (repeating > 2) {
        console.log('sliwkom mnogo povtorov');
        break

      }
      result.push([x, y]);
    }

    return result;
  }
  private getPossibleDirections([x, y]: Point, col: number) {
    const result: Point[] = []
    const [lu, ru,
      lb, rb] = this.getBorders(x, y, col)
    if (lb ^ lu) result.push([x - 1, y])
    if (rb ^ lb) result.push([x, y + 1])
    if (ru ^ rb) result.push([x + 1, y])
    if (lu ^ ru) result.push([x, y - 1])
    return result
  }
  getLine2(p: Point, col: number) {
    // return this.getLine(p[0], p[1], col)
    const result: Point[] = [];

    const isLineExistsMore1Times = (p1: Point, p2: Point) => {
      let cnt = 0
      for (let i = 0; i < result.length - 1; ++i) {
        const l1 = result[i]
        const l2 = result[i + 1]
        if (eq(l1, p1) && eq(l2, p2) || eq(l1, p2) && eq(l2, p1)) cnt++
      }
      return cnt > 0
    }
    let cnt = 0;
    while (true) {
      const dirs = this.getPossibleDirections(p, col)
      const filtered = dirs.filter(x => !isLineExistsMore1Times(p, x))
      if (filtered.length === 0) {
        console.log('Мы в тупике');
        break
      }
      if (filtered.length > 1) {
        console.log('Мы на развилке');
      }
      const next = filtered[0]
      if (eq(result[0], next)) {
        result.push(next)
        break
      }
      result.push(next)
      p = next
      if (++cnt > 6000) {
        console.log('Очень много итераций');
        break
      }
    }

    return result
  }
};