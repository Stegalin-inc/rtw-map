import { MyMapId, MyMapCmp } from "./MyMap";
import { Line, Point } from "./types";
import { colToRgb, eq, eqLine, eqPoint, numToCol } from "./utils";

export class ImageProcessor {
  data = [];
  w = 0;
  h = 0;
  imageData: ImageData;

  init(w, h, d) {
    this.w = w;
    this.h = h;
    this.data = d;
    this.imageData = new ImageData(d,w,h)
  }

  getPixel(x, y) {
    if (x < 0 || x > this.w || y < 0 || y > this.h) return [0, 0, 1];
    const xx = Math.max(0, Math.min(x, this.h));
    const yy = Math.max(0, Math.min(y, this.w));
    const d = this.data;

    const base = (this.w * y + x) * 4;
    return [d[base], d[base + 1], d[base + 2]];
  }

  setPixel(x, y, num) {
    const base = (this.w * y + x) * 4;
    const col = numToCol(num);
    this.data[base] = col[0];
    this.data[base + 1] = col[1];
    this.data[base + 2] = col[2];
  }

  getCol(r, g, b) {
    return (r << 16) + (g << 8) + b;
  }

  getNum(x, y) {
    const p = this.getPixel(x, y);
    return this.getCol(...p);
  }

  getSquare(x, y) {
    const P = this.getNum.bind(this);
    return [
      [P(x - 1, y - 1), P(x, y - 1)],
      [P(x - 1, y), P(x, y)],
    ];
  }

  _getSquare(x, y) {
    // const P = this.getNum.bind(this);
    return [
      this.getNum(x - 1, y - 1), this.getNum(x, y - 1),
      this.getNum(x - 1, y), this.getNum(x, y),
    ];
  }

  getBorders(x, y, c) {
    const S = this.getSquare(x, y);
    const cmp = (col) => c === col
    return [cmp(S[0][0]), cmp(S[0][1]), cmp(S[1][0]), S[1][1] === c];
  }

  forEachPixel(fn: (col: number, x: number, y: number, pointId: number) => any) {
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

  private getPossibleDirections([x, y]: Point, col: number, col2: number) {
    const result: Point[] = [];
    const cond = (a, b) => a === col && b === col2 || (b === col && a === col2);
    if (col2 === undefined) {
      const [lu, ru, lb, rb] = this.getBorders(x, y, col, col2);
      if (rb ^ lb) result.push([x, y + 1]);
      if (ru ^ rb) result.push([x + 1, y]);
      if (lb ^ lu) result.push([x - 1, y]);
      if (lu ^ ru) result.push([x, y - 1]);
    } else {
      const [[lu, ru], [lb, rb]] = this.getSquare(x, y);
      if (cond(rb, lb)) result.push([x, y + 1]);
      if (cond(ru, rb)) result.push([x + 1, y]);
      if (cond(lb, lu)) result.push([x - 1, y]);
      if (cond(lu, ru)) result.push([x, y - 1]);
    }
    return result;
  }

  private getNextDirection(p: Point, col: number, col2: number, walked){
    const dirs = this.getPossibleDirections(p, col, col2);
      const filtered = dirs
        .filter((x) => !walked?.has([x, p]));
    return filtered[0]
  }

  getLine2(p: Point, col: number, col2: number, initial: Point[], walked = MyMapId(this.lineId.bind(this))) {
    const result: Point[] = initial || [];

    let cnt = 0;
    while (true) {
      const next = this.getNextDirection(p, col, col2, walked)
      if (!next) {
        // console.log("Мы в тупике");
        break;
      }
      result.push(next);
      walked.set([next, p], true);
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
    const pida = this.pointId(a);
    const pidb = this.pointId(b);
    if (pida < pidb) return pida*this.w*this.h+pidb
    return pidb*this.w*this.h+pida
  }

  allDirections([x, y]: Point) {
    return {
      up: [x, y - 1],
      le: [x - 1, y],
      ri: [x + 1, y],
      do: [x, y + 1],
    };
  }

  getAllBorders() {
    const walked = MyMapId(this.lineId.bind(this));
    const borders = MyMapCmp(eq);
      this.forEachPixel((c, i, j) => {
        const p: Point = [i, j];
        const [lu, ru, lb, rb] = this._getSquare(i, j);
        const dirs = this.allDirections(p);
        
        const check = (dir, a, b) => {
          if (a === b || walked.has([p, dir])) return
          {
          const localWalked = MyMapId(this.lineId.bind(this));
          let np = p, c=1000;
          while(c--){
            let _np = this.getNextDirection(np,a,b,localWalked)
            if(!_np){
              break;
            }
            localWalked.set([np, _np], true)
            np=_np
          }
          borders.get([a, b], []).push(this.getLine2(np, a, b, [np], walked));
        }
      }

      check(dirs.up, lu, ru);
      check(dirs.ri, ru, rb);
      check(dirs.do, rb, lb);
      check(dirs.le, lb, lu);

    });
    console.log(borders);
    return borders;
  }
}
