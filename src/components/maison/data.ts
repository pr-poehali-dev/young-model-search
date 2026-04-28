export const HERO_IMAGE = 'https://cdn.poehali.dev/projects/d022bc97-22fc-4faf-a364-427ebf346ae2/files/c5ebaeba-0ff5-4826-ad61-ac19dfab97f4.jpg';

export const MODELS = [
  {
    id: 1,
    name: 'Анастасия К.',
    image: 'https://cdn.poehali.dev/projects/d022bc97-22fc-4faf-a364-427ebf346ae2/files/594e8d39-a6fc-4727-964f-0bd2715b4ed4.jpg',
    height: '178 см',
    age: 22,
    category: 'Fashion',
    measurements: '86—60—89',
    eyes: 'Карие',
    hair: 'Тёмные',
  },
  {
    id: 2,
    name: 'Александр М.',
    image: 'https://cdn.poehali.dev/projects/d022bc97-22fc-4faf-a364-427ebf346ae2/files/421670c4-c833-45ca-b992-3a9f4e029eb7.jpg',
    height: '188 см',
    age: 26,
    category: 'Editorial',
    measurements: '102—82—98',
    eyes: 'Серые',
    hair: 'Тёмные',
  },
  {
    id: 3,
    name: 'Виктория Л.',
    image: 'https://cdn.poehali.dev/projects/d022bc97-22fc-4faf-a364-427ebf346ae2/files/6dfa8e83-4b71-4db1-999e-47d072c78b58.jpg',
    height: '180 см',
    age: 21,
    category: 'Runway',
    measurements: '84—59—88',
    eyes: 'Зелёные',
    hair: 'Русые',
  },
  {
    id: 4,
    name: 'Елена С.',
    image: 'https://cdn.poehali.dev/projects/d022bc97-22fc-4faf-a364-427ebf346ae2/files/2dc98aea-7273-47cb-80ff-d4f53df7ba66.jpg',
    height: '176 см',
    age: 24,
    category: 'Commercial',
    measurements: '85—61—90',
    eyes: 'Голубые',
    hair: 'Светлые',
  },
  {
    id: 5,
    name: 'Михаил Р.',
    image: 'https://cdn.poehali.dev/projects/d022bc97-22fc-4faf-a364-427ebf346ae2/files/f74e6e77-9dda-42f8-a78b-f4eaae2662d8.jpg',
    height: '190 см',
    age: 27,
    category: 'High Fashion',
    measurements: '100—80—96',
    eyes: 'Карие',
    hair: 'Тёмные',
  },
];

export type Model = (typeof MODELS)[0];

export const REQUIREMENTS = {
  women: [
    { label: 'Рост', value: '174 — 182 см' },
    { label: 'Возраст', value: '15 — 28 лет' },
    { label: 'Параметры', value: '82—62—88 (±2)' },
    { label: 'Размер обуви', value: '37 — 41' },
    { label: 'Состояние кожи', value: 'Чистая, ухоженная' },
    { label: 'Фотогеничность', value: 'Обязательна' },
  ],
  men: [
    { label: 'Рост', value: '184 — 192 см' },
    { label: 'Возраст', value: '17 — 32 лет' },
    { label: 'Параметры', value: '96—80—98 (±3)' },
    { label: 'Размер обуви', value: '42 — 46' },
    { label: 'Телосложение', value: 'Атлетическое' },
    { label: 'Внешность', value: 'Выразительная' },
  ],
};
