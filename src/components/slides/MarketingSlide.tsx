
import React from 'react';
import { ProductData } from '@/types/ProductData';
import { Target } from 'lucide-react';

interface MarketingSlideProps {
  data: ProductData;
}

export const MarketingSlide: React.FC<MarketingSlideProps> = ({ data }) => {
  const channels = data.marketingChannels.split(',').map(channel => channel.trim());

  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Target className="h-12 w-12 text-purple-600 mr-4" />
          <h2 className="text-5xl font-bold text-primary">Marketing Strategy</h2>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Target Audience</h3>
            <p className="text-lg text-muted-foreground">{data.targetAudience}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Marketing Channels</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {channels.map((channel, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-lg text-muted-foreground">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
