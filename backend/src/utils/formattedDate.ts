export function formattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}
