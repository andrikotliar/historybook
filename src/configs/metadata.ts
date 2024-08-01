type MetadataConfig = {
  title: string;
  url: string;
  description: string;
  author: string;
  socialMediaImage: string;
  startYear: number;
  currentYear: number;
};

const metadataConfig: MetadataConfig = {
  title: 'HistoryBook',
  url: 'https://historybook.netlify.app',
  description:
    'Огляд подій в освіті України, розробки уроків історії в школах.',
  author: 'Ірина Радченко',
  socialMediaImage: '/images/social-image.jpg',
  startYear: 2020,
  currentYear: new Date().getFullYear(),
};

export { metadataConfig, type MetadataConfig };
