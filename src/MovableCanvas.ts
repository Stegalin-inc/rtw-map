export class Movable {
    ctx = null
    last = [0, 0]
    redraw = null
    zoom = 1
    translate = [0, 0]
    other = null

    constructor(canvas, ctx, redraw) {
        this.ctx = ctx
        this.redraw = redraw
        canvas.onmousedown = this.onmousedown.bind(this)
        canvas.onmousemove = this.onmousemove.bind(this)
        canvas.onmouseup = this.onmouseup.bind(this)
        canvas.onwheel = this.onwheel.bind(this)
        canvas.onclick = this.onclick.bind(this)

    }

    bindAnother(other: Movable){
        this.other = other 
    }

    onDrag(dx, dy) {
        this.other?.onDrag(dx, dy)
        const z = this.zoom
        this.ctx.translate((dx) / z, (dy) / z)
        this.translate = [this.translate[0] + (dx) / z, this.translate[1] + (dy) / z]
        this.redraw()
    }

    onmousedown(e) {
        this.moving = true;
        this.last = [e.offsetX, e.offsetY]
    }

    onmousemove(e) {
        if (!this.moving) return;

        const [lx, ly] = this.last
        const [nx, ny] = [e.offsetX, e.offsetY]
        this.onDrag((nx - lx), (ny - ly))
        this.last = [nx, ny]
    }

    onmouseup(e) {
        this.moving = false;
    }

    onwheel(e) {
        const factor = e.deltaY < 0 ? 1.1 : 0.9
        const [mx, my] = [e.offsetX, e.offsetY]
        this.zoomTo(factor, mx, my)
    }

    zoomTo(factor, mx=0, my=0) {
        this.other?.zoomTo(factor,mx,my)
        this.zoom *= factor
        const [x, y] = this.getWorldCoord(mx, my)

        this.ctx.translate(x, y)
        this.ctx.scale(factor, factor)
        this.ctx.translate(-x, -y)

        this.redraw()
    }

    getWorldCoord(x, y) {
        var matrix = this.ctx.getTransform();
        var imatrix = matrix.invertSelf();
        var xx = x * imatrix.a + y * imatrix.c + imatrix.e;
        var yy = x * imatrix.b + y * imatrix.d + imatrix.f;
        return [~~xx, ~~yy]
    }
    onclick(e) {
        const [x, y] = [e.offsetX, e.offsetY]
        this.onClickWorld(this.getWorldCoord(x,y))

    }
}