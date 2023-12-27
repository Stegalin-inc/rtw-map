import { Descr_Strat } from "./types";

export function gen_descr_stat(data: Descr_Strat): string {
    let result = ''
    const addLine = (str: string)=>result+=str+'\n';
    const simpleProp = (k: keyof Descr_Strat)=>{
        if(Array.isArray(data[k]))
        addLine(k+' '+data[k].join(' '))
        else
        addLine(k+' '+data[k])
    }

    simpleProp('campaign')
    simpleProp('start_date')
    simpleProp('end_date')
    simpleProp('brigand_spawn_value')
    simpleProp('pirate_spawn_value')

    return result
}