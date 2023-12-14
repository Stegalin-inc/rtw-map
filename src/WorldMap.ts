import { ImageProcessor } from "./ImageProcessor";
import { MyMapCmp } from "./MyMap";
import { conf } from "./config";
import { Point } from "./types";
import { chaikin, colToRgb, removeRepeate } from "./utils";

export class WorldMap {
  ctx: CanvasRenderingContext2D;
  coast: Point[] = [];
  img: ImageProcessor;
  provs: any = {};
  borders: ReturnType<typeof MyMapCmp>;
  private readonly seaColor = (41 << 16) + (140 << 8) + 233;
  constructor(ctx: CanvasRenderingContext2D, img: ImageProcessor) {
    this.ctx = ctx;
    this.img = img;
    this.removeCityAndPorts();
    this.selTopMin(3)
    this.coast = this.getLineForCoast();
    this.borders = img.getAllBorders();
    this.borders.data.forEach((x) => {
      // drawBorder([0, x.val.at(0)])
      x.val.forEach((y, i) => {
        let line = y;
        const a = line.at(0);
        const b = line.at(-1);
        if (conf.needRemove) line = removeRepeate(y);
        // line = chaikin(line, 2, 3 / 4)
        line = chaikin(line, conf.chaikin.pass, conf.chaikin.part);
        // line.pop()
        for (let i = 0; i < 2 ** (conf.chaikin.pass + 1); ++i) line.pop();
        x.val[i] = [a, ...line, b];
      });
    });
    const re = () => {
      if(this.needRender) this._render()
      this.needRender = false
      requestAnimationFrame(re)
    }
    re()
  }

  render(){
    this.needRender = true
  }
  private _render() {
    const { ctx, coast } = this;
    const lines = coast || [];
    ctx.fillStyle = conf.clearColor;
    const T = ctx?.getTransform();
    ctx?.setTransform(new DOMMatrix([1, 0, 0, 1, 0, 0]));
    ctx?.fillRect(0, 0, 1000, 1000);
    ctx?.setTransform(T);
    ctx.beginPath();
    ctx.moveTo(lines[0]?.[0], lines[0]?.[1]);
    lines.forEach(([x, y]) => {
      ctx.lineTo(x, y);
    });
    ctx.closePath();

    ctx.fillStyle = conf.seaColor;
    ctx.fill();
    this.drawBorders();
  }

  drawBorders() {
    const { provs, img, borders } = this;
    if (!borders) return;
    borders.data.forEach((x) => {
      const a = provs[x.key[0]];
      const b = provs[x.key[1]];
      // if (!(a ^ b) && !(a && b)) return;
      if (!conf.showBordersWithSea) if (x.key.includes(this.seaColor)) return;
      x.val.forEach((y) => this.drawBorder([0xff1100, y,!(a ^ b)]));
    });
  }
  drawBorder([col, lines, style]) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.moveTo(lines[0][0], lines[0][1]);

    lines.forEach(([x, y], i) => {
      ctx.lineTo(x, y);
    });

    if (conf.regionMode === "fill") {
      ctx.closePath();
      ctx.fillStyle = colToRgb(col);
      ctx.fill();
    } else {
      ctx.strokeStyle = colToRgb(col);
      if (style) {
        ctx.setLineDash([1, 0.5]);
        ctx.lineWidth = 0.1;
        ctx.strokeStyle = "gray";
      } else {
        ctx.setLineDash([]);
        ctx.lineWidth = 0.5;
      }
      ctx.stroke();
    }
  }
  private getLineForCoast() {
    let line = this.img.getLine2([0, 0], this.seaColor);
    if (conf.needRemove) line = removeRepeate(line);
    line = chaikin(line, conf.chaikin.pass, conf.chaikin.part);
    return line;
  }

  toggleProv(col: number) {
    this.provs[col] = !this.provs[col];
    console.log("sel provs: " + Object.values(this.provs).filter((x) => x).length);

    this.render();
  }

  removeCityAndPorts() {
    const white = this.img.getCol(255, 255, 255);
    const black = 0;
    const P = (x,y)=>this.img.getNum(x,y)
    this.img.forEachPixel((c, x, y) => {
      if (c === white || c === black) {
        const [u,r,d,l] = [P(x,y-1),P(x+1,y),P(x,y+1),P(x-1,y)];
        const neededCol = [u,r,d,l].find((x) => x !== this.seaColor);
        this.img.setPixel(x, y, neededCol);
      }
    });
  }

  selTopMin(count: number = 0){
    this.provs = {}
    const cnt: any = {}
    this.img.forEachPixel(col => {
      const c=(col)
      cnt[c] = (cnt[c] || 0) + 1
    })
    Object.entries(cnt).sort((a,b)=>a[1]-b[1]).slice(0, count).forEach(x=>this.toggleProv(x[0]))
  }
}
