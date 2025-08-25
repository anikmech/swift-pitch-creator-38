
import React from 'react';
import { ProductData } from '@/types/ProductData';
import { ArrowRight } from 'lucide-react';

interface CTASlideProps {
  data: ProductData;
}

export const CTASlide: React.FC<CTASlideProps> = ({ data }) => {
  const getToneStyles = (tone: string) => {
    switch (tone) {
      case 'friendly':
        return 'bg-gradient-to-br from-blue-50 to-purple-50 text-blue-800';
      case 'bold':
        return 'bg-gradient-to-br from-red-50 to-orange-50 text-red-800';
      default:
        return 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800';
    }
  };

  return (
    <div className={`h-full flex flex-col justify-center items-center text-center p-12 ${getToneStyles(data.tone)}`}>
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-6xl font-bold text-primary mb-6">Ready to Get Started?</h2>
        
        <p className="text-2xl text-muted-foreground mb-8">
          Join thousands who have already transformed their experience with {data.productName}
        </p>
        
        <div className="bg-white rounded-xl p-8 shadow-lg border">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-3xl font-semibold text-primary">{data.callToAction}</span>
            <ArrowRight className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <div className="text-lg text-muted-foreground">
          Transform your business today with {data.productName}
        </div>
      </div>
    </div>
  );
};
