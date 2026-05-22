import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Scissors, Sparkles, Waves, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Jyo Unisex Beauty Salon',
  description: 'Explore all our premium salon services - haircuts, styling, color treatments, and beauty care.',
};

const allServices = [
  {
    icon: Scissors,
    name: 'Premium Haircuts',
    description: 'Precision cuts tailored to your face shape and personal style.',
    price: '₹499 - ₹799',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1552226881-b01f46c2b251?w=400&h=400&fit=crop',
    details: 'Our expert stylists analyze your face shape and hair texture to create the perfect cut. Whether you want a classic look or something modern, we deliver results that exceed expectations.',
  },
  {
    icon: Waves,
    name: 'Hair Styling & Color',
    description: 'Transform with vibrant colors and professional styling that lasts.',
    price: '₹699 - ₹1299',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1562322140-8baeae34c886?w=400&h=400&fit=crop',
    details: 'From subtle highlights to bold transformations, our color specialists use premium products to create stunning, lasting results.',
  },
  {
    icon: Sparkles,
    name: 'Beauty Treatments',
    description: 'Face care, threading, waxing — complete beauty rejuvenation.',
    price: '₹299 - ₹899',
    duration: '30-45 mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03cb5f713?w=400&h=400&fit=crop',
    details: 'Professional facial treatments, threading, waxing, and grooming services for complete beauty care.',
  },
  {
    icon: Zap,
    name: 'Quick Trims & Touch-ups',
    description: 'Maintain your style with quick, expert maintenance visits.',
    price: '₹299 - ₹499',
    duration: '20-30 mins',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    details: 'Between-appointment maintenance to keep your look fresh. Perfect for busy professionals.',
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">Premium salon solutions for your every need</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {allServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Icon className="text-purple-600" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                    </div>

                    <p className="text-gray-700 mb-4">{service.details}</p>

                    <div className="flex justify-between items-center mb-6 text-sm bg-gray-100 p-4 rounded-lg">
                      <span className="text-purple-600 font-semibold">{service.price}</span>
                      <span className="text-gray-600">{service.duration}</span>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all text-center"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Tiers</h2>
            <p className="text-xl text-gray-600">Transparent pricing for all service levels</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { level: 'Basic', price: '₹299+', services: ['Quick trims', 'Basic styling', 'Threading', 'Waxing'] },
              { level: 'Premium', price: '₹699+', services: ['Expert haircuts', 'Color services', 'Facial treatments', 'Conditioning'] },
              { level: 'Elite', price: '₹1299+', services: ['Luxury treatments', 'Premium color', 'Hair therapy', 'Specialized care'] },
            ].map((tier, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.level}</h3>
                <p className="text-3xl font-bold text-purple-600 mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.services.map((service, sidx) => (
                    <li key={sidx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-purple-500">✓</span> {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-gray-900">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl mb-8">Choose your service and schedule your appointment now</p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
