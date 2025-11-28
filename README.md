# Fabrice Ishimwe - Portfolio

A modern, high-performance portfolio website built with Next.js 14, showcasing full-stack web development, mobile development, and cloud infrastructure expertise.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Dark Mode**: Seamless dark/light theme switching with next-themes
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Server-side rendering with optimized metadata
- **Performance**: Optimized images with Next.js Image component
- **Type Safe**: Full TypeScript coverage for robust development
- **Component Library**: Built with shadcn/ui for consistent, accessible UI components

## 📋 Sections

- **Home**: Hero section with introduction and call-to-action
- **About**: Professional biography, mission, certifications, and education
- **Skills**: Comprehensive showcase of technical skills across:
  - Programming Languages
  - Frontend Development
  - Mobile Development (React Native)
  - Backend Development
  - DevOps & Cloud
  - CI/CD
  - Monitoring & Observability
- **Experience**: Professional work history with achievements
- **Projects**: Featured and additional projects with live demos
- **Case Studies**: In-depth technical case studies
- **Blog**: Technical articles and insights
- **Contact**: Contact form and social links
- **Resume**: Downloadable resume with embedded preview

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)

### Libraries
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **State Management**: [TanStack Query](https://tanstack.com/query)

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/codecraft-portfolio.git
   cd codecraft-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
npm run start
```

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/codecraft-portfolio)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📁 Project Structure

```
codecraft-portfolio/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── blog/                # Blog listing and posts
│   ├── case-studies/        # Case studies
│   ├── contact/             # Contact page
│   ├── experience/          # Experience page
│   ├── projects/            # Projects showcase
│   ├── resume/              # Resume page
│   ├── skills/              # Skills page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Custom components
│   ├── lib/                # Utilities and data
│   │   ├── data.ts         # Portfolio data
│   │   └── utils.ts        # Helper functions
│   └── hooks/              # Custom React hooks
├── public/                  # Static assets
│   └── images/             # Image assets
│       ├── projects/       # Project screenshots
│       ├── blog/           # Blog images
│       ├── case-studies/   # Case study images
│       └── profile/        # Profile photos
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Update Portfolio Data

Edit `src/lib/data.ts` to customize:
- Skills and proficiency levels
- Work experience
- Projects
- Case studies
- Blog posts

### Add Images

Place images in the appropriate `public/images/` subdirectory:
- Projects: `public/images/projects/`
- Blog: `public/images/blog/`
- Case Studies: `public/images/case-studies/`
- Profile: `public/images/profile/`

See `public/images/README.md` for detailed guidelines.

### Modify Theme

Customize colors and design tokens in:
- `app/globals.css` - CSS variables and theme colors
- `tailwind.config.ts` - Tailwind configuration

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting (configure as needed)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Fabrice Ishimwe**

- GitHub: [@fabishz](https://github.com/fabishz)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- Email: fabricecoder009@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ If you found this portfolio helpful, please consider giving it a star!
