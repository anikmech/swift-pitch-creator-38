
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductData } from '@/types/ProductData';
import { TitleSlide } from './slides/TitleSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { FeaturesSlide } from './slides/FeaturesSlide';
import { MarketingSlide } from './slides/MarketingSlide';
import { CompetitionSlide } from './slides/CompetitionSlide';
import { CTASlide } from './slides/CTASlide';
import { ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

interface DeckPreviewProps {
  data: ProductData;
  onBack: () => void;
}

export const DeckPreview: React.FC<DeckPreviewProps> = ({ data, onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: TitleSlide, title: "Title" },
    { component: ProblemSlide, title: "Problem" },
    { component: SolutionSlide, title: "Solution" },
    { component: FeaturesSlide, title: "Features" },
    { component: MarketingSlide, title: "Marketing" },
    { component: CompetitionSlide, title: "Competition" },
    { component: CTASlide, title: "Call to Action" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="bg-white border-b p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="outline" onClick={onBack}>
            ← Back to Form
          </Button>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} of {slides.length}
            </span>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Tabs */}
      <div className="bg-white border-b px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors ${
                  currentSlide === index
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-6xl aspect-[16/9] overflow-hidden shadow-xl">
          <CurrentSlideComponent data={data} />
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
