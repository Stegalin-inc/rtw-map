import { Movable } from "./MovableCanvas"
import { img } from "./img"
import { removeRepeate } from "./utils"
import { chaikin } from "./utils"

const canvas = document.getElementsByTagName('canvas')[0]
const canvas2 = document.getElementsByTagName('canvas')[1]
const ctx = canvas.getContext('2d')
const ctx2 = canvas2.getContext('2d')
const map = document.getElementsByTagName('img')[0]
const log = console.log
canvas.onclick = clickCanvas



const mov = new Movable(canvas2, ctx2, () => {
  drawLine()
})

mov.zoomTo(12)

function clickCanvas(e) {
  play(e.offsetX, e.offsetY)
  log(img.getNum(e.offsetX, e.offsetY))
}

ctx2.strokeStyle = 'gray'
ctx2.strokeStyle = '#cf2'
// ctx2.setLineDash([3, 1])
ctx2.lineWidth = 0.1
function drawLine() {
  const lines = window.coast || []
  ctx2.fillStyle = '#2f2'
  ctx2.fillRect(0, 0, 1000, 1000)
  ctx2.fill()
  ctx2.beginPath()
  ctx2.moveTo(lines[0]?.[0], lines[0]?.[1])
  lines.forEach(([x, y]) => {
    ctx2.lineTo(x, y)
  })
  ctx2.closePath()

  ctx2.fillStyle = '#04a'
  ctx2.fill()
  drawBorders()
}
const colToRgb = (col: number) => {
  const r = (col & (2 ** 8 - 1 << 16)) >> 16
  const g = (col & (2 ** 8 - 1 << 8)) >> 8
  const b = (col & (2 ** 8 - 1))
  return `rgb(${b},${g},${r})`
}

// ctx2.lineWidth =1  
function drawBorder([col, lines]) {
  ctx2.beginPath()
  ctx2.moveTo(lines[1][0], lines[1][1])
  // ctx2.setLineDash([5, 3])
  lines.forEach(([x, y], i) => {
    /*    const [xx,yy] = lines[i+1] || [0, 0]
       if(xx==0&&yy==0) return
       if(i%2==1)return
       ctx2?.quadraticCurveTo(x,y, xx,yy) */
    ctx2.lineTo(x, y)
  })
  ctx2.closePath()

  ctx2.fillStyle = colToRgb(col)
  ctx2.fill()
  // ctx2.stroke()
}

function drawBorders() {
  if (!window.borders) return
  for (let border of Object.values(window.borders)) {
    drawBorder(border)
  }
}
function getLineForColor(col, x = map.width, y = map.height) {
  for (let i = 0; i < x + 1; ++i)
    for (let j = 0; j < y + 1; ++j) {
      const f = img.getBorders(i, j, col)
      if ((!f[0]) && f[3]) {
        let line = img.getLine2([i, j], img.getNum(i, j))
        line = removeRepeate(line)
        // line = chaikin(line, 2, 3 / 4)
        line = chaikin(line, 2, 2 / 3)
        // line = chaikin(line, 3, 1/2)
        return line
        return chaikin((chaikin((line, 1), 3, 1 / 2)), 3, 3 / 4)
      }
    }

}
function play(x = 0, y = 0) {
  const col = img.getNum(x, y)
  window.coast = getLineForColor(col)
  window.borders = {}
  img.forEachColor((col) => {
    if (!window.borders[col]) {
      window.borders[col] = [col, getLineForColor(col)]
    }

  })
  const cnt = {}
  img.forEachPixel(col => {
    const c=colToRgb(col)
    cnt[c] = (cnt[c] || 0) + 1
  })
  // console.table(Object.entries(cnt))
  drawLine()


}
window.replay = (part) => {
  window.part = part;
  play(0, 0)
}
const onMapLoad = new Promise(r => { map.onload = r })

async function main() {
  // await onMapLoad
  const { height, width } = map
  canvas.height = height
  canvas.width = width
  ctx.drawImage(map, 0, 0)
  const { data } = ctx.getImageData(0, 0, width, height)
  img.init(width, height, data)
  play()
}

main()
