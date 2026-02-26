import Transaction from '../models/Transaction.model.js';

const getAuth0Sub = (req) => req.auth?.sub;

export const getTransactions = async (req, res) => {
    try {
        const auth0Sub = getAuth0Sub(req);

        if (!auth0Sub) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const transactions = await Transaction.find({ auth0Sub }).sort({ date: -1 });
        return res.json(transactions);
    } catch (error) {
        return res.status(500).json({ message: 'Failed to fetch transactions' });
    }
};

export const createTransaction = async (req, res) => {
    try {
        const auth0Sub = getAuth0Sub(req);

        if (!auth0Sub) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const transaction = await Transaction.create({
            ...req.body,
            auth0Sub,
        });

        return res.status(201).json(transaction);
    } catch (error) {
        return res.status(400).json({ message: error.message || 'Failed to create transaction' });
    }
};

export const deleteTransaction = async (req, res) => {
    try {
        const auth0Sub = getAuth0Sub(req);

        if (!auth0Sub) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const deletedTransaction = await Transaction.findOneAndDelete({
            _id: req.params.id,
            auth0Sub,
        });

        if (!deletedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ message: error.message || 'Failed to delete transaction' });
    }
};