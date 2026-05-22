'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Jyo Salon
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-purple-600 transition-colors py-2">
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-center">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
