# Credit Indicator Demo

This is a demo application for the Tailwind Credit Indicator component.

## Getting Started

First, make sure you've built the parent package:

```bash
# From the parent directory
npm install
npm run build
```

Then, install dependencies and run the demo:

```bash
# From this demo directory
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the demo.

## What's Included

- Different credit levels (high, medium, low, critical)
- Various sizes (small, medium, large)
- Interactive demo with buttons to increase/decrease credits

## Structure

- `app/page.tsx` - Main page wrapper
- `pages/demo-page.tsx` - Main demo page with various examples
- `components/credits-display.tsx` - Interactive component with buttons 