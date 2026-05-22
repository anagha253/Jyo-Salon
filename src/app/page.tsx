import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Hours from '@/components/Hours';
import MapEmbed from '@/components/MapEmbed';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Jyo Unisex Beauty Salon | Premium Hair & Beauty Services in Bengaluru',
  description: 'Discover your cut of dreams at Jyo Salon. Expert haircuts, styling, and treatments. Book your appointment today.',
};

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Jyo Unisex Beauty Salon',
    description: 'Premium unisex salon offering haircuts, styling, and beauty treatments',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    telephone: '+919110446469',
    priceRange: '₹299 - ₹1499',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen bg-white">
        <Hero />
        <Services />
        <Hours />
        <MapEmbed />
        <Reviews />
        <CTA />
      </main>
    </>
  );
}
