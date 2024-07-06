export const convertDateToPersian = (date: string) => {
  const dateObj = new Date(date);

  const persianDate = dateObj.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return persianDate;
};
