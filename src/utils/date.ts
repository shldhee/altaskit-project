const formatISODate = (isoDateString: string) => {
  const date = new Date(isoDateString);

  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formattedDate;
};

export { formatISODate };
