
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductData } from '@/types/ProductData';
import { Plus, Trash2 } from 'lucide-react';

interface DeckFormProps {
  onSubmit: (data: ProductData) => void;
}

export const DeckForm: React.FC<DeckFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProductData>({
    productName: '',
    productDescription: '',
    targetAudience: '',
    mainGoal: '',
    keyFeatures: [''],
    marketingChannels: '',
    competitors: '',
    callToAction: '',
    tone: 'professional'
  });

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.keyFeatures];
    newFeatures[index] = value;
    setFormData({ ...formData, keyFeatures: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, keyFeatures: [...formData.keyFeatures, ''] });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.keyFeatures.filter((_, i) => i !== index);
    setFormData({ ...formData, keyFeatures: newFeatures });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredFeatures = formData.keyFeatures.filter(feature => feature.trim() !== '');
    onSubmit({ ...formData, keyFeatures: filteredFeatures });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Marketing Deck Generator</CardTitle>
        <CardDescription>
          Fill out the details below to generate your professional marketing and sales deck
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="productName">Product/Service Name</Label>
            <Input
              id="productName"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              placeholder="e.g., NutriScan AI"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productDescription">Product Description</Label>
            <Textarea
              id="productDescription"
              value={formData.productDescription}
              onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
              placeholder="Brief description of your product or service..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Input
              id="targetAudience"
              value={formData.targetAudience}
              onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
              placeholder="e.g., Health-conscious millennials and fitness influencers"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mainGoal">Main Goal</Label>
            <Textarea
              id="mainGoal"
              value={formData.mainGoal}
              onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
              placeholder="What do you want to achieve with this deck?"
              rows={2}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Key Features/Benefits</Label>
            {formData.keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder={`Feature ${index + 1}`}
                />
                {formData.keyFeatures.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removeFeature(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addFeature}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Feature
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="marketingChannels">Marketing Channels</Label>
            <Input
              id="marketingChannels"
              value={formData.marketingChannels}
              onChange={(e) => setFormData({ ...formData, marketingChannels: e.target.value })}
              placeholder="e.g., Instagram, LinkedIn, Google Ads, Email campaigns"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="competitors">Competitors (Optional)</Label>
            <Input
              id="competitors"
              value={formData.competitors}
              onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
              placeholder="e.g., HealthifyMe, MyFitnessPal"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="callToAction">Call-to-Action</Label>
            <Input
              id="callToAction"
              value={formData.callToAction}
              onChange={(e) => setFormData({ ...formData, callToAction: e.target.value })}
              placeholder="e.g., Download the app today!"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tone">Tone</Label>
            <Select value={formData.tone} onValueChange={(value: 'friendly' | 'bold' | 'professional') => setFormData({ ...formData, tone: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friendly">Friendly and Modern</SelectItem>
                <SelectItem value="bold">Bold and Persuasive</SelectItem>
                <SelectItem value="professional">Simple and Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Generate Marketing Deck
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
