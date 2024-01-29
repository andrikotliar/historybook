const cyrillicToLatin = (title) => {
  const config = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    є: 'ye',
    ж: 'zh',
    з: 'z',
    и: 'y',
    і: 'i',
    ї: 'yi',
    й: 'j',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ь: '',
    ю: 'yu',
    я: 'ya',
  };

  const lowercasedTitle = title.toLowerCase();
  const sanitizedTitle = lowercasedTitle.replace(/[^a-zа-я0-9-]/g, '');

  const transformedCharacters = Array.from(sanitizedTitle).map((character) => {
    if (config[character]) {
      return config[character];
    }
    return character;
  });

  const slug = transformedCharacters.join('');

  return slug;
};
