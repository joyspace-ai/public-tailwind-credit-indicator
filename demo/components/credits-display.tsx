'use client';

import { useState } from 'react';
import { CreditsIndicator } from '../../src/components/credit-indicator';

export function CreditsDisplay() {
  const [credits, setCredits] = useState(750);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const maxCredits = 1000;

  const handleIncrement = () => {
    setCredits(prev => Math.min(prev + 50, maxCredits));
  };

  const handleDecrement = () => {
    setCredits(prev => Math.max(prev - 50, 0));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={cn(
      "p-6 border rounded-lg shadow-sm space-y-6 transition-colors", 
      isDarkMode ? "bg-gray-800 text-white" : "bg-white"
    )}>
      <h2 className="text-xl font-semibold">Interactive Credits</h2>
      
      <div className="flex justify-center py-4">
        <CreditsIndicator 
          credits={credits} 
          maxCredits={maxCredits}
          isDarkMode={isDarkMode}
          size="lg"
        />
      </div>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={handleDecrement}
          className={cn(
            "px-4 py-2 rounded-md transition",
            isDarkMode 
              ? "bg-gray-700 hover:bg-gray-600" 
              : "bg-gray-200 hover:bg-gray-300"
          )}
        >
          -50 Credits
        </button>
        <button 
          onClick={handleIncrement}
          className={cn(
            "px-4 py-2 rounded-md transition",
            isDarkMode 
              ? "bg-gray-700 hover:bg-gray-600" 
              : "bg-gray-200 hover:bg-gray-300"
          )}
        >
          +50 Credits
        </button>
      </div>
      
      <div className="flex justify-center pt-4">
        <button
          onClick={toggleDarkMode}
          className={cn(
            "px-4 py-2 rounded-md transition",
            isDarkMode 
              ? "bg-gray-700 hover:bg-gray-600" 
              : "bg-gray-200 hover:bg-gray-300"
          )}
        >
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      
      <div className={cn(
        "text-center text-sm",
        isDarkMode ? "text-gray-400" : "text-gray-500"
      )}>
        Click buttons to see animation and theme changes
      </div>
    </div>
  );
}

// Helper function for merging class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
} 