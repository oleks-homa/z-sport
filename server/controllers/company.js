import Company from '../models/Company.js';
import mongoose from 'mongoose';
import uploadToS3 from '../config/awsS3Config.js';

export const getAllCompanies = async (req, res) => {
    try{
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch(e){
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
}

export const createCompany = async (req, res) => {
    try{
        const { name } = req.body;
        const file = req.file;

        const imgURL = uploadToS3(file.buffer, file.originalName, file.mimeType);

        const newCompany = new Company({ name, imgURL });
        
        await newCompany.save();
        res.status(201).json(newCompany);
    } catch(e) {
        res.status(500).json({ error: 'Failed to add company' });
    }
}

export const updateCompany = async (req, res) => {
    try{
        const { name } = req.body;
        const file = req.file;
        let imgURL;

        if (file) {
            imgURL = await uploadToS3(file.buffer, `${file.originalname}`, file.mimetype);
        }

        const updatedData = { name, ...(imgURL && { picture: imgURL }) };
        
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

export const deleteCompany = async (req, res) => {
    try{
        await Company.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch(e) {
        res.status(500).json({ error: 'Failed to delete company '});
    }
}