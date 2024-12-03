import { getAllCompanies,
    deleteCompany,
    createCompany,
    updateCompany } from '../controllers/company.js';
import express from 'express';

const router = express.Router();

router.get('/', getAllCompanies);
router.delete('/:id', deleteCompany);
router.post('/create', createCompany);
router.put('/update/:id', updateCompany);

export default router;