'use client';

import Image from 'next/image';
import { Scissors, Sparkles, Waves } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Scissors,
    name: 'Premium Haircuts',
    description: 'Precision cuts tailored to your face shape and personal style.',
    price: '₹499 - ₹799',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1552226881-b01f46c2b251?w=400&h=400&fit=crop',
  },
  {
    icon: Waves,
    name: 'Hair Styling & Color',
    description: 'Transform with vibrant colors and professional styling that lasts.',
    price: '₹699 - ₹1299',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1562322140-8baeae34c886?w=400&h=400&fit=crop',
  },
  {
    icon: Sparkles,
    name: 'Beauty Treatments',
    description: 'Face care, threading, waxing — complete beauty rejuvenation.',
    price: '₹299 - ₹899',
    duration: '30-45 mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03cb5f713?w=400&h=400&fit=crop',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Signature Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each service crafted with premium products and expert technique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Icon className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-purple-600 font-semibold">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>

                  <Link
                    href="/booking"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all text-center"
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="text-purple-600 font-semibold text-lg hover:text-purple-700 inline-flex items-center gap-2"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
