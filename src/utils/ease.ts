export function setClass(
  ...classes: (string | boolean | null | number | undefined)[]
) {
  return classes.join(" ");
}

export function Decimal(float: number | string, length = 2) {
  if (float == "") return 0;
  //@ts-ignore

  if ((float?.length ?? false) && (float[float?.length - 1 ?? 0] ?? "") == ".")
    //@ts-ignore
    return length == 0 ? float.slice(0, -1) : float;

  //@ts-ignore
  return +parseFloat(float).toFixed(length);
}
