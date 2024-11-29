import { getAllCompanies,
    deleteCompany } from '../controllers/company.js';
import express from 'express';

const router = express.Router();

router.get('/', getAllCompanies);
router.delete('/:id', deleteCompany);

module.exports = router;