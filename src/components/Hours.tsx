'use client';

import { Clock } from 'lucide-react';

const hours = [
  { day: 'Monday - Friday', time: '10:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 9:00 PM' },
  { day: 'Sunday', time: '11:00 AM - 7:00 PM' },
];

export default function Hours() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-purple-900 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="text-gold-300" size={32} />
            <h3 className="text-3xl font-bold">Business Hours</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hours.map((h, idx) => (
              <div key={idx} className="border-l-2 border-gold-300 pl-4">
                <p className="text-gray-300 text-sm uppercase tracking-wide">{h.day}</p>
                <p className="text-xl font-semibold text-white mt-1">{h.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-sm">📍 Based in Bengaluru • Walk-ins Welcome • Online Booking Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
