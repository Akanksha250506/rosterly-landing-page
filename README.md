# Rosterly

A responsive SaaS landing page for a staff-scheduling product designed for small shops, clinics, and cafés.

## Live Demo

[View the live demo](<PASTE VERCEL LINK>)

## Screenshots

### Desktop Hero

![Desktop hero section](./screenshots/desktop-hero.png)

### Desktop Pricing

![Desktop pricing section](./screenshots/desktop-pricing.png)

### Mobile Hero

![Mobile hero section](./screenshots/mobile-hero.png)

## Features

- Sticky navbar with smooth-scroll links and a mobile hamburger menu.
- Hero section with an interactive shift roster. Click any cell to cycle through shifts and view a status warning when a day has nobody working.
- Three feature cards highlighting core product benefits.
- Three-step “How it works” section.
- Pricing section with monthly and yearly billing toggle.
- Demo request form with field validation and success message.
- Responsive layout supporting screens from 360px to desktop.
- Accessible basics including form labels, focus styles, `aria` attributes, and live status messages.

## Tech Stack

- React
- Vite
- Tailwind CSS v3
- JavaScript
- Google Fonts
- No backend
- No UI component libraries

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

### Create a production build

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── RosterDemo.jsx
│   ├── Features.jsx
│   ├── HowItWorks.jsx
│   ├── Pricing.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Design Decisions

- The deep teal and saffron palette creates a confident, approachable visual identity.
- Saffron is reserved for primary action buttons and key interactive states.
- The interface uses a component-based structure with repeated content stored in data arrays.
- The layout follows a mobile-first responsive approach.
- React `useState` manages the roster interactions, pricing toggle, mobile navigation, and form state.
- Typography, spacing, borders, and focus states are kept consistent across sections.

## Challenges Solved

- Kept the roster coverage status derived from the current roster state so warnings update immediately.
- Added form validation on blur and submit, including focus management for the first invalid field.
- Implemented responsive mobile navigation with a hamburger menu, `aria-expanded`, and automatic menu closing after navigation.
