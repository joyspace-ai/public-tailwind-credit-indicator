#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Setting up tailwind-credit-indicator package...${NC}"

# Clean installation
echo -e "${GREEN}Cleaning node_modules...${NC}"
rm -rf node_modules
rm -rf dist

# Install dependencies
echo -e "${GREEN}Installing dependencies...${NC}"
npm install

# Create directories if they don't exist
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/types

# Build the package
echo -e "${GREEN}Building package...${NC}"
npm run build

echo -e "${YELLOW}Setup complete!${NC}"

echo -e "${YELLOW}To test locally before publishing, run:${NC}"
echo -e "${GREEN}cd demo${NC}"
echo -e "${GREEN}npm install${NC}"
echo -e "${GREEN}npm run dev${NC}"
