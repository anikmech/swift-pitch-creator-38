
import React from 'react';
import { ProductData } from '@/types/ProductData';
import { Star } from 'lucide-react';

interface FeaturesSlideProps {
  data: ProductData;
}

export const FeaturesSlide: React.FC<FeaturesSlideProps> = ({ data }) => {
  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Star className="h-12 w-12 text-blue-600 mr-4" />
          <h2 className="text-5xl font-bold text-primary">Key Features</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {data.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-lg text-muted-foreground">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
