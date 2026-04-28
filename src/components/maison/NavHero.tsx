import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { HERO_IMAGE } from './data';

interface NavHeroProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

const NavHero = ({ activeSection, scrollTo }: NavHeroProps) => {
  return (
    <>
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
    </>
  );
};

export default NavHero;
