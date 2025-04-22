import express from 'express';
import { getExamples, getExampleById, createExample, updateExample, deleteExample } from '../controllers/example.js';

export const router = express.Router();

// GET all examples
router.get('/', getExamples);

// GET example by ID
router.get('/:id', getExampleById);

// POST new example
router.post('/', createExample);

// PUT/UPDATE example
router.put('/:id', updateExample);

// DELETE example
router.delete('/:id', deleteExample); 