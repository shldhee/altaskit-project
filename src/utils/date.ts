const formatISODate = (isoDateString: string | undefined) => {
  if (!isoDateString) return null;

  const date = new Date(isoDateString);

  if (isNaN(date.getTime())) {
    return null;
  }

  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formattedDate;
};

const getRelativeDateISO = (daysAgo = 7): string => {
  const relativeDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
  return relativeDate.toISOString();
};

const getOneWeekAgoISO = (): string => {
  return getRelativeDateISO(7);
};

const formatToYYYYMMDD = (isoString: string): string => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export { formatISODate, getOneWeekAgoISO, formatToYYYYMMDD };
