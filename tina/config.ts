import { defineConfig, type Collection, type TinaField } from 'tinacms';
import { PageId } from '../src/enums/page-id';

const SLUG_FILTER_REGEX = /[^a-zA-Z0-9\u0400-\u04FF]+/g;
const CLIENT_ID = process.env.TINA_CLIENT_ID;

const genericFields: TinaField[] = [
  {
    type: 'string',
    name: 'title',
    label: 'Заголовок',
    isTitle: true,
    required: true,
  },
  {
    type: 'string',
    name: 'description',
    label: 'Короткий опис',
    required: true,
  },
  {
    type: 'datetime',
    name: 'date',
    label: 'Дата публікації',
    required: true,
    ui: {
      dateFormat: 'YYYY-MM-DD',
    },
  },
  {
    type: 'rich-text',
    name: 'body',
    label: 'Контент',
    isBody: true,
  },
];

const uiConfig: Collection['ui'] = {
  filename: {
    readonly: true,
    slugify: (values) => {
      return convertTitleIntoFileName(values.title);
    },
  },
  allowedActions: {
    create: true,
    delete: true,
    createNestedFolder: false,
  },
};

export default defineConfig({
  branch: 'main',
  clientId: CLIENT_ID,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: PageId.LESSONS,
        label: 'Уроки',
        path: 'src/content/lessons',
        ui: uiConfig,
        fields: genericFields,
      },
      {
        name: PageId.FIGURES,
        label: 'Історичні постаті',
        path: 'src/content/figures',
        ui: uiConfig,
        fields: genericFields,
      },
      {
        name: PageId.STORIES,
        label: 'Розповіді',
        path: 'src/content/stories',
        ui: uiConfig,
        fields: genericFields,
      },
      {
        name: PageId.NEWS,
        label: 'Новини',
        path: 'src/content/news',
        ui: uiConfig,
        fields: genericFields,
      },
    ],
  },
});

const lettersConfig = {
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
  ь: '-',
  ю: 'yu',
  я: 'ya',
};

function convertTitleIntoFileName(title: string) {
  if (!title) {
    return '';
  }

  const lowercasedTitle = title.toLowerCase();
  const sanitizedTitle = lowercasedTitle.replace(SLUG_FILTER_REGEX, '-');

  const transformedCharacters = Array.from(sanitizedTitle).map((character) => {
    if (lettersConfig[character as keyof typeof lettersConfig]) {
      return lettersConfig[character as keyof typeof lettersConfig];
    }
    return character;
  });

  const slug = transformedCharacters.join('');

  return slug;
}
