export const formatedDate = (
  stringDate: string | undefined
): string | undefined => {
  if (!stringDate) return "";

  const date = new Date(parseInt(stringDate));

  const getOrdinalSuffix = (number: number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = number % 100;
    return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
  };

  const createdDate = `${date.getDate()}${getOrdinalSuffix(
    date.getDate()
  )} ${date.toLocaleString("default", { month: "short" })}`;

  return createdDate;
};
