# Doctor Profile - Dr. Murali BK

This is a Next.js project that showcases a professional profile page for Dr. Murali BK, an Orthopaedic Surgeon specializing in Joint Replacement.

## Features

- Responsive design for all device sizes
- Modern UI with clean aesthetics
- Sections for doctor's information, qualifications, experience, treatments, and hospitals
- Appointment booking interface
- Ratings and reviews display

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/page.tsx` - The main doctor profile page
- `app/layout.tsx` - The root layout with metadata
- `app/globals.css` - Global CSS variables and styles
- `public/images/` - Contains placeholder images for the doctor and hospital

## Customizing

To customize this profile for a different doctor:

1. Update the content in `app/page.tsx` with the doctor's information
2. Change the metadata in `app/layout.tsx`
3. Replace placeholder images in the `public/images/` directory
4. Adjust colors and styling in `app/globals.css` if desired

## Technologies Used

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- React

## Note About Images

The current implementation uses placeholder images. For a production site, replace these with actual images:

- Doctor's image: Replace `/public/images/doctor-placeholder.jpg` with Dr. Murali BK's photo
  - Attempted image URL: https://www.hopehospital.com/wp-content/uploads/2020/10/DR-MURALI-17-768x1152.jpg
- Hospital images: Replace `/public/images/hospital-placeholder.jpg` with actual hospital logos

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
