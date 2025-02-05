export function formatDateNoYear(date: string) {
  const splitDate = date.split("-");
  const month = splitDate[1];
  const day = splitDate[2];

  return `${month}-${day}`;
}
