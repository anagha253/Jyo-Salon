'use client';

import { Metadata } from 'next';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just show an alert
    alert(`Booking request received! We'll contact you shortly at ${formData.phone}`);
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200">Book your appointment or reach out to us</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-purple-100 p-4 rounded-lg h-fit">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:09110446469" className="text-purple-600 hover:text-purple-700 text-lg">
                      +91 9110446469
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 p-4 rounded-lg h-fit">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919110446469"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-lg"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-pink-100 p-4 rounded-lg h-fit">
                    <MapPin className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Bengaluru, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg h-fit">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-700">Mon-Fri: 10 AM - 8 PM</p>
                    <p className="text-gray-700">Sat: 10 AM - 9 PM</p>
                    <p className="text-gray-700">Sun: 11 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-purple-50 rounded-xl">
                <p className="text-gray-900 font-semibold mb-4">Quick Contact Options:</p>
                <div className="space-y-3">
                  <a
                    href="tel:09110446469"
                    className="block w-full bg-blue-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-600 transition"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919110446469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-green-600 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Appointment</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="+91 9110446469"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    >
                      <option value="">Select a service</option>
                      <option value="haircut">Premium Haircut</option>
                      <option value="coloring">Hair Styling & Color</option>
                      <option value="beauty">Beauty Treatments</option>
                      <option value="trim">Quick Trims & Touch-ups</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="Tell us about your preferences or any special requests"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    Book Appointment
                  </button>
                </form>

                <p className="text-center text-gray-600 text-sm mt-6">
                  We'll contact you within 2 hours to confirm your booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Location</h2>
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
      </section>
    </main>
  );
}
