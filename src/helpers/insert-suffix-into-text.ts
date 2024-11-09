type Options = {
  text: string;
  suffix: string;
  insertCondition: boolean;
};

const insertSuffixIntoText = ({ text, suffix, insertCondition }: Options) => {
  if (!insertCondition) {
    return text;
  }

  return `${text} - ${suffix}`;
};

export { insertSuffixIntoText };
