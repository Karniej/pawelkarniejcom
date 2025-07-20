#!/bin/bash

# Script to move Coldsmith Landing Page to a new repository
# Usage: ./move-to-repo.sh <target-directory> [git-remote-url]

set -e  # Exit on any error

echo "📦 Coldsmith Landing Page Repository Migration Script"
echo "====================================================="

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

# Check arguments
if [ $# -lt 1 ]; then
    print_error "Usage: $0 <target-directory> [git-remote-url]"
    echo "Example: $0 ../coldsmith-website https://github.com/username/coldsmith-website.git"
    exit 1
fi

TARGET_DIR="$1"
GIT_REMOTE="$2"

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "next.config.js" ]; then
    print_error "This script must be run from the coldsmith-landing directory"
    exit 1
fi

# Check if target directory already exists
if [ -d "$TARGET_DIR" ]; then
    print_warning "Target directory '$TARGET_DIR' already exists"
    read -p "Do you want to continue? This will overwrite existing files. (y/N): " confirm
    if [[ $confirm != [yY] ]]; then
        print_status "Operation cancelled"
        exit 0
    fi
else
    print_status "Creating target directory: $TARGET_DIR"
    mkdir -p "$TARGET_DIR"
fi

# Copy files
print_status "Copying project files..."

# Essential files to copy
FILES_TO_COPY=(
    "src"
    "public"
    "package.json"
    "package-lock.json"
    "next.config.js"
    "netlify.toml"
    "tailwind.config.ts"
    "tsconfig.json"
    "components.json"
    "postcss.config.mjs"
    "eslint.config.mjs"
    ".gitignore"
    "README.md"
    "deploy.sh"
)

for item in "${FILES_TO_COPY[@]}"; do
    if [ -e "$item" ]; then
        print_status "Copying $item..."
        cp -r "$item" "$TARGET_DIR/"
    else
        print_warning "File/directory '$item' not found, skipping..."
    fi
done

# Make deploy script executable
if [ -f "$TARGET_DIR/deploy.sh" ]; then
    chmod +x "$TARGET_DIR/deploy.sh"
    print_status "Made deploy.sh executable"
fi

# Initialize git repository if it doesn't exist
cd "$TARGET_DIR"

if [ ! -d ".git" ]; then
    print_status "Initializing Git repository..."
    git init
    print_success "Git repository initialized"
else
    print_warning "Git repository already exists in target directory"
fi

# Add files to git
print_status "Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    print_warning "No changes to commit"
else
    print_status "Committing files..."
    git commit -m "Initial commit: Coldsmith landing page

- Next.js 15 with TypeScript
- Tailwind CSS with cold theme
- Framer Motion animations
- shadcn/ui components
- Netlify deployment ready
- App Store integration"
    print_success "Files committed"
fi

# Add remote if provided
if [ -n "$GIT_REMOTE" ]; then
    print_status "Adding remote origin: $GIT_REMOTE"
    
    # Remove existing origin if it exists
    git remote remove origin 2>/dev/null || true
    
    git remote add origin "$GIT_REMOTE"
    
    print_status "Pushing to remote repository..."
    read -p "Push to remote repository now? (Y/n): " push_confirm
    if [[ $push_confirm != [nN] ]]; then
        git push -u origin main || git push -u origin master
        print_success "Pushed to remote repository"
    else
        print_status "Skipped pushing to remote. You can push later with: git push -u origin main"
    fi
fi

# Install dependencies
print_status "Installing dependencies in new location..."
npm install
print_success "Dependencies installed"

# Test build
print_status "Testing build..."
npm run build
if [ $? -eq 0 ]; then
    print_success "Build test successful"
else
    print_error "Build test failed"
    exit 1
fi

echo ""
print_success "🎉 Migration completed successfully!"
echo ""
print_status "Your Coldsmith landing page is now ready in: $TARGET_DIR"
echo ""
print_status "Next steps:"
echo "  1. cd $TARGET_DIR"
echo "  2. npm run dev (to start development server)"
echo "  3. ./deploy.sh (to deploy to production)"
if [ -n "$GIT_REMOTE" ]; then
    echo "  4. Your code is already pushed to: $GIT_REMOTE"
else
    echo "  4. Add a git remote and push: git remote add origin <your-repo-url> && git push -u origin main"
fi
echo ""
print_status "For deployment instructions, see README.md in the new directory" 