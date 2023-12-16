import { BookARoom, GridSection, Hero, SpecialOffers } from '@/modules';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <BookARoom />
      <GridSection />
      <SpecialOffers />
    </main>
  );
}
