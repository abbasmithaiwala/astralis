// API service for making requests to the backend

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function for handling fetch responses
const handleResponse = async (response: Response) => {
  const data = await response.json();
  
  if (!response.ok) {
    const error = data.error || response.statusText;
    throw new Error(error);
  }
  
  return data;
};

// Helper function for API requests
const apiRequest = async (endpoint: string, options = {}) => {
  const url = `${API_URL}${endpoint}`;
  const response = await fetch(url, options);
  return handleResponse(response);
};

// Example API service
const exampleService = {
  // Get all examples
  getExamples: async () => {
    return apiRequest('/examples');
  },
  
  // Get example by ID
  getExampleById: async (id: string) => {
    return apiRequest(`/examples/${id}`);
  },
  
  // Create new example
  createExample: async (exampleData: { name: string; description: string }) => {
    return apiRequest('/examples', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exampleData),
    });
  },
  
  // Update example
  updateExample: async (id: string, exampleData: { name?: string; description?: string }) => {
    return apiRequest(`/examples/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exampleData),
    });
  },
  
  // Delete example
  deleteExample: async (id: string) => {
    return apiRequest(`/examples/${id}`, {
      method: 'DELETE',
    });
  },
};

export { exampleService }; 