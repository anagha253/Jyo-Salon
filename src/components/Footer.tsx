'use client';

import Link from 'next/link';
import { Phone, MapPin, Heart, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Jyo Salon</h3>
            <p className="text-sm">Premium unisex beauty salon in Bengaluru offering expert hair styling, cuts, and beauty treatments.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-purple-400">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-purple-400">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-purple-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:09110446469" className="hover:text-purple-400">+91 9110446469</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bengaluru, Karnataka</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-400 transition">
                <Heart size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Share2 size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">© 2024 Jyo Unisex Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
