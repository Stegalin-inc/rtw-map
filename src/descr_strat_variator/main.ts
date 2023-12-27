import { parse_descr_stat } from "./parse_descr_stat";
import descrt from "./descr_strat.txt?raw";
import { gen_descr_stat } from "./gen_descr_stat";

const parsed = parse_descr_stat(descrt);
console.log(
  descrt
    .split("\n")
    .filter((x) => /character\W/.test(x))
    .map((x) => x.split(/,/))
);
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
window.settings = settings;
settings.init();
const personality = ["genghis", "henry", "mao", "smith", "stalin", "napoleon", "caesar"];
const strategy = [
  "balanced",
  "religious",
  "trader",
  "comfort",
  "bureaucrat",
  "craftsman",
  "sailor",
  "fortified",
];

const variate = (val: number, factor: number = 20, min = 0, max = Number.MAX_SAFE_INTEGER) => {
  const r = 1 + ((Math.random() * 2 - 1) * factor) / 100;
  return Math.min(max, Math.max(min, ~~(val * r)));
};

const randArr = (arr) => arr[~~(arr.length * Math.random())];

// логарифмический рандом от 0 до х
// вероятность получить большее число в 2 раза меньше чем меньшее
// пример 0 - 50%, 1 - 25%,, 2 - 12%, и т.д. 
const logRand = x=> ~~(x-Math.log2(~~(Math.random()*2**x)))
randArr(strategy);
randArr(personality);
console.log(randArr(strategy), randArr(personality));
const stratContainer = document.getElementById("strat-container");

parsed.faction.forEach((f) => {
  f.ai = [randArr(strategy), randArr(personality)];
  f.denari = variate(f.denari, 20, -100000);
  f.character.forEach((c) => {
    const charDiv = document.createElement("div");
    charDiv.innerText = c.name;
    const mlp = 7;
    charDiv.style = `left: ${c.pos[0] * mlp}; top: ${1000 - c.pos[1] * mlp}; --p: ${~~(c.unit.length/20*100)+'%'};`
    charDiv.dataset.info = JSON.stringify(c, null, 2)
    stratContainer.append(charDiv);
    c.age = variate(c.age, 20, 16);
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
const sum = arr => arr.reduce((a,b)=>a+b, 0)
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

console.log(parsed);
console.log(gen_descr_stat(parsed));
const fileEl = document.getElementById("descr_strat_file")!;

fileEl.onchange = async (e) => {
  const file: File = e.target.files[0];
  const a = await file.text();
  // console.log(a);

  console.log(parse_descr_stat(a));
};
