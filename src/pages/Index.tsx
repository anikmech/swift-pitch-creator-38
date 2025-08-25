
import React, { useState } from 'react';
import { DeckForm } from '@/components/DeckForm';
import { DeckPreview } from '@/components/DeckPreview';
import { ProductData } from '@/types/ProductData';
import { useToast } from '@/hooks/use-toast';
import { MobileOptimizedLayout } from '@/components/MobileOptimizedLayout';

const Index = () => {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const { toast } = useToast();

  const handleFormSubmit = (data: ProductData) => {
    setProductData(data);
    toast({
      title: "Deck Generated Successfully!",
      description: "Your marketing deck is ready to view and share.",
    });
  };

  const handleBackToForm = () => {
    setProductData(null);
  };

  return (
    <MobileOptimizedLayout>
      {productData ? (
        <DeckPreview data={productData} onBack={handleBackToForm} />
      ) : (
        <>
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 text-primary">
              Professional Marketing Deck Generator
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Create compelling marketing and sales presentations in minutes. 
              Perfect for products, services, and consultancies.
            </p>
          </div>
          <DeckForm onSubmit={handleFormSubmit} />
        </>
      )}
    </MobileOptimizedLayout>
  );
};

export default Index;
