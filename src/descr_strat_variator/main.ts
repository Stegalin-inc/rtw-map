import { parse_descr_stat } from "./parse_descr_stat"
import descrt from './descr_strat.txt?raw'
import { gen_descr_stat } from "./gen_descr_stat";

const parsed = parse_descr_stat(descrt)
console.log(parsed);
console.log(gen_descr_stat(parsed));


const fileEl = document.getElementById('descr_strat_file')!

fileEl.onchange = async (e) => {
	const file: File = e.target.files[0]
	const a = await file.text()
	// console.log(a);

	console.log(parse_descr_stat(a))

}