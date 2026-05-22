import { Metadata } from 'next';
import Image from 'next/image';
import { Award, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Jyo Unisex Beauty Salon',
  description: 'Learn about Jyo Salon - our story, mission, and the expert team behind your transformation.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Jyo Salon</h1>
          <p className="text-xl text-gray-200">Premium salon expertise, personal touch</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Jyo Salon was born from a passion for transforming how people feel about themselves. What started as a vision to bring world-class salon expertise to Bengaluru has grown into a trusted destination for beauty and grooming.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe that great hair and beauty care goes beyond technique—it's about listening, understanding, and delivering results that exceed expectations. Every client is unique, and we treat each appointment as an opportunity to create something special.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve hundreds of satisfied clients who trust us with their transformations.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1521747116042-f23626916b58?w=600&h=600&fit=crop"
                alt="Salon interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Jyo?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-700">
                Our stylists are trained professionals with years of experience and passion for their craft.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-700">
                We use only the highest-quality products and latest techniques for best results.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Personal Attention</h3>
              <p className="text-gray-700">
                We listen to you and customize every service to match your vision perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
              { name: 'Rajesh Kumar', role: 'Senior Stylist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
              { name: 'Anjali Verma', role: 'Beauty Specialist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="relative h-64 mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-purple-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-gray-900">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Experience Jyo</h2>
          <p className="text-xl mb-8">Book your appointment and discover the difference</p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all inline-block"
          >
            Book Now
          </a>
        </div>
      </section>
    </main>
  );
}
