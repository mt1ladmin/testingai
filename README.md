# Malawi Motors

A ready-to-run Next.js website for a vehicle sourcing and export business serving Malawi.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Customise

Edit `app/page.tsx` for:
- business name
- vehicle listings
- prices
- WhatsApp number
- email
- copy

Edit `app/globals.css` for the visual identity.

The current vehicle images use remote Unsplash URLs. For production, replace them with your own vehicle photography in `/public` and update the image URLs.

## Important

The enquiry form is currently front-end only: it displays a success state but does not send data anywhere. Connect it to your preferred email/form service or backend before launch.
