import { parse_descr_stat } from "./parse_descr_stat";
import descrt from "./descr_strat.txt?raw";
import { gen_descr_stat } from "./gen_descr_stat";
import { download, logRand, randArr, sum, variate } from "./utils";
import { MovableDom } from "./MovableDom";
import { Movable } from "../MovableCanvas";

const parsed = parse_descr_stat(descrt);
console.log(parsed);

const settings = {
  values: [
    "ai",
    "denari",
    "age",
    "population",
    "brigand_spawn_value",
    "pirate_spawn_value",
    "core_attitudes",
    "faction_relationships",
    "expirience",
  ],
  init() {
    const html = this.values
      .map((v) => {
        return `<label for="is_${v}">${v}</label><input type="checkbox" name="is_${v}" id="is_${v}"><input type="range" name="${v}_val" id="${v}_val">`;
      })
      .join("");
    document.getElementById("settings-container").innerHTML = html;
    this.values.forEach((v) => {
      const el_is = document.getElementById("is_" + v);
      const el_val = document.getElementById(v + "_val");
      const onchange = (e) => {
        this[e.target.name] = e.target.value;
      };
      el_is.onchange = onchange;
      el_val.onchange = onchange;
    });
  },
};
// settings.init();
const personality = ["genghis", "henry", "mao", "smith", "stalin", "napoleon", "caesar"];
const strategy = ["balanced","religious","trader","comfort","bureaucrat","sailor","fortified",];

const stratContainer = document.getElementById("strat-container");
// new MovableDom(stratContainer!, stratContainer?.parentElement)
const fcol = {
  "romans_julii": "#f11",
  "romans_brutii": "#2d5",
  "romans_scipii": "#25d",
  "romans_senate": "#a3f",
  "macedon": "#313",
  "egypt": "#dd2",
  "seleucid": "#aaa",
  "carthage": "#ddd",
  "parthia": "#d3d",
  "pontus": "#2df",
  "gauls": "#192",
  "germans": "#913",
  "britons": "#5df",
  "armenia": "#2fd",
  "dacia": "#660",
  "greek_cities": "#ffa",
  "numidia": "#159",
  "scythia": "#fa3",
  "spain": "#da2",
  "thrace": "#adf",
  "slave": "#777"
}
{

  const stratCnv = document.getElementsByTagName("canvas")[0];
  const ctx = stratCnv.getContext('2d')!
  const m = new Movable(stratCnv, ctx, ()=>{
    ctx.clearRect(0,0,1000,1000)
    const sz = 1
    parsed.faction.forEach((f) => {
      f.character.forEach((c) => {
        let [x,y] = c.pos
        y=200-y
        ctx.strokeStyle=fcol[f.name]
        ctx.beginPath()
        ctx.moveTo(x,y)
        ctx.lineTo(x+sz,y)
        ctx.lineTo(x+sz,y+sz)
        ctx.lineTo(x,y+sz)
        // ctx.lineTo(x,y)
        ctx.closePath()
        ctx.stroke()
      })
    })
  })
  m.onClickWorld = ([x,y]) => {
    const [mx, my] = [x,200-y]
    parsed.faction.forEach((f) => {
      f.character.forEach((c) => {
        if(c.pos[0]===mx && c.pos[1]===my )
        info.innerText = (
`${f.name} ${c.role?c.role+' ':''}${c.type} ${c.name} age ${c.age}
${c.unit.map(x=>x.name.join(' ')+'('+x.props+')').join('\n')}`
          )
      })
    })
  }

}
parsed.faction.forEach((f) => {
  f.ai = [randArr(strategy), randArr(personality)];
  f.denari = variate(f.denari, 20, -100000);
  f.character.forEach((c) => {
    const charDiv = document.createElement("div");
    // charDiv.innerText = c.name;

    const mlp = 5;
    charDiv.style = `left: ${c.pos[0] * mlp}; top: ${1000 - c.pos[1] * mlp}; --c: ${fcol[f.name]}; --p: ${~~(c.unit.length/20*100)+'%'};`
    charDiv.onclick = () => {
      info.innerText = JSON.stringify(c, null, 2)
    }
    charDiv.dataset.info = `
    ${f.name}
    ${c.role || ''}
    ${c.type}
    age: ${c.age}
    `
    // stratContainer.append(charDiv);
    // c.age = variate(c.age, 20, 16);
  });
  f.settlement.forEach((c) => {
    c.population = variate(c.population, 20);
  });
  f.character.forEach((c) => {
    c.unit.forEach(u=>{
      u.props = [logRand(9), logRand(3), logRand(3)]
    })
  });
});
const tableData = parsed.faction.map(faction=>({
    name: faction.name,
    ai: faction.ai.join(' '),
    denari: faction.denari,
  totalPopulation: sum(faction.settlement.map(x=>x.population)),
  countCity: faction.settlement.length,
  provs: faction.settlement.map(x=>x.region).toString(),
  countUnits: sum(faction.character.map(x=>x.unit.length)),
}))
console.table(tableData);

parsed.brigand_spawn_value = variate(parsed.brigand_spawn_value, 20);
parsed.pirate_spawn_value = variate(parsed.pirate_spawn_value, 20);
parsed.core_attitudes.forEach((ca) => {
    ca.value = variate(300, 100);
});
parsed.faction_relationships.forEach((ca) => {
  ca.value = variate(300, 100);
});

// download('descr_strat.txt', gen_descr_stat(parsed));

const fileEl = document.getElementById("descr_strat_file")!;

fileEl.onchange = async (e) => {
  const file: File = e.target.files[0];
  const a = await file.text();
  // console.log(a);

  console.log(parse_descr_stat(a));
};
