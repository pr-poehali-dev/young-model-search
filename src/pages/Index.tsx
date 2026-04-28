import { useState } from 'react';
import { toast } from 'sonner';
import NavHero from '@/components/maison/NavHero';
import PortfolioRequirements from '@/components/maison/PortfolioRequirements';
import ApplyContacts from '@/components/maison/ApplyContacts';
import { type Model } from '@/components/maison/data';

const Index = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
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
      <NavHero activeSection={activeSection} scrollTo={scrollTo} />
      <PortfolioRequirements
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        scrollTo={scrollTo}
      />
      <ApplyContacts form={form} setForm={setForm} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Index;
