
export interface ProductData {
  productName: string;
  productDescription: string;
  targetAudience: string;
  mainGoal: string;
  keyFeatures: string[];
  marketingChannels: string;
  competitors: string;
  callToAction: string;
  tone: 'friendly' | 'bold' | 'professional';
}
