const alnumRe = /^[0-9a-z_+']$/i;
const charRe = /^[a-z_]$/i;
const numRe = /^[0-9-]$/i;
type Tok = string | number | undefined
export class Parser {
    nextChar: () => string;
    curr: string = '';
    next: string = '';
    line = 0;
    // text: txt,
    constructor(nextChar: () => string) {
        this.nextChar = nextChar
        this.step()
        this.step()
    }
    step() {
        this.curr = this.next;
        this.next = this.nextChar();
        if(this.next === '\n') this.line++
    }
    skipComment() {
        while (this.curr !== "\n") this.step();
        this.step();
    }
    getWord() {
        let result = "";
        while (true) {
            if (alnumRe.test(this.curr)) result += this.curr;
            else return result;
            this.step();
        }
    }
    getNum() {
        let result = "";
        while (true) {
            if (numRe.test(this.curr)) result += this.curr;
            else return +result;
            this.step();
        }
    }
    _token() {
        let c = 100;
        while (c--) {
            const { curr, next } = this;
            if (curr === ";") {
                this.skipComment();
                continue;
            }
            if (this.isFilter(curr)) {
                this.step();
                return curr;
            }
            if (charRe.test(curr)) return this.getWord();
            if (numRe.test(curr)) return this.getNum();
            if (!curr) return curr;
            this.step();
        }
    }
    isFilter(tok: any) {
        return [",", "\n"].includes(tok);
    }
    token(): Tok {
        const tok = this._token();
        if (this.isFilter(tok)) return this.token();
        return tok;
    }
    untilNl() {
        let result = "";
        while (1) {
            if (this.curr === "\n") return result;
            result += this.curr;
            this.step();
        }
    }
    toksUntil(tok = ",") {
        const result = [];
        let c = 100
        while (c--) {
            const tk = this._token();
            if (tk === tok) {
                return result;
            }
            if (!this.isFilter(tk)) result.push(tk);
        }
    }
};