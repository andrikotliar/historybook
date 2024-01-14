const limitArray = <T>(array: T[], limit: number) => {
  return array.slice(0, limit);
};

export { limitArray };
