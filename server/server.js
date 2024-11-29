import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import upload from './config/multerConfig';

import categoryRoutes from './routes/categoryRoutes';
import companyRoutes from './routes/companyRoutes';

import { createCategory, updateCategory } from './controllers/category';
import { createCompany, updateCompany } from './controllers/company';

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(express.json());

// Category routes with image upload
app.post('/api/categories/create', upload.single('picture'), createCategory);
app.put('/api/categories/update/:id', upload.single('picture'), updateCategory);

// Company routes with image upload
app.post('/api/companies/create', upload.single('picture'), createCompany);
app.put('/api/companies/update/:id', upload.single('picture'), updateCompany);

app.use('/api/categories', categoryRoutes);
app.use('/api/companies', companyRoutes);

// Route to send image to frontend
app.get('/api/files/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'public/assets', req.params.filename);
    res.sendFile(filePath);
});

const PORT = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`))
})