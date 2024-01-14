type HeaderMenu = {
  title: string;
  link: string;
};

const headerMenu: HeaderMenu[] = [
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

export { headerMenu };
export type { HeaderMenu };
