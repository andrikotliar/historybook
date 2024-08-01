type NavigationConfig = {
  title: string;
  link: string;
};

const navigationConfig: NavigationConfig[] = [
  {
    title: 'Цікаві уроки історії',
    link: '/lessons/',
  },
  {
    title: 'Історичні постаті',
    link: '/figures/',
  },
  {
    title: 'Новини',
    link: '/news/',
  },
  {
    title: 'Розповіді',
    link: '/stories/',
  },
  {
    title: 'Про сайт',
    link: '/about/',
  },
];

export { navigationConfig, type NavigationConfig };
