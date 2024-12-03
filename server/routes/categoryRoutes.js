import { 
    getAllCategories,
    updateCategory,
    deleteCategory,
    createCategory, } from '../controllers/category.js';
import express from 'express';

const router = express.Router();

router.get('/', getAllCategories);
router.delete('/:id', deleteCategory);
router.post('/create', createCategory);
router.put('/update/:id', updateCategory);

export default router;
