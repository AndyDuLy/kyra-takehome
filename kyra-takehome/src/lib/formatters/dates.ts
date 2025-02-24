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

export function formatDayMonth(date: Date) {
  const day = date.toLocaleDateString("en-CA", { day: "numeric" });
  const month = date.toLocaleDateString("en-CA", { month: "short" });

  const formattedDate = `${day} ${month}`;

  return formattedDate;
}

export function formatDateAsDateType(date: string) {
  return new Date(date);
}
