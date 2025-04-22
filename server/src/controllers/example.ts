import { Request, Response } from 'express';

// Dummy data storage for examples
let examples = [
  { id: '1', name: 'Example 1', description: 'This is example 1' },
  { id: '2', name: 'Example 2', description: 'This is example 2' }
];

// Get all examples
export const getExamples = (req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true, data: examples });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Get example by ID
export const getExampleById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const example = examples.find(ex => ex.id === id);
    
    if (!example) {
      return res.status(404).json({ success: false, error: 'Example not found' });
    }
    
    res.status(200).json({ success: true, data: example });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Create new example
export const createExample = (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    
    if (!name || !description) {
      return res.status(400).json({ success: false, error: 'Please provide name and description' });
    }
    
    const newExample = {
      id: Date.now().toString(),
      name,
      description
    };
    
    examples.push(newExample);
    
    res.status(201).json({ success: true, data: newExample });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Update example
export const updateExample = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    
    if (!name && !description) {
      return res.status(400).json({ success: false, error: 'Please provide at least one field to update' });
    }
    
    const exampleIndex = examples.findIndex(ex => ex.id === id);
    
    if (exampleIndex === -1) {
      return res.status(404).json({ success: false, error: 'Example not found' });
    }
    
    examples[exampleIndex] = {
      ...examples[exampleIndex],
      name: name || examples[exampleIndex].name,
      description: description || examples[exampleIndex].description
    };
    
    res.status(200).json({ success: true, data: examples[exampleIndex] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Delete example
export const deleteExample = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const exampleIndex = examples.findIndex(ex => ex.id === id);
    
    if (exampleIndex === -1) {
      return res.status(404).json({ success: false, error: 'Example not found' });
    }
    
    examples = examples.filter(ex => ex.id !== id);
    
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
}; 