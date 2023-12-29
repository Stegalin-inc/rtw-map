type ColumnInfo<T, K extends keyof T> = {
  prop: K,
  header?: string,
  cmp?: (a: T[K], b: T[K]) => number
  render?: (a: T[K])=> any
}

export const createTable = <T>(data: T[], info: ColumnInfo<T, keyof T>[]) => {
  const C: typeof document.createElement = x=>document.createElement(x)
  const t = C('table')
  t.classList.add('info-table')
  const r = C('tr')
  const hh = info.map((x, i)=>{
    const h = C('th')
    h.innerHTML=x.header||x.prop
    h.addEventListener('click', () => {
      const rs = [...t.rows].slice(1).sort((a,b)=>a.children[i].textContent?.localeCompare(b.children[i].textContent))
      rs.forEach(x=>t.append(x))
    })
    return h
  })
  r.append(...hh)
  t.append(r)
  const rows = data.map(item=>{
    const r = C('tr')
    const hh = info.map(x=>{
      const h = C('td')
      const render = x.render || (x=>x)
      h.innerHTML=render(item[x.prop])
      return h
    })
    r.append(...hh)
    return r
  })
  t.append(...rows)
  const datarows = data.map((d,i)=>[d, rows[i]] as const)
  info.forEach((x, i)=>{
    let cnt = 0
    hh[i].addEventListener('click', () => {
      const dir = cnt++ % 2
      const cmp = x.cmp || ((a, b) => a.localeCompare(b))
      let sorted = datarows.sort(([a],[b])=>cmp(a[x.prop], b[x.prop]))
      if(dir) sorted.reverse()
      sorted.forEach(([_, x])=>t.append(x))
    })
  })
return t

}