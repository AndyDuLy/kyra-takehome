export function formatDateNoYear(date: string) {
  const splitDate = date.split("-");
  const month = splitDate[1];
  const day = splitDate[2];

  return `${month}-${day}`;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatLastPostedOn(date: Date) {
  if (!date) return "No date available";

  const day = date.getDate();
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  return `${day}${suffix} ${date.toLocaleString("default", {
    month: "short",
  })} '${date.getFullYear().toString().slice(-2)}`;
}
