# Sarantos Dry Clean

Website for **Sarantos Dry Clean**, a family-run carpet & dry cleaning business in Sparta, Greece (25+ years).

🔗 **Live:** https://sarantos-dryclean.gr

## Highlights

- **Lighthouse:** 99 Performance · 100 Accessibility · 100 Best Practices · 100 SEO (desktop)
- Mobile-first, one-tap call & Viber buttons
- Local SEO: JSON-LD (`DryCleaningOrLaundry`), sitemap, robots, canonical, Open Graph
- Responsive images (WebP + `srcset`), zero layout shift
- Static export, deployed on Cloudflare Pages with CI/CD from GitHub

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- TypeScript
- Tailwind CSS v4
- lucide-react icons
- Cloudflare Pages (hosting, DNS, redirects)

## Project structure

```
app/            Routes, layout, metadata, robots.ts, sitemap.ts
components/     UI sections (Header, Hero, Services, Shop, Contact, Footer, ...)
lib/
  site.ts       Business info: name, address, phones, hours, socials, offer
  services.ts   List of services shown on the page
  ui.ts         Shared button sizes
public/
  images/       Optimized WebP photos
  og-image.jpg  Social sharing preview (1200×630)
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

## Updating content

Most changes need **no component edits**:

| Change                                             | File                                   |
| -------------------------------------------------- | -------------------------------------- |
| Phone, email, address, opening hours, social links | `lib/site.ts`                          |
| Enable/disable the offer banner                    | `lib/site.ts` → `offer.active`         |
| Add/remove/edit services                           | `lib/services.ts`                      |
| Shop gallery photos                                | `components/Shop.tsx` → `photos` array |

> ⚠️ When changing opening hours, also update `openingHoursSpecification` in `components/StructuredData.tsx` and the Google Business Profile.

### Adding photos

1. Crop and resize (gallery: 800×1000, hero: 640 / 1024 / 1600 wide).
2. Export as WebP (quality ~70) and keep each file under ~150 KB.
3. Place in `public/images/` and reference it in the component.
4. Never commit original camera photos.

## Deployment

Every push to `main` is automatically built and deployed by Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `out`
- Environment: `NODE_VERSION=24`

## Author

Built by [Georgios Koniditsiotis](https://github.com/Gkony21).
