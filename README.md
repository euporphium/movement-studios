# Movement Studios

A modern, responsive dance studio website built as a portfolio implementation of a Figma community design.

## Design Credit

This project is an implementation of the **Moody Dance Studio** design by [Figma Community](https://www.figma.com/community/file/1498101697479806427/moody-dance-studio). All visual design credit goes to the original designer.

## About This Project

This is a portfolio piece showcasing front-end development skills, including:
- Modern React development with cutting-edge framework versions
- Custom design system implementation from Figma designs
- Responsive web design patterns
- Type-safe development with TypeScript
- Component architecture and code organization

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19.2.0** - Latest React with Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS with custom design tokens
- **Biome** - Fast linting and formatting

## Key Features

### Custom Design System

A fully custom design system implemented with CSS variables and Tailwind utilities:

- **Typography System**: Custom font scale with responsive utilities (`.typo-h1` through `.typo-h5`, `.typo-p1` through `.typo-p5`)
- **Font Stack**: Three Google Fonts (DM Sans, Encode Sans Expanded, Encode Sans Semi Condensed)
- **Semantic Color Tokens**: Brand colors with meaningful names (`brand-main`, `brand-soft`, `brand-hot`, `brand-deep`)
- **Responsive Breakpoints**: Typography scales at `md` (800px) and `lg` (1280px)

### Component Architecture

- Client/Server component separation following React 19 best practices
- Reusable UI components with conditional styling via `cn()` utility
- Mobile-first responsive navigation with hamburger menu
- Semantic HTML structure for accessibility

### Code Quality

- TypeScript for type safety
- Biome for consistent code style and fast linting
- Custom utility functions (class name merging with `cn()`)
- Organized project structure following Next.js conventions

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd movement-studios

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and navigation
│   ├── page.tsx            # Home page
│   ├── classes/            # Classes page
│   ├── about/              # About page
│   └── globals.css         # Design system & Tailwind config
├── components/
│   ├── Navigation.tsx      # Header navigation
│   └── Footer.tsx          # Site footer
└── util/
    └── cn.ts               # Class name utility
```

## Design System Documentation

The design system is defined in `src/app/globals.css` with:

- **CSS Variables**: Font families and color tokens
- **Typography Classes**: Responsive text styles
- **Color Palette**: Semantic brand and neutral colors

See `CLAUDE.md` for detailed architecture documentation.

## License

This implementation is for portfolio purposes. Design credit belongs to the original Figma community file creator.

## Acknowledgments

- Design: [Moody Dance Studio](https://www.figma.com/community/file/1498101697479806427/moody-dance-studio) Figma Community File
- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)