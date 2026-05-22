'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-gold-900 opacity-90"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Cut of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-gold-300">Dreams</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the transformation you deserve. Premium styling, expert care, unmatched results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/booking"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Book Now
          </Link>

          <a
            href="https://wa.me/919110446469"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

          <a
            href="tel:09110446469"
            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
          >
            <Phone className="inline mr-2" size={20} />
            Call Us
          </a>
        </div>

        <p className="text-gray-300 text-sm">⏱️ Quick 20-min consultations available • 🎁 First-time guests get 15% off</p>
      </div>
    </section>
  );
}
