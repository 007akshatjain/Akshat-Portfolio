# Akshat Jain — Portfolio

Premium developer portfolio built with Next.js 15, Framer Motion, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typing Effect**: React Type Animation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── globals.css       # Global styles + CSS utilities
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page composition
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navigation with active section tracking
│   │   └── LoadingScreen.tsx   # Animated loading screen
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero with typing animation
│   │   ├── About.tsx           # Developer story + education
│   │   ├── Skills.tsx          # Skill categories with progress bars
│   │   ├── Experience.tsx      # Timeline-based work history
│   │   ├── Projects.tsx        # Featured project cards
│   │   ├── Achievements.tsx    # Achievements and certifications
│   │   ├── Contact.tsx         # Contact form + social links
│   │   └── Footer.tsx          # Footer with scroll-to-top
│   └── shared/
│       ├── AnimatedText.tsx    # Word-by-word animation
│       ├── CustomCursor.tsx    # Custom cursor with hover effects
│       └── SectionHeader.tsx  # Reusable section header
├── data/
│   └── portfolio.ts      # All portfolio content (resume data)
├── lib/
│   └── utils.ts          # Utility functions
├── public/
│   └── resume.pdf        # Your resume file (add this)
└── tailwind.config.ts    # Tailwind configuration
```

## Customization

All content is centralized in `data/portfolio.ts`. Update:
- `personalInfo` — name, roles, contact details
- `skills` — categories and proficiency levels
- `experience` — work history and achievements
- `projects` — project details and links
- `achievements` — certifications and accomplishments

## Deploying to Vercel

1. Push to GitHub
2. Connect the repo at [vercel.com](https://vercel.com)
3. Deploy — zero configuration required

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Add Resume

Place your resume PDF at `public/resume.pdf` before deploying.

## Features

- Loading screen with progress animation
- Custom cursor with hover states
- Sticky navbar with active section highlighting
- Hero with typing animation and floating elements
- Animated skill progress bars
- Timeline-based experience section
- Featured project cards with impact metrics
- Achievement grid with category badges
- Contact form with submission feedback
- Scroll-to-top button
- Mobile-first responsive design
- Dark theme optimized
- SEO metadata
