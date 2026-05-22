import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Jyo Unisex Beauty Salon',
  description: 'Browse our salon gallery - stunning transformations and salon interior photos.',
};

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1552226881-b01f46c2b251?w=600&h=600&fit=crop',
    alt: 'Professional haircut',
    category: 'Haircuts',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeae34c886?w=600&h=600&fit=crop',
    alt: 'Hair color treatment',
    category: 'Coloring',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03cb5f713?w=600&h=600&fit=crop',
    alt: 'Beauty treatment',
    category: 'Beauty',
  },
  {
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    alt: 'Salon interior',
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1521746521680-22efb76d91d4?w=600&h=600&fit=crop',
    alt: 'Hair styling',
    category: 'Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    alt: 'Grooming services',
    category: 'Grooming',
  },
  {
    src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    alt: 'Hair makeover',
    category: 'Makeover',
  },
  {
    src: 'https://images.unsplash.com/photo-1543269035-cbdf26b6f179?w=600&h=600&fit=crop',
    alt: 'Styling session',
    category: 'Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop',
    alt: 'Professional haircut',
    category: 'Haircuts',
  },
  {
    src: 'https://images.unsplash.com/photo-1562883676-8c6ffd91d16e?w=600&h=600&fit=crop',
    alt: 'Hair transformation',
    category: 'Transformation',
  },
  {
    src: 'https://images.unsplash.com/photo-1560264357-8d9766d20e3f?w=600&h=600&fit=crop',
    alt: 'Salon styling',
    category: 'Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600&h=600&fit=crop',
    alt: 'Beauty care',
    category: 'Beauty',
  },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-200">See the transformations we create</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-semibold">{image.category}</p>
                    <p className="text-sm text-gray-200">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-gray-900">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Love What You See?</h2>
          <p className="text-xl mb-8">Book your transformation today</p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all inline-block"
          >
            Schedule Now
          </a>
        </div>
      </section>
    </main>
  );
}
