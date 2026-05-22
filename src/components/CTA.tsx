'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900 via-gray-900 to-black">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Book your appointment today and experience the difference premium salon care makes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Book Now
            <ArrowRight size={20} />
          </Link>

          <a
            href="https://wa.me/919110446469"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all"
          >
            Message Us
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-8">✨ New clients get 15% off their first visit ✨</p>
      </div>
    </section>
  );
}
