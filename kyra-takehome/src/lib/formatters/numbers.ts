export function formatNumberTruncateDecimals(number: number) {
  return Math.trunc(number);
}

export function determineMagnitude(number: number) {
  if (number >= 1e9) {
    return "b";
  } else if (number >= 1e6) {
    return "m";
  } else if (number >= 1e3) {
    return "k";
  } else {
    return undefined;
  }
}

export function formatMagnitude(number: number) {
  if (number >= 1e9) {
    return Number((number / 1e9).toFixed(1));
  } else if (number >= 1e6) {
    return Number((number / 1e6).toFixed(1));
  } else if (number >= 1e3) {
    return Number((number / 1e3).toFixed(1));
  }

  return number;
}

export function formatAsPercentage(number: number) {
  return Number((number * 0.01).toFixed(3));
}

export function formatPercentageRaise(number: number) {
  return Number((number * 100).toFixed(2));
}
