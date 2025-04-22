import { Request, Response, NextFunction } from 'express';

// Mock authentication middleware - would typically use JWT or other auth method
export const protect = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];
  
  // For demo purposes only - in a real app, use proper authentication
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ 
      success: false, 
      error: 'Unauthorized access - API key required'
    });
  }
  
  next();
}; 