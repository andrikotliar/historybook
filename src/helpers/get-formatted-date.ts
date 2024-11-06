const getFormattedDate = (value: string) => {
  const date = new Date(value);

  return date.toLocaleString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export { getFormattedDate };
