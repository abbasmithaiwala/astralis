import { ExampleList } from '@/components/ExampleList';
import PageHeader from '@/components/PageHeader';

export default function Examples() {
  return (
    <div className="container mx-auto py-8">
      <PageHeader 
        title="Examples API" 
        description="Demonstrating the integration of React frontend with Express backend" 
      />
      <div className="mt-8">
        <ExampleList />
      </div>
    </div>
  );
} 