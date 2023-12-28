import { Parser } from "./Parser";
import { Descr_Strat } from "./types";

export function parse_descr_stat(txt: string): Descr_Strat {
  let idx = 0;
  const parser = new Parser(() => {
    return txt[idx++];
  });

  const result: any = {
    core_attitudes: [],
    faction_relationships: [],
  };
  const next = (until) => (until ? parser.toksUntil(until) : parser.token());
  while (1) {
    let tk = next();

    if (tk === undefined) break;

    if (["core_attitudes", "faction_relationships"].includes(tk)) {
      result[tk].push({
        from: next(),
        value: next(),
        to: next("\n"),
      });

    } else if (["playable", "unlockable", "nonplayable"].includes(tk)) {
      result[tk] = next("end");

    } else if (["campaign", "brigand_spawn_value", "pirate_spawn_value"].includes(tk)) {
      result[tk] = next();

    } else if (["start_date", "end_date"].includes(tk)) {
      result[tk] = [next(), next()];

    } else if (["landmark", "resource"].includes(tk)) {
      result[tk] ||= [];
      result[tk].push([next(), next(), next()]);

    } else if (["superfaction", "denari"].includes(tk)) {
      result.faction.at(-1)[tk] = next();

    } else if (["faction"].includes(tk)) {
      result[tk] ||= [];
      result[tk].push({
        name: next(),
        ai: [next(), next()],
        settlement: [],
        character: [],
        character_record: [],
        relative: [],
      });

    } else if (["night_battles_enabled"].includes(tk)) {
      result[tk] = true;

    } else if (["settlement"].includes(tk)) {
      const settlement = {
        [next()]: next(),
        [next()]: next(),
        [next()]: next(),
        [next()]: next(),
        [next()]: next(),
        [next()]: next(),
        building: [],
      };
      result.faction.at(-1).settlement.push(settlement);

    } else if (["building"].includes(tk)) {
      const building = {
        [next()]: [next(), next()],
      };
      result.faction.at(-1).settlement.at(-1).building.push(building);

    } else if (["character"].includes(tk)) {
      const a = parser.untilNl().trim().split(", ");
      let [name, type, role] = a;
      let sub_faction;
      if (name.split(" ")[0] === "sub_faction") {
        sub_faction = name.split(" ")[1];
        name = a[1];
        type = a[2];
        role = a[3];
      }
      role = ["leader", "heir"].includes(role) ? role : undefined;
      const [age, _, x, y] = a.slice(-4).map((x) => +x.split(" ")[1]);
      const character = {
        name,
        type,
        age,
        role,
        pos: [x, y],
        sub_faction,
        unit: [],
      };
      result.faction.at(-1).character.push(character);

    } else if (["unit"].includes(tk)) {
      // const a = parser.untilNl().trim().split(/\W+/)
      const props = next("\n");

      const unit = {
        name: props.slice(0, -6),
        props: [props.at(-5), props.at(-3), props.at(-1)],
      };
      result.faction.at(-1).character.at(-1).unit.push(unit);

    } else if (["traits"].includes(tk)) {
      const traits = next("\n");
      result.faction.at(-1).character.at(-1).traits = arrToObj(traits);

    } else if (["ancillaries"].includes(tk)) {
      const ancillaries = next("\n");
      result.faction.at(-1).character.at(-1).ancillaries = ancillaries;

    } else if (["character_record"].includes(tk)) {
      const character_record = {
        name: next(","),
        sex: next(),
        [next()]: next(),
        [next()]: next(),
        [next()]: next(),
        [next()]: next(),
        [next()]: next(),
        [next()]: true,
        [next()]: true,
      };
      result.faction.at(-1).character_record.push(character_record);

    } else if (["relative"].includes(tk)) {
      result.faction.at(-1).relative.push(parser.untilNl());

    } else if (["army"].includes(tk)) {
			
    } else console.log(tk, parser.line);
  }

  return result;
}

function arrToObj(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 2) result[arr[i]] = arr[i + 1];
  return result;
}
