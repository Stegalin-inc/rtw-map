import { Descr_Strat, Faction, Settlement } from "./types";
/* 
character\tобязательно
unit name\tобязательно
character_record\tобязательно(вылет)
relative\tобязательно

{} на новой строке обязательно
\r\n окончание обязательно

*/
export function gen_descr_stat(data: Descr_Strat): string {
  let result = "";
  const addLine = (str: string) => (result += str + "\r\n");
  const simpleProp = (k: keyof Descr_Strat, joiner = " ", sep = ' ') => {
    if (Array.isArray(data[k])) addLine(k + sep + data[k].join(joiner));
    else addLine(k + sep + data[k]);
  };

  const genSettlement = (settlement: Settlement) => {
    addLine(`settlement\r\n{`);
    addLine(`level ${settlement.level}`);
    addLine(`region ${settlement.region}`);
    addLine(`year_founded ${settlement.year_founded}`);
    addLine(`population ${settlement.population}`);
    addLine(`plan_set ${settlement.plan_set}`);
    addLine(`faction_creator ${settlement.faction_creator}`);
    settlement.building.forEach((building) => {
      addLine(
        `building\r\n{\r\ntype ${building.type.join(" ")}\r\n}`
      );
    });
    addLine(`}`);
  };

  const genFaction = (faction: Faction) => {
    addLine(`faction ${faction.name}, ${faction.ai.join(" ")}`);
    if (faction.superfaction) addLine(`superfaction ${faction.superfaction}`);
    addLine(`denari ${faction.denari}`);
    faction.settlement.forEach(genSettlement);
    faction.character.forEach((c) => {
      addLine(
        `character\t${c.sub_faction ? `sub_faction ${c.sub_faction}, ` : ""}${c.name}, ${c.type}, ${
          c.role ? c.role + "," : ""
        } age ${c.age}, , x ${c.pos[0]}, y ${c.pos[1]} `
      );
      if (c.traits)
        addLine(
          `traits ${Object.entries(c.traits)
            .map((x) => x.join(" "))
            .join(" , ")}`
        );
      if (c.unit.length) {
        addLine("army");
        c.unit.forEach((unit) =>
          addLine(
            `unit		${unit.name.join(" ")}				exp ${unit.props[0]} armour ${unit.props[1]} weapon_lvl ${
              unit.props[2]
            }`
          )
        );
      }
    });
    faction.character_record.forEach((cr) => {
      addLine(
        `character_record		${cr.name.join(" ")}, 	${cr.sex}, command ${cr.command}, influence ${
          cr.influence
        }, management ${cr.management}, subterfuge ${cr.subterfuge}, age ${
          cr.age
        }, alive, never_a_leader`
      );
    });
    faction.relative.forEach((r) => {
      addLine("relative\t" + r+'\n');
    });
  };
  addLine('; Genered by descr strat variator tool by Gleb Stegalin')
   simpleProp('campaign')
    simpleProp('playable', '\r\n\t', '\r\n')
    addLine('end')
    simpleProp('unlockable', '\r\n\t', '\r\n')
    addLine('end')
    simpleProp('nonplayable', '\r\n\t', '\r\n')
    addLine('end')
    simpleProp('start_date')
    simpleProp('end_date')
    simpleProp('brigand_spawn_value')
    simpleProp('pirate_spawn_value')
    
    data.landmark.forEach(landmark => {
        const [name, x, y] = landmark
        addLine(`landmark ${name} ${x}, ${y}`)
    })
    
    data.resource.forEach(resource => {
        const [name, x, y] = resource
        addLine(`resource ${name}, ${x}, ${y}`)
    })
  data.faction.forEach(genFaction);
  data.core_attitudes.forEach(x=>addLine(`core_attitudes ${x.from}, ${x.value} ${x.to}`))
  data.faction_relationships.forEach(x=>addLine(`faction_relationships ${x.from}, ${x.value} ${x.to}`))

  return result;
}
