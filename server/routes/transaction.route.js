import express from 'express';
import { checkJwt } from '../middleware/auth.middleware.js';
import {
    createTransaction,
    deleteTransaction,
    getTransactions,
    getExpenseTransactions,
    getIncomeTransactions
} from '../controllers/transaction.controller.js';

const router = express.Router();

router.get('/transactions', checkJwt, getTransactions);
router.get('/transactions/expenses', checkJwt, getExpenseTransactions);
router.get('/transactions/income', checkJwt, getIncomeTransactions);
router.post('/transactions', checkJwt, createTransaction);
router.delete('/transactions/:id', checkJwt, deleteTransaction);

export default router;