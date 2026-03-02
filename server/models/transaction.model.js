import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Income', 'Expense'],
        required: [true, 'Transaction category is required']
    },
    type: {
        type: String,
        required: [true, 'Source is required']
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

transactionSchema.index({ auth0Sub: 1, date: -1 }); // Compound index for efficient querying by user and date

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;