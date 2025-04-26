'use client';

import { useEffect, useState } from 'react';
import { Battery, BatteryCharging, BatteryWarning } from 'lucide-react';
import { cn } from '../lib/utils';

export interface CreditsIndicatorProps {
  /**
   * Current number of credits
   */
  credits: number;
  /**
   * Maximum possible credits
   */
  maxCredits: number;
  /**
   * Whether to show the numerical label
   * @default true
   */
  showLabel?: boolean;
  /**
   * Size of the battery indicator
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the component is being used on a dark background
   * @default false
   */
  isDarkMode?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * A component that displays remaining credits as an iPhone-style battery indicator
 */
export function CreditsIndicator({
  credits,
  maxCredits,
  showLabel = true,
  size = 'md',
  isDarkMode = false,
  className
}: CreditsIndicatorProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const safeCredits = Math.max(0, credits);
  const safeMaxCredits = Math.max(1, maxCredits);
  const percentage = Math.min(
    100,
    Math.max(0, (safeCredits / safeMaxCredits) * 100)
  );

  // Determine color based on percentage
  const getColor = () => {
    if (percentage <= 20) return 'bg-red-500';
    if (percentage <= 50) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  // Apply appropriate text style based on dark mode
  const getTextStyle = () => {
    if (isDarkMode) {
      // Light text for dark mode (white gradient)
      return 'inline-block bg-gradient-to-r from-white via-gray-100 to-white text-transparent bg-clip-text font-semibold';
    } else {
      // Dark text for light mode (dark gradient)
      return 'inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-transparent bg-clip-text font-semibold';
    }
  };

  // Get the appropriate icon based on percentage
  const getIcon = () => {
    if (percentage <= 10) return <BatteryWarning className='text-red-500' />;
    if (percentage <= 20) return <Battery className='text-amber-500' />;
    return <BatteryCharging className='text-emerald-500' />;
  };

  // Size classes for horizontal battery
  const sizeClasses = {
    sm: 'w-20 h-6',
    md: 'w-24 h-8',
    lg: 'w-28 h-10'
  };

  // Text size classes
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  // Trigger animation when credits change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [credits]);

  return (
    <div className={cn('flex items-center', className)}>
      <div className='flex flex-row items-center gap-2'>
        {showLabel && (
          <div className='flex items-center gap-1'>{getIcon()}</div>
        )}
        <div className='relative'>
          {/* Battery outline */}
          <div
            className={cn(
              'relative overflow-hidden rounded-lg border-2 border-slate-400',
              sizeClasses[size]
            )}
          >
            {/* Battery tip */}
            <div className='absolute -right-1 top-1/2 h-3 w-1 -translate-y-1/2 rounded-r-sm bg-slate-400' />

            {/* Battery fill */}
            <div
              className={cn(
                'absolute bottom-0 left-0 top-0 transition-all duration-500',
                getColor()
              )}
              style={{ width: `${percentage}%` }}
            ></div>

            {/* Text overlay - positioned in center with improved visibility */}
            <div className='absolute inset-0 z-10 flex items-center justify-center'>
              <span
                className={cn(
                  'px-1 py-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]',
                  getTextStyle(),
                  textSizeClasses[size]
                )}
              >
                {safeCredits.toLocaleString()} /{' '}
                {safeMaxCredits.toLocaleString()}
              </span>
            </div>

            {/* Charging animation */}
            {isAnimating && (
              <div className='absolute inset-0 animate-pulse bg-white/20' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
