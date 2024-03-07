const formatDate = function () {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);

  return formattedDate;
};

const dates = { formatDate };

export { dates };
