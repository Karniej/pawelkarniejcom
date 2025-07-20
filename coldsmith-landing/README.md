<!-- @format -->

# Coldsmith Landing Page

A modern, responsive landing page for the Coldsmith app built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 🎨 Features

- Cold-themed design with blue/cyan gradients
- Animated ice particles background
- Responsive design for all devices
- App Store download integration
- Feature showcase cards
- Benefits section
- Smooth animations and transitions

## 📁 Project Structure

```
coldsmith-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and theme
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   └── ui/                  # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── gradient-button.tsx
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── netlify.toml                 # Netlify configuration
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
└── package.json                 # Dependencies and scripts
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to Netlify

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

#### Automatic Deployment from Git

1. **Push to GitHub/GitLab:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Build settings are already configured in `netlify.toml`

#### Manual Deployment

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=out
   ```

### Option 2: Vercel

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

### Option 3: Static Hosting (GitHub Pages, etc.)

The project builds to static files in the `out/` directory:

```bash
npm run build
# Upload the contents of 'out/' to your static hosting provider
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality.

### Custom Domain

To use a custom domain:

1. **Netlify:** Go to Site Settings > Domain Management
2. **Vercel:** Go to Project Settings > Domains
3. Update any hardcoded URLs if needed

### App Store Link

The App Store link is hardcoded in `src/app/page.tsx`. Update it here:

```typescript
href =
  "https://apps.apple.com/pl/app/wim-hof-method-whm-coldsmith/id6469033824";
```

## 📱 Customization

### Colors

The color scheme is defined in `src/app/globals.css`. Key colors:

- Primary: Blue (`#3b82f6`)
- Secondary: Cyan (`#06b6d4`)
- Background: Black (`#000000`)

### Content

Main content sections in `src/app/page.tsx`:

- Hero title and description
- Feature cards
- Benefits section
- App Store links

### Images

Replace the screenshot placeholder:

1. Add your app screenshot to `public/`
2. Update the placeholder section in `src/app/page.tsx`

## 🔄 Moving to Another Repository

### Method 1: Copy Files

```bash
# Create new repository
mkdir coldsmith-website
cd coldsmith-website
git init

# Copy files (excluding node_modules and .next)
cp -r ../coldsmith-landing/src .
cp -r ../coldsmith-landing/public .
cp ../coldsmith-landing/package.json .
cp ../coldsmith-landing/package-lock.json .
cp ../coldsmith-landing/next.config.js .
cp ../coldsmith-landing/netlify.toml .
cp ../coldsmith-landing/tailwind.config.ts .
cp ../coldsmith-landing/tsconfig.json .
cp ../coldsmith-landing/components.json .
cp ../coldsmith-landing/postcss.config.mjs .
cp ../coldsmith-landing/eslint.config.mjs .
cp ../coldsmith-landing/.gitignore .

# Install dependencies
npm install

# Test build
npm run build

# Commit and push
git add .
git commit -m "Initial Coldsmith landing page"
git remote add origin <new-repo-url>
git push -u origin main
```

### Method 2: Git Subtree

```bash
# From the parent repository
git subtree push --prefix=coldsmith-landing origin coldsmith-branch

# In new repository
git remote add source <original-repo-url>
git pull source coldsmith-branch
```

## 🐛 Troubleshooting

### Build Errors

- **TypeScript errors:** Check `tsconfig.json` configuration
- **Tailwind classes not working:** Verify `tailwind.config.ts` paths
- **Import errors:** Check file paths and component exports

### Deployment Issues

- **Static export fails:** Check `next.config.js` configuration
- **Images not loading:** Ensure `unoptimized: true` in Next.js config
- **404 on refresh:** Configure your hosting provider for SPA routing

## 📞 Support

For issues specific to the Coldsmith app, contact: contact@pawelkarniej.com

## 📄 License

This project is private and proprietary to Paweł Karniej.
