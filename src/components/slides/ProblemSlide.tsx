
import React from 'react';
import { ProductData } from '@/types/ProductData';
import { AlertCircle } from 'lucide-react';

interface ProblemSlideProps {
  data: ProductData;
}

export const ProblemSlide: React.FC<ProblemSlideProps> = ({ data }) => {
  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <AlertCircle className="h-12 w-12 text-destructive mr-4" />
          <h2 className="text-5xl font-bold text-primary">The Problem</h2>
        </div>
        
        <div className="space-y-6 text-xl text-muted-foreground">
          <p>
            <span className="font-semibold text-primary">{data.targetAudience}</span> are facing challenges that need immediate attention.
          </p>
          <p>
            Current solutions in the market are not meeting their needs effectively, creating a gap that requires innovative thinking and specialized expertise.
          </p>
          <p>
            This presents a significant opportunity to deliver value and make a meaningful impact in their daily lives and business operations.
          </p>
        </div>
      </div>
    </div>
  );
};
