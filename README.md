# Josh King Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This portfolio features a clean design with a mint green color scheme, showcasing professional experience, case studies, and contact information.

## Features

- Responsive design that works on all devices
- Clean, minimal aesthetic with a mint green color scheme
- Password-protected portfolio case studies
- Contact form for inquiries
- Resume page highlighting experience and skills
- Integration with company logos
- Session-based authentication for portfolio access
- Modal image viewer for case studies

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Custom SVG icons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/josh-king-portfolio.git
   cd josh-king-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Deploying to Vercel

The easiest way to deploy this portfolio website is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import your project to Vercel.
3. Vercel will detect that you're using Next.js and set up the build configuration automatically.
4. Your site will be deployed to a URL like `https://your-project-name.vercel.app`.

### Custom Domain

To use a custom domain with your Vercel deployment:

1. Go to your project on the Vercel dashboard.
2. Navigate to "Settings" > "Domains".
3. Add your domain and follow the instructions to configure DNS settings.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `public/` - Static assets like images
- `lib/` - Utility functions and helpers

## Authentication

The portfolio section is protected by a simple passphrase authentication system using browser sessionStorage. The passphrase is "abracadabra" (in a production environment, this would be handled server-side).

## Customization

- Update the content in the page files to reflect your own information
- Replace the placeholder images with your own images
- Modify the color scheme in `tailwind.config.ts` to match your brand
- Update the logo in `components/ui/logo.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).
