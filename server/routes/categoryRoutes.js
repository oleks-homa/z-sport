import { getAllCategories,
    deleteCategory } from '../controllers/category.js';
import express from 'express';

const router = express.Router();

router.get('/', getAllCategories);
router.delete('/:id', deleteCategory);

module.exports = router;
