const cyrillicToLatin = (sentence) => {
  const config = {
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "e",
    "є": "ye",
    "ж": "zh",
    "з": "z",
    "и": "y",
    "і": "i",
    "ї": "yi",
    "й": "j",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "kh",
    "ц": "ts",
    "ч": "ch",
    "ш": "sh",
    "щ": "shch",
    "ь": "",
    "ю": "yu",
    "я": "ya",
    " ": "-"
  };

  const lcSentence = sentence.toLowerCase();

  const lettersArray = Array.from(lcSentence).map(letter => {
    if(config[letter]) {
      return config[letter];
    }
    if(!isNaN(Number(letter))) {
      return letter;
    }
    return '';
  });

  const restoredSentence = lettersArray.join('').replace(/--/g, '-');
  
  return restoredSentence;
};
