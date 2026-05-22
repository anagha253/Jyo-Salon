'use client';

import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Singh',
    text: "Best haircut I've ever had! The stylists really listen to what you want and deliver perfectly.",
    rating: 5,
    service: 'Haircut & Styling',
  },
  {
    name: 'Arjun Patel',
    text: 'Professional, clean, and reasonably priced. Will definitely be back for my next appointment.',
    rating: 5,
    service: 'Premium Haircut',
  },
  {
    name: 'Neha Kapoor',
    text: "The attention to detail is incredible. I felt pampered and the results exceeded my expectations!",
    rating: 5,
    service: 'Color Treatment',
  },
  {
    name: 'Vikram Desai',
    text: 'Great ambiance, friendly staff, and outstanding service. Highly recommend to everyone!',
    rating: 5,
    service: 'Grooming Package',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by hundreds of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">⭐ 4.9/5 based on 200+ reviews</p>
        </div>
      </div>
    </section>
  );
}
