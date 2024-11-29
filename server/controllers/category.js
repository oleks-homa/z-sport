import Category from '../models/Company';
import mongoose from 'mongoose';

const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch(e){
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
}

const createCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const picturePath = req.file ? req.file.path : null;

        const newCategory = new Category({ name, picturePath });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch(e) {
        res.status(500).json({ error: 'Failed to add category' });
    }
}

const updateCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const picturePath = req.file ? req.file.path : null;

        const updatedData = { name };
        if (picturePath) updatedData.picturePath = picturePath;

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );

        if (!updatedCompany) {
            return res.status(404).json({ error: 'Company not found' });
        }
        
        res.status(200).json(updatedCategory)
    } catch(e) {
        res.status(500).json({ error: 'Failed to update category '});
    }
}

const deleteCategory = async (req, res) => {
    try{
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch(e) {
        res.status(500).json({ error: 'Failed to delete category '});
    }
}

module.exports = {
    getAllCategories,
    updateCategory,
    deleteCategory,
    createCategory
}