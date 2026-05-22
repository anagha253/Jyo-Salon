# Jyo Salon Website - Deployment Guide

Your production-ready Next.js website is ready to deploy! Follow these steps to get it live on Vercel with GitHub integration.

## Option 1: Deploy via GitHub + Vercel (Recommended)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `jyo-salon` (or your preferred name)
3. Don't initialize with README (we already have one)

### Step 2: Push Code to GitHub

```bash
cd /Users/anaghamohan/salon-website

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/jyo-salon.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Deploy to Vercel

1. Go to [vercel.com/import](https://vercel.com/import)
2. Click "Import Project"
3. Select "Import Git Repository"
4. Paste your GitHub repo URL
5. Click "Continue"
6. In the project settings, leave defaults and click "Deploy"

Vercel will automatically:
- Build your Next.js project
- Deploy to production
- Set up automatic deployments on every push to main

## Option 2: Quick Deploy Button

Add this to your GitHub README:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2Fjyo-salon)
```

## Vercel CLI Deployment (Alternative)

If you prefer CLI-based deployment:

```bash
cd /Users/anaghamohan/salon-website

# Install Vercel CLI (already installed)
# npx vercel

# Login to Vercel
npx vercel login

# Deploy
npx vercel --prod
```

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads with hero section
- [ ] Services page displays all 4 services
- [ ] Gallery shows 12 salon images
- [ ] About page has team info
- [ ] Contact form works (demo version)
- [ ] WhatsApp button links to +919110446469
- [ ] Phone button calls +919110446469
- [ ] Google Map embed displays Bengaluru
- [ ] Mobile responsive design works
- [ ] Page load performance is fast

## Environment Variables (Optional)

Add to Vercel dashboard if needed:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: For issues with the site, check the components in `/src/components/`

---

**Your Live URL:** Will be provided by Vercel after deployment (usually `jyo-salon.vercel.app`)
