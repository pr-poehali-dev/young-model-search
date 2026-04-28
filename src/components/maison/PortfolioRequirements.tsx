import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { MODELS, REQUIREMENTS, type Model } from './data';

interface PortfolioRequirementsProps {
  selectedModel: Model | null;
  setSelectedModel: (m: Model | null) => void;
  scrollTo: (id: string) => void;
}

const PortfolioRequirements = ({ selectedModel, setSelectedModel, scrollTo }: PortfolioRequirementsProps) => {
  return (
    <>
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
    </>
  );
};

export default PortfolioRequirements;
