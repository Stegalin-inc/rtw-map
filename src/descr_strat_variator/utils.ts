export const download = (filename: string, text: string) => {
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export const variate = (
  val: number,
  factor: number = 20,
  min = 0,
  max = Number.MAX_SAFE_INTEGER
) => {
  const r = 1 + ((Math.random() * 2 - 1) * factor) / 100;
  return Math.min(max, Math.max(min, ~~(val * r)));
};

export const randArr = (arr) => arr[~~(arr.length * Math.random())];

// логарифмический рандом от 0 до х
// вероятность получить большее число в 2 раза меньше чем меньшее
// пример 0 - 50%, 1 - 25%,, 2 - 12%, и т.д.
export const sum = (arr) => arr.reduce((a, b) => a + b, 0);

export const logRand = (x) => ~~(x - Math.log2(~~(Math.random() * 2 ** x)));
