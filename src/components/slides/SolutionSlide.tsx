
import React from 'react';
import { ProductData } from '@/types/ProductData';
import { CheckCircle } from 'lucide-react';

interface SolutionSlideProps {
  data: ProductData;
}

export const SolutionSlide: React.FC<SolutionSlideProps> = ({ data }) => {
  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <CheckCircle className="h-12 w-12 text-green-600 mr-4" />
          <h2 className="text-5xl font-bold text-primary">The Solution</h2>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-primary">{data.productName}</h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {data.productDescription}
          </p>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-primary">Our mission:</span> {data.mainGoal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
