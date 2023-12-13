export const MyMapCmp = <T>(cmp: (a: T, b: T) => boolean) => ({
  data: [] as {key: T, val: any}[],
  set(l: T, val: any) {
    const i = this.data.findIndex((x) => cmp(x.key, l));
    if (i !== -1) this.data[i].val = val;
    else this.data.push({ key: l, val });
  },
  has(l: T) {
    return this.data.findIndex((x) => cmp(x.key, l)) !== -1;
  },
  get(l: T, init: any) {
    if (this.has(l)) return this.data.find((x) => cmp(x.key, l)).val;
    this.set(l, init);
    return init;
  },
});
export const MyMapId = <T>(id: (a: T) => any) => ({
  data: {},
  set(l: T, val: any) {
    this.data[id(l)] = val;
  },
  has(l: T) {
    return id(l) in this.data;
  },
  get(l: T, init: any) {
    return this.data[id(l)];
  },
});
