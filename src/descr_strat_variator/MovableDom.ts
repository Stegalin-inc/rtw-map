export class MovableDom {
    ctx = null
    last = [0, 0]
    redraw = null
    zoom = 1
    translate = [0, 0]
    other = null
    moving=false
    el: HTMLElement

    constructor(el: HTMLElement, ctrl: HTMLElement) {
        this.el = el
        ctrl.onmousedown = this.onmousedown.bind(this)
        ctrl.onmousemove = this.onmousemove.bind(this)
        ctrl.onmouseup = this.onmouseup.bind(this)
        ctrl.onwheel = this.onwheel.bind(this)
        // el.onclick = this.onclick.bind(this)

    }

    onDrag(dx, dy) {
        const z = this.zoom
        this.translate = [this.translate[0] + (dx) * z, this.translate[1] + (dy) * z]
        const [x,y] = this.translate
        this.el.style.translate =  `${x}px ${y}px`
        //translate((dx) / z, (dy) / z)

    }

    onmousedown(e: MouseEvent) {
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
        e.preventDefault()
        const factor = e.deltaY < 0 ? 1.1 : 0.9
        const [mx, my] = [e.offsetX, e.offsetY]
        this.zoomTo(factor, mx, my)
    }

    zoomTo(factor, mx=0, my=0) {
        this.zoom *= factor
        // const [x, y] = this.getWorldCoord(mx, my)

        this.el.style.scale = this.zoom
    }

    getWorldCoord(x, y) {
        /* var matrix = this.ctx.getTransform();
        var imatrix = matrix.invertSelf();
        var xx = x * imatrix.a + y * imatrix.c + imatrix.e;
        var yy = x * imatrix.b + y * imatrix.d + imatrix.f;
        return [~~xx, ~~yy] */
    }
    onClickWorld(e) {
    }
}