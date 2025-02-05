export function formatNumber(number: number) {
  return number.toLocaleString();
}

export function formatNumberTruncateDecimals(number: number) {
  return Math.trunc(number);
}
