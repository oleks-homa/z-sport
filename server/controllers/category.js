import Category from '../models/Category.js';
import mongoose from 'mongoose';
import uploadToS3 from '../config/awsS3Config.js';

export const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch(e){
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
}

export const createCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const file = req.file;

        const imgURL = uploadToS3(file.buffer, file.originalName, file.mimeType);

        const newCategory = new Category({ name, picturePath: imgURL });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch(e) {
        res.status(500).json({ error: 'Failed to add category' });
    }
}

export const updateCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const file = req.file;
        let imgURL;

        if (file) {
            imgURL = await uploadToS3(file.buffer, `${file.originalname}`, file.mimetype);
        }

        const updatedData = { name, ...(imgURL && { picture: imgURL }) };

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

export const deleteCategory = async (req, res) => {
    try{
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch(e) {
        res.status(500).json({ error: 'Failed to delete category '});
    }
}