# Shyamnath Restaurant Website

A modern, responsive website for Shyamnath Restaurant featuring authentic Indian cuisine. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Chatbot**: AI-powered customer service for menu inquiries and restaurant information
- **Modern UI/UX**: Beautiful gradient designs with smooth animations and hover effects
- **Menu Showcase**: Highlighted dishes with images and pricing
- **Contact Integration**: Direct calling and website links
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🚀 Live Demo

[Visit the live website(https://devjagdish.tech/)]

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Linting**: ESLint with TypeScript support

## 📋 Restaurant Information

- **Name**: Shyamnath Restaurant
- **Location**: Spice Garden, 2nd Floor, Indiranagar 100 Feet Rd, Bangalore, KA
- **Hours**: Monday to Sunday, 12:00 PM – 11:00 PM
- **Phone**: +91-9876543210
- **Website**: example.com

## 🍽️ Menu Highlights

### Popular Dishes
- Veg Biryani 🌱 - ₹280
- Butter Chicken 🍗 - ₹420
- Paneer Tikka 🔥 - ₹320
- Tandoori Pomfret 🐟 - ₹650
- Royal Thali Combo - ₹380
- Gulab Jamun 🍯 - ₹120

### Chef's Specials
- Tandoori Pomfret
- Mughlai Chicken Curry
- Royal Thali Combo (Veg & Non-Veg)

## 🤖 Chatbot Features

The integrated chatbot can help customers with:
- Menu information and recommendations
- Restaurant hours and location details
- Dietary options (vegetarian, vegan, Jain food)
- Parking and seating information
- General inquiries

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing section with restaurant intro
│   ├── Features.tsx      # Restaurant features and menu highlights
│   └── Chatbot.tsx       # Interactive customer service chatbot
├── App.tsx               # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shyamnath-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

### Visual Elements
- Gradient backgrounds and buttons
- Smooth hover animations
- Card-based layouts
- Professional food photography
- Consistent color scheme (orange/red theme)

### User Experience
- Intuitive navigation
- Clear call-to-action buttons
- Easy-to-read typography
- Accessible design patterns

## 🔧 Customization

### Colors
The website uses a warm color palette centered around orange and red tones. Main colors can be customized in the Tailwind classes:
- Primary: `orange-600`
- Secondary: `red-600`
- Accent: `yellow-400`

### Content
Restaurant information can be updated in the respective component files:
- Contact details in `Hero.tsx` and `Features.tsx`
- Menu items in `Features.tsx`
- Chatbot responses via the webhook integration

### Chatbot Integration
The chatbot connects to an external webhook for AI responses. Update the webhook URL in `Chatbot.tsx`:
```typescript
const response = await fetch('YOUR_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: inputValue }),
});
```

## 📱 Mobile Optimization

- Responsive breakpoints for all screen sizes
- Touch-optimized button sizes
- Mobile-friendly navigation
- Optimized image loading
- Smooth scrolling and animations

## 🌐 Deployment

The website is deployed on Netlify with automatic builds from the main branch.

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain if needed

### Environment Variables
No environment variables are required for basic functionality. The chatbot webhook URL is hardcoded but can be moved to environment variables for different environments.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about the website:
- Restaurant Phone: +91-9876543210
- Website: example.com
- Email: Contact through the website chatbot

## 🙏 Acknowledgments

- Images from Pexels for food photography
- Lucide React for beautiful icons
- Tailwind CSS for rapid styling
- React and Vite for modern development experience

---

Built with ❤️ for authentic Indian cuisine lovers
