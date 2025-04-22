import { useState, useEffect } from 'react';
import { exampleService } from '../services/api';

interface Example {
  id: string;
  name: string;
  description: string;
}

export function ExampleList() {
  const [examples, setExamples] = useState<Example[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newExample, setNewExample] = useState({ name: '', description: '' });

  // Fetch examples on component mount
  useEffect(() => {
    const fetchExamples = async () => {
      try {
        setLoading(true);
        const response = await exampleService.getExamples();
        setExamples(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch examples');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExamples();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExample(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission to create a new example
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newExample.name || !newExample.description) {
      setError('Name and description are required');
      return;
    }
    
    try {
      setLoading(true);
      const response = await exampleService.createExample(newExample);
      setExamples(prev => [...prev, response.data]);
      setNewExample({ name: '', description: '' });
      setError(null);
    } catch (err) {
      setError('Failed to create example');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle example deletion
  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await exampleService.deleteExample(id);
      setExamples(prev => prev.filter(example => example.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete example');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Examples</h2>
      
      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {/* Loading state */}
      {loading && <p>Loading...</p>}
      
      {/* Examples list */}
      <div className="space-y-4 mb-8">
        {examples.map(example => (
          <div key={example.id} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{example.name}</h3>
            <p className="text-gray-600">{example.description}</p>
            <button
              onClick={() => handleDelete(example.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        ))}
        
        {!loading && examples.length === 0 && (
          <p className="text-gray-500">No examples found.</p>
        )}
      </div>
      
      {/* Add new example form */}
      <div className="border p-4 rounded bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">Add New Example</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={newExample.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={newExample.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              rows={3}
              placeholder="Enter description"
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Example'}
          </button>
        </form>
      </div>
    </div>
  );
} 