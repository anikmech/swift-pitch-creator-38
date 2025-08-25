
import React from 'react';
import { cn } from '@/lib/utils';

interface MobileOptimizedLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileOptimizedLayout: React.FC<MobileOptimizedLayoutProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      "min-h-screen bg-background",
      "safe-area-inset-top safe-area-inset-bottom",
      "overflow-x-hidden",
      className
    )}>
      <div className="container mx-auto px-4 py-4 max-w-full">
        {children}
      </div>
    </div>
  );
};
