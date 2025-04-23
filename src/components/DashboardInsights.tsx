
import React from 'react';
import { BarChart4 } from 'lucide-react';

const DashboardInsights = () => {
  return (
    <div className="feature-card">
      <div className="mb-4">
        <BarChart4 className="h-8 w-8 text-brand-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
      <p className="text-muted-foreground">
        Track your business performance with real-time analytics. Monitor sales trends, inventory levels, 
        and key metrics to make data-driven decisions for your phone reselling business.
      </p>
    </div>
  );
};

export default DashboardInsights;
