
import React from 'react';
import { ProductData } from '@/types/ProductData';

interface TitleSlideProps {
  data: ProductData;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ data }) => {
  const getToneStyles = (tone: string) => {
    switch (tone) {
      case 'friendly':
        return 'bg-gradient-to-br from-blue-50 to-purple-50';
      case 'bold':
        return 'bg-gradient-to-br from-red-50 to-orange-50';
      default:
        return 'bg-gradient-to-br from-gray-50 to-blue-50';
    }
  };

  return (
    <div className={`h-full flex flex-col justify-center items-center text-center p-8 ${getToneStyles(data.tone)}`}>
      <h1 className="text-6xl font-bold mb-6 text-primary">{data.productName}</h1>
      <p className="text-2xl text-muted-foreground mb-8 max-w-4xl leading-relaxed">
        {data.productDescription}
      </p>
      <div className="text-lg text-muted-foreground">
        Marketing & Sales Presentation
      </div>
    </div>
  );
};
