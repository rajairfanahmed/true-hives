# True Hives | Design. Dev. Intelligence.

> **"We build digital ecosystems for the future."**

True Hives is a cutting-edge digital agency landing page built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis Smooth Scroll**. Designed for high-converting agency presentations, it features interactive bento grids, magnetic cursor effects, dynamic dark/light theme switching, and smooth kinetic typography.

---

## 🌟 Key Features

- **Kinetic Hero & Dynamic Typography**: Staggered motion headers with integrated magnetic calls to action.
- **Interactive Bento Grid**: Highlighting bespoke AI intelligence, engineering, and UI/UX capabilities.
- **Work Marquee**: Infinite-scroll portfolio marquee showcasing recent client work.
- **Transparent Pricing Tiers**: Clear, structured monthly subscription & custom enterprise packages.
- **Lenis Smooth Scroll**: Butter-smooth inertial scrolling for a premium browsing feel.
- **Magnetic Buttons & Custom Cursor**: Tactile micro-interactions responding to cursor movement.
- **Adaptive Dark / Light Mode**: System-aware and manual theme switching via `next-themes`.
- **Static Export Optimized**: Pre-configured for deployment to **GitHub Pages** via GitHub Actions.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rajairfanahmed/true-hives.git
   cd true-hives
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for production / static export**:
   ```bash
   npm run build
   ```
   The static export will be placed into the `out/` directory.

---

## 🚢 Continuous Deployment

This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes the website to **GitHub Pages** on every push to the `main` branch.

---

© 2026 True Hives. All rights reserved.
