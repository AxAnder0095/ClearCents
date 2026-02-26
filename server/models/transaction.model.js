import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: [true, 'Transaction type is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    date: {
        type: Date,
        default: Date.now
    },
    auth0Sub: {
        type: String,
        required: [true, 'User is required'],
        index: true
    }
}, {timestamps: true});

transactionSchema.index({ auth0Sub: 1, date: -1 });

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;