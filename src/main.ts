import { Movable } from "./MovableCanvas"
import { WorldMap } from "./WorldMap"
import { conf } from "./config"
import { img } from "./img"

const canvas = document.getElementsByTagName('canvas')[0]
const canvas2 = document.getElementsByTagName('canvas')[1]
const ctx = canvas.getContext('2d')!
const ctx2 = canvas2.getContext('2d')!
const map = document.getElementsByTagName('img')[0]

let worldMap: WorldMap|undefined

const mov = new Movable(canvas2, ctx2, () => {
  if(!worldMap) return
  worldMap.render()
})

const mov2 = new Movable(canvas, ctx, ()=>{
  ctx.drawImage(map, 0, 0)
})

mov2.onClickWorld = (([x,y])=>{
  if(!worldMap) return
worldMap.toggleProv(img.getNum(x,y))
})
mov.onClickWorld = mov2.onClickWorld
mov.bindAnother(mov2)


partRange.oninput = e=>{
  conf.chaikin.part = e.target.value
}

function play(x = 0, y = 0) {
  worldMap = new WorldMap(ctx2, img)
  worldMap.render()
}

async function main() {
  const { height, width } = map
  canvas.height = height
  canvas.width = width
  ctx.drawImage(map, 0, 0)
  const { data } = ctx.getImageData(0, 0, width, height)
  img.init(width, height, data)
  play()
}

main()
