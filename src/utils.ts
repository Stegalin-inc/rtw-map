import { Line, Point } from "./types"

export function chaikin(arr: Point[], num: number, part = 3/4): Point[] {
    if (num === 0) return arr
    const rest = 1 - part
    const l = arr.length
    const smooth = arr.map((c, i) => {
        return [
            [part * c[0] + rest * arr[(i + 1) % l][0], part * c[1] + rest * arr[(i + 1) % l][1]],
            [rest * c[0] + part * arr[(i + 1) % l][0], rest * c[1] + part * arr[(i + 1) % l][1]]
        ] as Point[]
    }).flat()
    return num === 1 ? smooth : chaikin(smooth, num - 1)
}

const sameLine = ([Ax, Ay]: Point, [Bx, By]: Point, [Cx, Cy]:Point) => Math.abs( Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By) ) < Number.EPSILON

export function removeRepeate(lines: Point[]) {
    //  return lines
    if (lines.length <1) return lines
    let result: Point[] = []
    result.push(lines[0])
    for (let i = 1; i < lines.length - 1; ++i) {
        const pppp = lines[i - 3] || []
        const ppp = lines[i - 2] || []
        const pp = lines[i - 1]
        const p = lines[i]
        const np = lines[i + 1]
        const nnp = lines[i + 2] || []
        const nnnp = lines[i + 3] || []
        if(sameLine(pp, p, np)) continue
        if(sameLine(ppp, p, nnp)) continue
        if(sameLine(pppp, p, nnnp)) continue
        result.push(p)

    }
    result.push(lines[lines.length - 1])

    return result

}
export function removeRepeateOld(lines: Point[]) {
    //  return lines
    if (lines.length <1) return lines
    let result: Point[] = []
    result.push(lines[0])
    for (let i = 1; i < lines.length - 1; ++i) {
        const [ppx, ppy] = lines[i - 2] || []
        const [px, py] = lines[i - 1]
        const [x, y] = lines[i]
        const [nx, ny] = lines[i + 1]
        const [nnx, nny] = lines[i + 2] || []
        if(sameLine([px, py], [x, y], [nx, ny])) continue
        /* if (ppx + 1 === x && ppy + 1 === y && nnx - 1 === x && nny - 1 === y) continue
        if (ppx - 1 === x && ppy + 1 === y && nnx + 1 === x && nny - 1 === y) continue

        if (ppx - 1 === x && ppy - 1 === y && nnx + 1 === x && nny + 1 === y) continue
        if (ppx + 1 === x && ppy - 1 === y && nnx - 1 === x && nny + 1 === y) continue */
        

        /* if (px - 1 === x && nx + 1 === x && py === y && ny === y) continue
        if (px + 1 === x && nx - 1 === x && py === y && ny === y) continue
        if (py - 1 === y && ny + 1 === y && px === x && nx === x) continue
        if (py + 1 === y && ny - 1 === y && px === x && nx === x) continue */
        result.push([x, y])

    }
    result.push(lines[lines.length - 1])

    return result

}

const isPoint = (x: any): x is Point => x.length===2 && typeof x[0] === 'number' && typeof x[1] === 'number'
const isLine = (x: any): x is Line => x.length===2 && isPoint(x[0]) && isPoint(x[1])


export const eqPoint = ([Ax, Ay]:Point, [Bx, By]:Point) => {
    return Ax === Bx && Ay === By
}

export const eqLine = ([A1, B1]:Line, [A2,B2]:Line) => {
    return eqPoint(A1, A2) && eqPoint(B1, B2) || eqPoint(A1, B2) && eqPoint(B1, A2)
}

export const eq = (a:Point|Line, b:Point|Line) => {
    if(!a || !b) return false
    if(isPoint(a) && isPoint(b)) return eqPoint(a, b)
    if(isLine(a) && isLine(b)) return eqLine(a, b)
    return a === b
}