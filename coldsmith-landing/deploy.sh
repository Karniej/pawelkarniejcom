#!/bin/bash

# Coldsmith Landing Page Deployment Script
# Usage: ./deploy.sh [netlify|vercel|build]

set -e  # Exit on any error

echo "🚀 Coldsmith Landing Page Deployment Script"
echo "============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "next.config.js" ]; then
    print_error "This script must be run from the coldsmith-landing directory"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
fi

# Get deployment method from argument or prompt user
DEPLOY_METHOD=${1:-""}

if [ -z "$DEPLOY_METHOD" ]; then
    echo ""
    echo "Choose deployment method:"
    echo "1) netlify - Deploy to Netlify"
    echo "2) vercel  - Deploy to Vercel"
    echo "3) build   - Build only (for manual deployment)"
    echo ""
    read -p "Enter your choice (1-3): " choice
    
    case $choice in
        1) DEPLOY_METHOD="netlify";;
        2) DEPLOY_METHOD="vercel";;
        3) DEPLOY_METHOD="build";;
        *) print_error "Invalid choice"; exit 1;;
    esac
fi

# Build the project
print_status "Building the project..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Deploy based on method
case $DEPLOY_METHOD in
    "netlify")
        print_status "Deploying to Netlify..."
        
        # Check if netlify CLI is installed
        if ! command -v netlify &> /dev/null; then
            print_warning "Netlify CLI not found. Installing..."
            npm install -g netlify-cli
        fi
        
        # Check if user is logged in
        if ! netlify status &> /dev/null; then
            print_status "Please log in to Netlify:"
            netlify login
        fi
        
        # Deploy
        netlify deploy --prod --dir=out
        print_success "Deployed to Netlify!"
        ;;
        
    "vercel")
        print_status "Deploying to Vercel..."
        
        # Check if vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            print_warning "Vercel CLI not found. Installing..."
            npm install -g vercel
        fi
        
        # Deploy
        vercel --prod
        print_success "Deployed to Vercel!"
        ;;
        
    "build")
        print_success "Build completed. Static files are in the 'out' directory."
        print_status "You can now upload the contents of 'out/' to your hosting provider."
        ;;
        
    *)
        print_error "Invalid deployment method: $DEPLOY_METHOD"
        print_status "Valid options: netlify, vercel, build"
        exit 1
        ;;
esac

echo ""
print_success "🎉 Deployment process completed!"

# Show next steps
case $DEPLOY_METHOD in
    "netlify"|"vercel")
        print_status "Your site should now be live. Check the output above for the URL."
        ;;
    "build")
        print_status "Next steps:"
        echo "  1. Upload the contents of 'out/' to your hosting provider"
        echo "  2. Configure your domain (if needed)"
        echo "  3. Test the live site"
        ;;
esac 