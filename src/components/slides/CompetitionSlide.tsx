
import React from 'react';
import { ProductData } from '@/types/ProductData';
import { TrendingUp } from 'lucide-react';

interface CompetitionSlideProps {
  data: ProductData;
}

export const CompetitionSlide: React.FC<CompetitionSlideProps> = ({ data }) => {
  const competitors = data.competitors ? data.competitors.split(',').map(comp => comp.trim()) : [];

  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <TrendingUp className="h-12 w-12 text-orange-600 mr-4" />
          <h2 className="text-5xl font-bold text-primary">Competitive Advantage</h2>
        </div>
        
        <div className="space-y-8">
          {competitors.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-2xl font-semibold text-primary mb-4">Key Competitors</h3>
              <div className="space-y-2">
                {competitors.map((competitor, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-lg text-muted-foreground">{competitor}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Why Choose {data.productName}?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our unique approach combines innovative technology with deep understanding of {data.targetAudience.toLowerCase()}, 
              delivering solutions that are specifically tailored to their needs and challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
