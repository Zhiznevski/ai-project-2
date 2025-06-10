# User Directory React App

A modern, responsive user directory built with React, TypeScript, Vite, and CSS Modules.  
This project demonstrates best practices in UI/UX, accessibility, and responsive design.

---

## Features

- **User List Table:**  
  Displays a list of users with their name, email, address, phone, website, and company.
- **User Detail Modal:**  
  Click on a user to view detailed information in a modal window.
- **Responsive Design:**  
  Fully adaptive for desktop and mobile devices. Modal and overlay behave correctly on all screen sizes.
- **Accessibility:**  
  Keyboard navigation, ARIA attributes, and focus management for better accessibility.
- **Modern UI:**  
  Clean, minimalistic interface using CSS Modules for style encapsulation.
- **Scroll Lock:**  
  When the modal is open, background scrolling is disabled for a better user experience.

---

## Technologies Used

- **React** (with functional components and hooks)
- **TypeScript**
- **Vite** (for fast development and build)
- **CSS Modules** (scoped, maintainable styles)
- **ESLint** (with recommended and type-aware rules)
- **Vitest** (for testing, if tests are present)

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Zhiznevski/ai-project-2.git
cd ai-project-2
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
  components/
    UserTable.tsx           # User list table
    UserDetailModal.tsx     # Modal for user details
    UserDetailModal.module.css # Styles for modal
  types/
    user.ts                 # TypeScript types for user data
  ...
public/
  ...
index.html
vite.config.ts
...
```

---

## Accessibility & UX

- All interactive elements are keyboard-accessible.
- Modal traps focus and can be closed with keyboard.
- ARIA roles and labels are used for screen readers.
- Overlay disables background scroll when modal is open.

---

## Customization

- **Styling:**  
  All styles are in CSS Modules. You can easily adjust colors, spacing, and breakpoints in the relevant `.module.css` files.
- **Data Source:**  
  User data is expected to follow the structure in `types/user.ts`. You can connect to an API or use mock data.

---

## Responsive Design

- The modal and overlay are fully responsive.
- On mobile, the modal never exceeds the viewport and is always centered.
- Overlay always covers the entire screen, regardless of scroll or address bar.

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint the codebase

---