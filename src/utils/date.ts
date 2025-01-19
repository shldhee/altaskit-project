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

export { formatISODate };
