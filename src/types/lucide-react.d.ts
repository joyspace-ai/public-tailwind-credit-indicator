declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  type Icon = ComponentType<LucideProps>;

  export const BatteryWarning: Icon;
  export const Battery: Icon;
  export const BatteryCharging: Icon;
  // Add any other icons you might need
} 