import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/d022bc97-22fc-4faf-a364-427ebf346ae2/files/c5ebaeba-0ff5-4826-ad61-ac19dfab97f4.jpg';

const MODELS = [
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

const REQUIREMENTS = {
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

const Index = () => {
  const [selectedModel, setSelectedModel] = useState<typeof MODELS[0] | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [form, setForm] = useState({
    name: '',
    age: '',
    height: '',
    measurements: '',
    city: '',
    phone: '',
    email: '',
    instagram: '',
    experience: '',
  });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.age) {
      toast.error('Заполните обязательные поля');
      return;
    }
    toast.success('Заявка отправлена', {
      description: 'Наш скаут свяжется с вами в течение 48 часов',
    });
    setForm({
      name: '',
      age: '',
      height: '',
      measurements: '',
      city: '',
      phone: '',
      email: '',
      instagram: '',
      experience: '',
    });
  };

  return (
    <div className="min-h-screen bg-noir text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-noir/80 backdrop-blur-md border-b border-gold/10">
        <div className="container flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-gold/60 flex items-center justify-center">
              <span className="font-cormorant text-gold text-xl italic">M</span>
            </div>
            <div>
              <div className="font-cormorant text-xl tracking-elegant">MAISON</div>
              <div className="text-[10px] tracking-luxury text-gold/70 uppercase">Models Agency</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-xs tracking-elegant uppercase">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'portfolio', label: 'Портфолио' },
              { id: 'requirements', label: 'Требования' },
              { id: 'apply', label: 'Заявка' },
              { id: 'contacts', label: 'Контакты' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-colors hover:text-gold ${
                  activeSection === item.id ? 'text-gold' : 'text-foreground/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollTo('apply')}
            variant="outline"
            className="hidden md:flex border-gold/60 text-gold hover:bg-gold hover:text-noir rounded-none tracking-elegant text-xs uppercase"
          >
            Подать заявку
          </Button>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir" />
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 gold-line" />
            <span className="text-gold text-xs tracking-luxury uppercase">Est. 2008</span>
            <div className="h-px w-16 gold-line" />
          </div>

          <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-6">
            <span className="block">Образ —</span>
            <span className="block italic gold-gradient">искусство</span>
          </h1>

          <p className="max-w-xl mx-auto text-foreground/70 text-sm md:text-base font-light tracking-wide leading-relaxed mb-12">
            Международное модельное агентство премиум-класса.
            Мы превращаем талант в легенду индустрии моды.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollTo('apply')}
              className="bg-gold hover:bg-gold-light text-noir rounded-none px-10 py-6 tracking-elegant text-xs uppercase font-medium"
            >
              Стать моделью
            </Button>
            <Button
              onClick={() => scrollTo('portfolio')}
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground hover:text-noir rounded-none px-10 py-6 tracking-elegant text-xs uppercase"
            >
              Наши модели
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-gold-shimmer">
          <Icon name="ChevronDown" size={28} className="text-gold" />
        </div>
      </section>

      <section className="py-20 border-y border-gold/10">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '17', label: 'Лет на рынке' },
            { value: '240+', label: 'Моделей в каталоге' },
            { value: '85', label: 'Брендов-партнёров' },
            { value: '32', label: 'Страны мира' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-cormorant text-5xl md:text-6xl gold-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-luxury uppercase text-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="py-32">
        <div className="container">
          <div className="text-center mb-20">
            <div className="text-gold text-xs tracking-luxury uppercase mb-4">Talent Roster</div>
            <h2 className="font-cormorant text-5xl md:text-7xl mb-6">
              Галерея <span className="italic gold-gradient">портфолио</span>
            </h2>
            <div className="h-px w-24 gold-line mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODELS.map((model) => (
              <div
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className="group cursor-pointer relative overflow-hidden bg-noir-soft"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-gold text-[10px] tracking-luxury uppercase mb-2">
                    {model.category}
                  </div>
                  <h3 className="font-cormorant text-2xl mb-1">{model.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-foreground/70 tracking-wide">
                    <span>{model.height}</span>
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    <span>{model.age} лет</span>
                  </div>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-gold text-[10px] tracking-luxury uppercase border-b border-gold/60 pb-1">
                      Открыть профиль
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedModel && (
        <div
          className="fixed inset-0 z-50 bg-noir/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedModel(null)}
        >
          <div
            className="bg-noir-soft border border-gold/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[3/4] md:aspect-auto">
              <img
                src={selectedModel.image}
                alt={selectedModel.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-10 relative">
              <button
                onClick={() => setSelectedModel(null)}
                className="absolute top-4 right-4 text-foreground/60 hover:text-gold"
              >
                <Icon name="X" size={20} />
              </button>

              <div className="text-gold text-xs tracking-luxury uppercase mb-3">
                {selectedModel.category}
              </div>
              <h3 className="font-cormorant text-4xl mb-6">{selectedModel.name}</h3>
              <div className="h-px w-16 gold-line mb-8" />

              <div className="space-y-4">
                {[
                  { label: 'Рост', value: selectedModel.height },
                  { label: 'Возраст', value: `${selectedModel.age} лет` },
                  { label: 'Параметры', value: selectedModel.measurements },
                  { label: 'Глаза', value: selectedModel.eyes },
                  { label: 'Волосы', value: selectedModel.hair },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-gold/10 pb-3">
                    <span className="text-[10px] tracking-luxury uppercase text-foreground/60">
                      {item.label}
                    </span>
                    <span className="text-sm tracking-wide">{item.value}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => {
                  setSelectedModel(null);
                  scrollTo('contacts');
                }}
                className="w-full mt-10 bg-gold hover:bg-gold-light text-noir rounded-none tracking-elegant text-xs uppercase"
              >
                Запросить букинг
              </Button>
            </div>
          </div>
        </div>
      )}

      <section id="requirements" className="py-32 bg-noir-soft border-y border-gold/10">
        <div className="container">
          <div className="text-center mb-20">
            <div className="text-gold text-xs tracking-luxury uppercase mb-4">Selection Criteria</div>
            <h2 className="font-cormorant text-5xl md:text-7xl mb-6">
              Требования <span className="italic gold-gradient">к моделям</span>
            </h2>
            <div className="h-px w-24 gold-line mx-auto mb-6" />
            <p className="text-foreground/60 max-w-2xl mx-auto text-sm font-light leading-relaxed">
              Мы ищем не просто внешность — мы ищем характер, дисциплину
              и преданность профессии. Соответствие критериям — лишь начало пути.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Female Division', items: REQUIREMENTS.women, icon: 'Crown' },
              { title: 'Male Division', items: REQUIREMENTS.men, icon: 'Award' },
            ].map((division) => (
              <div key={division.title} className="premium-border bg-noir p-10 transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <Icon name={division.icon} size={28} className="text-gold" />
                  <h3 className="font-cormorant text-3xl tracking-wide">{division.title}</h3>
                </div>

                <div className="space-y-5">
                  {division.items.map((req) => (
                    <div key={req.label} className="flex items-baseline justify-between gap-4">
                      <div className="text-[11px] tracking-luxury uppercase text-foreground/50">
                        {req.label}
                      </div>
                      <div className="flex-1 border-b border-dotted border-gold/20 mx-3 mb-1" />
                      <div className="font-cormorant text-lg text-gold-light">{req.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h4 className="font-cormorant text-2xl mb-8">Что мы ценим помимо параметров</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: 'Sparkles', label: 'Харизма' },
                { icon: 'Clock', label: 'Пунктуальность' },
                { icon: 'Heart', label: 'Дисциплина' },
                { icon: 'Languages', label: 'Английский' },
              ].map((item) => (
                <div key={item.label} className="p-6 border border-gold/15">
                  <Icon name={item.icon} size={24} className="text-gold mx-auto mb-3" />
                  <div className="text-xs tracking-elegant uppercase text-foreground/80">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-32">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <div className="text-gold text-xs tracking-luxury uppercase mb-4">Casting Application</div>
            <h2 className="font-cormorant text-5xl md:text-7xl mb-6">
              Подать <span className="italic gold-gradient">заявку</span>
            </h2>
            <div className="h-px w-24 gold-line mx-auto mb-6" />
            <p className="text-foreground/60 text-sm font-light leading-relaxed">
              Заполните анкету. Наш скаут изучит вашу заявку и свяжется в течение 48 часов.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-noir-soft border border-gold/15 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                  Имя и фамилия *
                </Label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-noir border-gold/20 rounded-none focus:border-gold h-12"
                  placeholder="Анна Иванова"
                />
              </div>
              <div>
                <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                  Возраст *
                </Label>
                <Input
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  className="bg-noir border-gold/20 rounded-none focus:border-gold h-12"
                  placeholder="22"
                  type="number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                  Рост (см)
                </Label>
                <Input
                  value={form.height}
                  onChange={(e) => setForm({ ...form, height: e.target.value })}
                  className="bg-noir border-gold/20 rounded-none focus:border-gold h-12"
                  placeholder="178"
                />
              </div>
              <div>
                <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                  Параметры (грудь—талия—бёдра)
                </Label>
                <Input
                  value={form.measurements}
                  onChange={(e) => setForm({ ...form, measurements: e.target.value })}
                  className="bg-noir border-gold/20 rounded-none focus:border-gold h-12"
                  placeholder="86—60—89"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                  Город
                </Label>
                <Input
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="bg-noir border-gold/20 rounded-none focus:border-gold h-12"
                  placeholder="Москва"
                />
              </div>
              <div>
                <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                  Телефон *
                </Label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-noir border-gold/20 rounded-none focus:border-gold h-12"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                  Email
                </Label>
                <Input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-noir border-gold/20 rounded-none focus:border-gold h-12"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div>
                <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                  Instagram
                </Label>
                <Input
                  value={form.instagram}
                  onChange={(e) => setForm({ ...form, instagram: e.target.value })}
                  className="bg-noir border-gold/20 rounded-none focus:border-gold h-12"
                  placeholder="@username"
                />
              </div>
            </div>

            <div>
              <Label className="text-[10px] tracking-luxury uppercase text-foreground/70 mb-2 block">
                Опыт работы / комментарий
              </Label>
              <Textarea
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                className="bg-noir border-gold/20 rounded-none focus:border-gold min-h-32"
                placeholder="Расскажите о съёмках, показах, агентствах..."
              />
            </div>

            <div className="text-[11px] text-foreground/50 leading-relaxed">
              Отправляя заявку, вы соглашаетесь с обработкой персональных данных
              и принимаете условия конфиденциальности агентства.
            </div>

            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-noir rounded-none py-6 tracking-luxury text-xs uppercase font-medium"
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      <section id="contacts" className="py-32 bg-noir-soft border-t border-gold/10">
        <div className="container">
          <div className="text-center mb-20">
            <div className="text-gold text-xs tracking-luxury uppercase mb-4">Get in touch</div>
            <h2 className="font-cormorant text-5xl md:text-7xl mb-6">
              <span className="italic gold-gradient">Контакты</span>
            </h2>
            <div className="h-px w-24 gold-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'MapPin',
                title: 'Главный офис',
                lines: ['Москва, Кузнецкий мост 12', 'БЦ «Maison», 4 этаж'],
              },
              {
                icon: 'Phone',
                title: 'Телефон',
                lines: ['+7 929 907 7996'],
              },
              {
                icon: 'Mail',
                title: 'Электронная почта',
                lines: ['pol.roket@mail.ru'],
              },
              {
                icon: 'Send',
                title: 'Telegram',
                lines: ['@Workklass77'],
              },
            ].map((item) => (
              <div key={item.title} className="text-center premium-border p-10 bg-noir transition-all">
                <Icon name={item.icon} size={28} className="text-gold mx-auto mb-6" />
                <h3 className="font-cormorant text-2xl mb-4">{item.title}</h3>
                <div className="space-y-1">
                  {item.lines.map((line) => (
                    <div key={line} className="text-sm text-foreground/70 tracking-wide">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="text-[10px] tracking-luxury uppercase text-foreground/50 mb-6">
              Социальные сети
            </div>
            <div className="flex justify-center gap-4">
              {['Instagram', 'Facebook', 'Youtube', 'Send'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-noir transition-all"
                >
                  <Icon name={icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gold/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-gold/60 flex items-center justify-center">
              <span className="font-cormorant text-gold text-base italic">M</span>
            </div>
            <div className="font-cormorant tracking-elegant">MAISON</div>
          </div>
          <div className="text-[10px] tracking-luxury uppercase text-foreground/40">
            © 2008 — 2026 Maison Models Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;