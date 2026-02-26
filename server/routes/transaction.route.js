import express from 'express';
import { checkJwt } from '../middleware/auth.middleware.js';
import {
    createTransaction,
    deleteTransaction,
    getTransactions,
} from '../controllers/transaction.controller.js';

const router = express.Router();

router.get('/transactions', checkJwt, getTransactions);
router.post('/transactions', checkJwt, createTransaction);
router.delete('/transactions/:id', checkJwt, deleteTransaction);

export default router;