# 🍽️ Shyamnath Restaurant Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdevjagdish.tech)](https://devjagdish.tech/)
[![Vercel](https://vercelbadge.vercel.app/api/dev-jagdish/shyamnath-restaurant)](https://vercel.com/)
![React](https://img.shields.io/badge/React-18-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)

> A modern, responsive website for **Shyamnath Restaurant**, serving authentic Indian cuisine.  
> Built with **React + TypeScript + Tailwind CSS** to deliver speed, beauty, and mobile-first experience.

---

## 🔥 Live Demo

👉 **[Visit Website](https://devjagdish.tech/)**

---

## 🧰 Tech Stack

- ⚛️ **React 18** (with TypeScript)
- 🎨 **Tailwind CSS**
- ⚡ **Vite**
- 🧩 **Lucide React** (Icon Library)
- 🚀 **Deployed on Vercel**

---

## ✨ Features

- ✅ **Responsive Design** – Optimized for mobile, tablet, and desktop
- ✅ **Modern UI/UX** – Clean layout with animations and hover effects
- ✅ **Menu Showcase** – Visual display of featured dishes with prices
- ✅ **AI Chatbot** – Replies to FAQs and menu inquiries
- ✅ **Performance Optimized** – Lazy loading, image optimization
- ✅ **Quick Contact** – Click-to-call, maps, and working hours

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features block
│   └── Chatbot.tsx     # AI chatbot component
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js v16+
- npm or yarn

### 📦 Installation

```bash
git clone https://github.com/dev-jagdish/shyamnath-restaurant.git
cd shyamnath-restaurant
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

## 📜 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview the build
npm run lint      # Lint your code
```

---

## 🤖 Chatbot Integration

Update the `fetch` call in `Chatbot.tsx` with your backend URL:

```ts
const response = await fetch('YOUR_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: inputValue }),
});
```

---

## 🌐 Deployment

Deployed via **Vercel** with auto-deploy from the main branch.

### Manual Deployment (e.g., Netlify)

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

---

## 📄 License

MIT License  
© 2025 Shyamnath Restaurant  
[dev-jagdish](https://github.com/dev-jagdish)

---

⭐ If you like this project, consider starring it on GitHub!
