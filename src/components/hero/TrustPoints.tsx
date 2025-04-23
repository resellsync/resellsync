
import { Check } from 'lucide-react';

const trustPoints = [
  "No credit card required",
  "14-day free trial", 
  "Minimal learning curve"
];

export const TrustPoints = () => (
  <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 mt-4">
    {trustPoints.map((point, index) => (
      <div key={index} className="flex items-center gap-2 text-muted-foreground">
        <Check className="h-5 w-5 text-green-500" />
        <span>{point}</span>
      </div>
    ))}
  </div>
);
