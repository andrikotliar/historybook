export const constructUrl = (...args: (string | number)[]) => {
  const url = args.join('/');

  return `/${url}/`;
};
