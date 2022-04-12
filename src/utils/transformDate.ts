const transformDate = (string: string) => {
  const date = new Date(string);
  const month = Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export default transformDate;
