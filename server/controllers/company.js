import Company from '../models/Company';
import mongoose from 'mongoose';

const getAllCompanies = async (req, res) => {
    try{
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch(e){
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
}

const createCompany = async (req, res) => {
    try{
        const { name } = req.body;
        const picturePath = req.file ? req.file.path : null;

        const newCompany = new Company({ name, picturePath });
        
        await newCompany.save();
        res.status(201).json(newCompany);
    } catch(e) {
        res.status(500).json({ error: 'Failed to add company' });
    }
}

const updateCompany = async (req, res) => {
    try{
        const { name } = req.body;
        const picturePath = req.file ? req.file.path : null;

        const updatedData = { name };
        if (picturePath) updatedData.picturePath = picturePath;
        
        const updatedCompany = await Company.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );

        if (!updatedCompany) {
            return res.status(404).json({ error: 'Company not found' });
        }
        
        res.status(200).json(updatedCompany)
    } catch(e) {
        res.status(500).json({ error: 'Failed to update company '});
    }
}

const deleteCompany = async (req, res) => {
    try{
        await Company.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch(e) {
        res.status(500).json({ error: 'Failed to delete company '});
    }
}

module.exports = {
    getAllCompanies,
    updateCompany,
    deleteCompany,
    createCompany
}