type MetadataConfig = {
  title: string;
  url: string;
  description: string;
  author: string;
  socialMediaImage: string;
  startYear: number;
};

export const metadataConfig: MetadataConfig = {
  title: 'HistoryBook',
  url: import.meta.env.SITE_URL,
  description:
    'Огляд подій в освіті України, розробки уроків історії в школах.',
  author: 'Ірина Радченко',
  socialMediaImage: '/images/social-image.jpg',
  startYear: 2020,
};
