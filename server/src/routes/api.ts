import express from 'express';
import { router as exampleRouter } from './example.js';

export const router = express.Router();

// API version and info
router.get('/', (req, res) => {
  res.json({
    name: 'Astralis API',
    version: '1.0.0',
    description: 'API for Astralis application'
  });
});

// Mount other routers
router.use('/examples', exampleRouter); 