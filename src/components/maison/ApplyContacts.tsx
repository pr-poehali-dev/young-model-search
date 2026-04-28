import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormState {
  name: string;
  age: string;
  height: string;
  measurements: string;
  city: string;
  phone: string;
  email: string;
  instagram: string;
  experience: string;
}

interface ApplyContactsProps {
  form: FormState;
  setForm: (f: FormState) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ApplyContacts = ({ form, setForm, handleSubmit }: ApplyContactsProps) => {
  return (
    <>
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
    </>
  );
};

export default ApplyContacts;
