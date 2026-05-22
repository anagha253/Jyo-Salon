# Jyo Unisex Beauty Salon - Website Project

## Project Overview

This is a production-ready Next.js website for Jyo Unisex Beauty Salon in Bengaluru. Built with modern technologies for optimal performance, SEO, and user experience.

### Key Features

✅ **5 Complete Pages**
- Homepage with hero, services grid, hours, map, reviews
- Services page with detailed cards and pricing tiers
- Gallery with 12 high-quality salon images
- About page with team and why choose us
- Contact/Booking page with embedded map and form

✅ **Modern Aesthetics**
- Purple, gold, white, black color scheme
- Mobile-first responsive design
- Smooth animations and transitions
- Professional salon vibe

✅ **Business Features**
- WhatsApp direct messaging (+919110446469)
- Click-to-call button
- Embedded Google Maps
- Business hours widget
- Customer reviews section
- Contact form for bookings

✅ **SEO & Performance**
- Schema.org structured data (BeautySalon)
- Meta tags and Open Graph
- Optimized images via Next.js Image
- Fast page load times
- Mobile-friendly design

✅ **Developer Experience**
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide icons for UI elements
- Component-based architecture
- Ready for deployment on Vercel

## Project Structure

```
salon-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with header & footer
│   │   ├── page.tsx            # Homepage
│   │   ├── services/
│   │   │   └── page.tsx        # Services page
│   │   ├── gallery/
│   │   │   └── page.tsx        # Gallery page
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact/Booking page
│   │   ├── globals.css         # Global styles & animations
│   │   └── favicon.ico
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── Hero.tsx            # Homepage hero section
│   │   ├── Services.tsx        # Services grid component
│   │   ├── Reviews.tsx         # Customer reviews
│   │   ├── Hours.tsx           # Business hours widget
│   │   ├── MapEmbed.tsx        # Google Maps embed
│   │   └── CTA.tsx             # Call-to-action section
│   └── fonts/                  # Google fonts
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
├── vercel.json                # Vercel deployment config
├── DEPLOYMENT.md              # Deployment guide
└── PROJECT.md                 # This file
```

## Technologies Used

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Hosting:** Vercel
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Clone the repository
cd /Users/anaghamohan/salon-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## Component Details

### Hero (src/components/Hero.tsx)
- Eye-catching hero section with gradient background
- "Book Now" CTA with WhatsApp and call buttons
- Animated blob effects
- Mobile responsive

### Services (src/components/Services.tsx)
- 3 main service cards on homepage
- Service icons, descriptions, prices, duration
- Hover effects with image zoom
- Links to full services page

### Hours (src/components/Hours.tsx)
- Business hours widget
- Displays opening times for each day
- Styled with purple/gold theme
- Information about walk-ins and online booking

### MapEmbed (src/components/MapEmbed.tsx)
- Embedded Google Maps showing Bengaluru
- Contact information sidebar
- Phone and WhatsApp direct links
- Fully responsive

### Reviews (src/components/Reviews.tsx)
- 4 customer review cards
- 5-star ratings
- Customer names and service type
- Responsive grid layout

### CTA (src/components/CTA.tsx)
- Call-to-action section
- "Ready to Transform?" messaging
- Quick booking links
- New client discount callout

## Customization Guide

### Update Business Info

Edit these files with your actual business details:

**src/app/page.tsx** (schema.org data)
```typescript
const schemaData = {
  name: 'Jyo Unisex Beauty Salon',
  telephone: '+919110446469', // Update phone
  address: {
    addressLocality: 'Bengaluru', // Update location
    // ...
  }
}
```

**src/components/Hours.tsx**
Update the `hours` array with your actual business hours

**src/components/MapEmbed.tsx**
Update the iframe src with your actual location coordinates

**src/components/Reviews.tsx**
Replace review names and text with actual customer testimonials

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  gold: {
    300: '#fcd34d',  // Change color values
    400: '#facc15',
  },
}
```

Or modify Tailwind classes in components (purple-500 → your-color-500)

### Update Services

**src/app/services/page.tsx** and **src/components/Services.tsx**
Update the service arrays with your actual services and pricing

### Add More Gallery Images

**src/app/gallery/page.tsx**
Add more objects to the `galleryImages` array with your own salon photos

### Update Team Members

**src/app/about/page.tsx**
Replace team member names, roles, and images

## Performance Optimization

### Image Optimization
- Uses Next.js `Image` component for automatic optimization
- Serves WebP format to supported browsers
- Lazy loading enabled for gallery images

### Code Splitting
- Pages are automatically code-split by Next.js
- Only loads JavaScript needed for each page

### Static Generation
- All pages are pre-rendered at build time
- Instant page loads from Vercel's edge network

### CSS Optimization
- Tailwind CSS purges unused styles
- Minimal CSS bundle size

## SEO Features

- Schema.org BeautySalon structured data
- Open Graph meta tags
- Mobile-friendly responsive design
- Fast page load times
- Semantic HTML structure
- Alt text for all images
- Proper heading hierarchy

## Mobile Responsiveness

Tested and optimized for:
- Mobile (375px) - iPhone SE
- Tablet (768px) - iPad
- Desktop (1280px+)
- Large screens (1920px+)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors
- Clear focus states

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step deployment instructions to Vercel.

## Maintenance & Updates

### Regular Tasks
1. Update business hours in Hours.tsx
2. Refresh gallery images every quarter
3. Add new customer reviews to Reviews.tsx
4. Update prices in services pages

### Adding New Pages
1. Create `src/app/new-page/page.tsx`
2. Add navigation link in `src/components/Header.tsx`
3. Import components as needed
4. Test on mobile and desktop

### Updating Services
1. Modify service arrays in component files
2. Add/remove icons from lucide-react
3. Update pricing and duration
4. Test all pages

## Troubleshooting

### Build Errors
```bash
# Clear Next.js cache and rebuild
rm -rf .next
npm run build
```

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Image Loading Issues
- Check image URLs are valid
- Ensure images are under 2MB
- Use HTTPS URLs for external images

## Support & Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Docs:** https://vercel.com/docs
- **Lucide Icons:** https://lucide.dev

## License

This project is ready for commercial use by Jyo Unisex Beauty Salon.

---

**Last Updated:** May 22, 2024
**Version:** 1.0.0
**Status:** Production Ready
