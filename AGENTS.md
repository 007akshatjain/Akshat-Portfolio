# AGENTS

## Purpose
This repository is a static developer portfolio built with Next.js 15 App Router, TypeScript, Tailwind CSS, and Framer Motion. Use this file to understand the project structure, runtime commands, and where content is managed.

## Quick start
- `npm install`
- `npm run dev`
- `npm run build`
- `npm start`
- `npm run lint`

## Project overview
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: lucide-react
- Data is centralized in `data/portfolio.ts`

## Important files
- `app/page.tsx` - primary page composition and sections order
- `app/layout.tsx` - root metadata, fonts, HTML/body structure
- `app/globals.css` - global styles and tailwind imports
- `components/layout/` - navbar, loading screen
- `components/sections/` - page sections like Hero, About, Skills, Experience, Projects, Achievements, Contact, Footer
- `components/shared/` - reusable UI primitives
- `data/portfolio.ts` - portfolio content and text data
- `tailwind.config.ts` - Tailwind theme/config
- `tsconfig.json` - alias `@/*` maps to the repository root
- `public/resume.pdf` - resume asset referenced by the UI

## Repository conventions
- Content changes should usually be made in `data/portfolio.ts` rather than spreading text across component files.
- Visual and layout changes should preserve the existing dark theme, mobile-first responsive design, and `scroll-smooth` UX.
- This repository contains no backend/API implementation.
- Use the Next.js App Router conventions already established by `app/layout.tsx` and `app/page.tsx`.

## When editing
- If updating user data, change `data/portfolio.ts`
- If editing page metadata, change `app/layout.tsx`
- If changing page composition, change `app/page.tsx`
- If adding new UI sections, add them under `components/sections/`
- If you need shared presentation components, add them under `components/shared/`

## Notes for AI agents
- Avoid assuming a backend exists; this project is a portfolio website.
- Respect the existing file and folder conventions.
- Keep changes minimal and consistent with the established aesthetic unless the user requests a redesign.
