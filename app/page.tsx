// app/page.tsx
import NewSection from '@/components/NewSection';
import Hero from '../components/Hero';
import N1CasinoText from '@/components/N1CasinoText';
import CategorySection from '@/components/CategorySection';

export default function HomePage() {
  return (
    <main className='bg-gray-900'>
      <Hero />
      <CategorySection />
      <NewSection />
      <N1CasinoText />
    </main>
  );
}
