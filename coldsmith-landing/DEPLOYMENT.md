<!-- @format -->

# Coldsmith Landing Page - Deployment Guide

This guide provides step-by-step instructions for deploying the Coldsmith landing page.

## 🚀 Quick Deploy (Recommended)

### Option 1: Using Deploy Script

```bash
# Make sure you're in the coldsmith-landing directory
cd coldsmith-landing

# Run the interactive deployment script
./deploy.sh

# Or specify the method directly:
./deploy.sh netlify   # Deploy to Netlify
./deploy.sh vercel    # Deploy to Vercel
./deploy.sh build     # Build only
```

### Option 2: Using npm Scripts

```bash
npm run deploy          # Interactive deployment
npm run deploy:netlify  # Deploy to Netlify
npm run deploy:vercel   # Deploy to Vercel
```

## 📦 Moving to Another Repository

### Quick Migration

```bash
# From the coldsmith-landing directory
./move-to-repo.sh ../my-coldsmith-website

# Or with a git remote URL
./move-to-repo.sh ../my-coldsmith-website https://github.com/username/coldsmith-website.git
```

This script will:

- Copy all necessary files
- Initialize a git repository
- Install dependencies
- Test the build
- Optionally push to remote repository

## 🌐 Manual Deployment Methods

### Netlify

#### Method 1: Git Integration (Recommended)

1. **Push to GitHub/GitLab:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Build settings are automatically detected from `netlify.toml`
   - Click "Deploy site"

#### Method 2: Netlify CLI

1. **Install Netlify CLI:**

   ```bash
   npm install -g netlify-cli
   ```

2. **Login and Deploy:**
   ```bash
   netlify login
   npm run build
   netlify deploy --prod --dir=out
   ```

#### Method 3: Drag & Drop

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag the `out` folder to the deploy area

### Vercel

#### Method 1: Git Integration

1. **Push to GitHub/GitLab/Bitbucket**
2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Settings are auto-detected

#### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Other Static Hosts

For GitHub Pages, Firebase Hosting, AWS S3, etc.:

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Upload the `out` directory** to your hosting provider

## 🔧 Configuration

### Custom Domain

#### Netlify

1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS records as instructed

#### Vercel

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Environment Variables

Currently, no environment variables are required. If you need to add any:

#### Netlify

- Go to Site Settings > Environment Variables
- Add your variables

#### Vercel

- Go to Project Settings > Environment Variables
- Add your variables

### Build Settings

The build settings are configured in:

- `netlify.toml` - Netlify configuration
- `next.config.js` - Next.js configuration
- `package.json` - Build scripts

Default settings:

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `out`
- **Node Version:** 18

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with TypeScript errors:**

   ```bash
   npm run lint
   # Fix any linting errors, then rebuild
   ```

2. **Images not loading:**

   - Ensure `unoptimized: true` is set in `next.config.js`
   - Check image paths in the code

3. **404 errors on refresh:**

   - This is expected for static exports
   - Configure your host for SPA routing if needed

4. **CSS not loading:**
   - Check that `tailwind.config.ts` paths are correct
   - Verify PostCSS configuration

### Getting Help

1. **Check the build logs** in your hosting provider's dashboard
2. **Test locally first:**
   ```bash
   npm run build
   npx serve out
   ```
3. **Contact support:** contact@pawelkarniej.com

## 📊 Performance Tips

1. **Optimize images:** Use WebP format when possible
2. **Enable compression:** Most hosts enable this by default
3. **Use a CDN:** Netlify and Vercel provide CDNs automatically
4. **Monitor Core Web Vitals:** Use tools like PageSpeed Insights

## 🔒 Security Headers

Security headers are configured in `netlify.toml`:

- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

For other hosts, configure these headers in your hosting provider's settings.

## 📈 Analytics

To add analytics:

1. **Google Analytics:**

   - Add tracking code to `src/app/layout.tsx`

2. **Netlify Analytics:**

   - Enable in Site Settings > Analytics

3. **Vercel Analytics:**
   - Install `@vercel/analytics`
   - Add to your layout

## 🚀 Continuous Deployment

Both Netlify and Vercel support automatic deployments:

1. **Connect your repository**
2. **Every push to main branch** triggers a new deployment
3. **Preview deployments** are created for pull requests

This ensures your site is always up-to-date with your latest changes.
