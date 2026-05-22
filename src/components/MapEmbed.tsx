'use client';

import { MapPin } from 'lucide-react';

export default function MapEmbed() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-purple-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Find Us</h2>
          </div>
          <p className="text-xl text-gray-600">Visit us at our Bengaluru location</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Jyo Unisex Beauty Salon</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Location</p>
                  <p className="text-lg text-gray-900 font-semibold">Bengaluru, Karnataka</p>
                </div>

                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Phone</p>
                  <a href="tel:09110446469" className="text-lg text-purple-600 font-semibold hover:text-purple-700">
                    +91 9110446469
                  </a>
                </div>

                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">WhatsApp</p>
                  <a
                    href="https://wa.me/919110446469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-green-600 font-semibold hover:text-green-700"
                  >
                    Chat with us
                  </a>
                </div>

                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Hours</p>
                  <p className="text-gray-900">Mon-Fri: 10 AM - 8 PM</p>
                  <p className="text-gray-900">Sat: 10 AM - 9 PM</p>
                  <p className="text-gray-900">Sun: 11 AM - 7 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.554892827818!2d77.6245!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1717a10e7b8d%3A0x58a53ae3b8a0b1f!2sBengaluru!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
