export function formatNumber(number: number) {
  return number.toLocaleString();
}

export function formatNumberTruncateDecimals(number: number) {
  return Math.trunc(number);
}

export function formatMagnitude(number: number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + "b";
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + "m";
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + "k";
  } else {
    return number.toString();
  }
}

export function formatAsPercentage(number: number) {
  return (number * 0.01).toFixed(3) + "%";
}

export function formatPercentageRaise(number: number) {
  return (number * 100).toFixed(2);
}
