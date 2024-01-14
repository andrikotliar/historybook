const formatDate = (rawDate?: string | Date) => {
  if (!rawDate) {
    return null;
  }

  const date = new Date(rawDate);

  return date.toLocaleString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export { formatDate };
