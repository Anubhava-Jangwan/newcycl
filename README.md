# Newcycl Website (Clean Technologies)

This repository contains the front-end application for **Newcycl**, showcasing clean waste-management technologies and **Rawbin**—India's first smart IoT home composter.

---

## 🌟 Site Functionality & Architecture

The application is structured as a client-side React app built with **Vite** for optimized assets and swift bundling, utilizing a file-based page layout model mirrored in the `pages` directory.

### Core Pages & Sections
- **Home Page** (`pages/index.jsx`): Contains a dynamic Hero video showing the composter in action, supported brand carousels, active composting impact stats, the **Rawbin Showcase Gallery** (featuring Front, Side, Back, and Top-Down product images with detailed feature descriptions), and the Founders section.
- **Impact Report** (`pages/impact.jsx`): Displays detailed analysis of food waste issues, greenhouse gas emissions comparison tables, and interactive circular vs. linear economy flowcharts.
- **Our Story / About** (`pages/about.jsx`): Features an interactive dot-grid landing panel and a side-scrolling timeline explaining the inception, garage experiments, and scaling of Newcycl.
- **Blog & Posts** (`pages/blog.jsx` & `pages/blog/[slug].jsx`): Contains news updates, educational write-ups on sustainability, and dynamic markdown post rendering.
- **Careers** (`pages/careers.jsx` & `pages/careers/[slug].jsx`): Lists active roles, daily responsibilities, and qualifications.
- **Contact & FAQ** (`pages/contact.jsx` & `pages/faq.jsx`): Forms for customer queries and comprehensive question lists.

---

## 🛠️ Technical Stack & Routing

- **Bundler**: [Vite](https://vitejs.dev/)
- **Core Library**: [React 19](https://react.dev/)
- **Styles**: [Tailwind CSS 3](https://tailwindcss.com/) + custom CSS variables in `styles/globals.css`
- **Routing**: Client-side lazy router located in `src/main.jsx`. It listens to location updates (`popstate`) and maps paths directly to components inside the `pages/` directory.
- **Backend Integrations**: Ready for Firebase Hosting, Realtime Database, Cloud Functions, Firestore, and Storage.

---

## 🚀 Getting Started (How to Run)

Follow these instructions to run the application locally:

### 1. Installation
Ensure you have [Node.js](https://nodejs.org/) installed, then install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local development server:
```bash
npm run dev
```
The server will run locally, usually at [http://localhost:5173](http://localhost:5173).

### 3. Production Build
Compile and minify the project assets into static files:
```bash
npm run build
```
The production bundle is generated inside the `dist/` directory.

### 4. Local Preview
Preview the production build locally to verify all routing and assets load correctly before deploying:
```bash
npm run preview
```

---

## 🔄 Development Workflow

### Branching Strategy
We use Git branches for structured development:
- **`main`**: The stable branch tracking production-ready milestones.
- **Feature Branches** (e.g., `progress-update`): Used for developing new features, layout fixes, or loading assets.

### Firebase Deployment
The site is pre-configured for **Firebase Hosting**. Deploy static assets using the Firebase CLI:
```bash
# Set up/login Firebase
firebase login

# Deploy build to production
firebase deploy --only hosting
```
Local testing of hosting, firestore, and functions can be done using the Firebase emulator:
```bash
firebase emulators:start
```

