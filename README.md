# Tailwind Credit Indicator

A beautiful, animated credit/battery indicator component built with React, TypeScript, and Tailwind CSS.

![npm](https://img.shields.io/npm/v/tailwind-credit-indicator)
![license](https://img.shields.io/npm/l/tailwind-credit-indicator)
![React](https://img.shields.io/badge/React-17%2B-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0%2B-blue)

<p align="center">
  <img src="https://placeholder-for-your-demo-image.com/demo.gif" alt="Credit Indicator Demo" width="400">
</p>

## Features

- 🔋 Beautiful iPhone-style battery/credit indicator
- 🎨 Automatic color changes based on remaining credits
- ✨ Smooth animations on value changes
- 📱 Responsive and customizable sizes
- 🔍 Accessible with clear text display
- 🌈 Elegant gradient text that's visible on all backgrounds
- 🌓 Light and dark mode support

## Demo

https://github.com/user-attachments/assets/72c63546-3f94-4311-bdb8-98bd271da8da

## Installation

```bash
npm install tailwind-credit-indicator
# or
yarn add tailwind-credit-indicator
# or
pnpm add tailwind-credit-indicator
```

## Usage

```tsx
import { CreditsIndicator } from 'tailwind-credit-indicator';
import 'tailwind-credit-indicator/styles.css'; // Import the component styles

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Credits</h1>
      
      <CreditsIndicator 
        credits={750} 
        maxCredits={1000} 
      />
      
      {/* Small size */}
      <CreditsIndicator 
        credits={15} 
        maxCredits={100} 
        size="sm" 
      />
      
      {/* Large size */}
      <CreditsIndicator 
        credits={500} 
        maxCredits={500} 
        size="lg" 
      />
      
      {/* Without the icon */}
      <CreditsIndicator 
        credits={250} 
        maxCredits={1000} 
        showLabel={false} 
      />
      
      {/* Dark mode - for dark backgrounds */}
      <div className="bg-gray-800 p-4">
        <CreditsIndicator 
          credits={800} 
          maxCredits={1000}
          isDarkMode={true}
        />
      </div>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `credits` | number | required | Current number of credits |
| `maxCredits` | number | required | Maximum possible credits |
| `showLabel` | boolean | `true` | Whether to show the icon |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Size of the battery indicator |
| `isDarkMode` | boolean | `false` | Whether the component is on a dark background |
| `className` | string | - | Additional CSS classes |

## Color States

The component automatically changes color based on the percentage of remaining credits:

- 🟢 **Green** (>50%): Healthy amount of credits
- 🟠 **Amber** (21-50%): Moderate amount of credits
- 🔴 **Red** (0-20%): Low amount of credits

## Dark Mode Support

The component supports both light and dark backgrounds:

- `isDarkMode={false}` (default): Uses dark text for light backgrounds
- `isDarkMode={true}`: Uses light text for dark backgrounds

## Testing the Component

This repository includes a demo application to test the component. To run it:

1. First build the component library:
   ```bash
   npm install
   npm run build
   ```

2. Then run the demo:
   ```bash
   cd demo
   npm install
   npm run dev
   ```

3. Open your browser to http://localhost:3000 to see the demo page.

Alternatively, you can test in your own project by linking:

```bash
# In the component library folder
npm link

# In your project folder
npm link tailwind-credit-indicator
```

## Development

To start developing on this project:

```bash
git clone https://github.com/joyspace-ai/public-tailwind-credit-indicator.git
cd public-tailwind-credit-indicator
npm install
npm run dev
```

## License

AGPL v3 © [Sagar Gandhi] 
