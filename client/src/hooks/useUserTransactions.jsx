import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { api } from "../api/api.js"

export const useUserTransactions = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [transactions, setTransactions] = useState([]);
    const [expenseTransactions, setExpenseTransactions] = useState([]);
    const [incomeTransactions, setIncomeTransactions] = useState([]);

    const fetchTransactions = async () => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                }
            });
            const response = await api.get("/transactions", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTransactions(response.data);
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    const getExpenseTransactions = () => {
        if (transactions.length === 0) return [];

        return transactions
            .filter((transaction) => transaction.category === "Expense")
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    };

    // next time you write a program that calculates like this, use the hook useMemo to memoize the filtered and sorted transactions to prevent unnecessary recalculations on re-renders. This will improve performance, especially as the number of transactions grows.
    // const expenseEntries = useMemo(() => { // Memoize the filtered and sorted expense transactions to prevent unnecessary recalculations on re-renders
    //     return transactions
    //         .filter((transaction) => transaction.category === "Expense")
    //         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    // }, [transactions]);

    const getIncomeTransactions = () => {
        if (transactions.length === 0) return [];

        return transactions
            .filter((transaction) => transaction.category === "Income")
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    };

    const getExpensesTotal = () => {
        if (transactions.length === 0) return 0;
        const expenseTransactions = transactions.filter(transaction => transaction.category === "Expense");
        return expenseTransactions.reduce((total, transaction) => total + transaction.amount, 0);
    };

    const getIncomeTotal = () => {
        if (transactions.length === 0) return 0;
        const incomeTransactions = transactions.filter(transaction => transaction.category === "Income");
        return incomeTransactions.reduce((total, transaction) => total + transaction.amount, 0);
    };

    const getBalance = () => {
        if (transactions.length === 0) return 0;

        // Repeated code to prevent rerendering issues with getIncomeTransactions and getExpenseTransactions
        const incomeEntries = transactions.filter(transaction => transaction.category === "Income");
        const expenseEntries = transactions.filter(transaction => transaction.category === "Expense");
        const totalIncome = incomeEntries.reduce((total, entry) => total + entry.amount, 0);
        const totalExpenses = expenseEntries.reduce((total, entry) => total + entry.amount, 0);
        return totalIncome - totalExpenses;
    };

    const getExpenseTypeTotals = () => {
        const expenseEntries = transactions.filter(transaction => transaction.category === "Expense");
        const totals = {
            foodTotal: 0,
            transportTotal: 0,
            entertainmentTotal: 0,
            utilitiesTotal: 0,
            healthTotal: 0,
            miscellaneousTotal: 0
        };

        expenseEntries.forEach(entry => {
            switch (entry.type) {
                case "Food":
                    totals.foodTotal += entry.amount;
                    break;
                case "Transport":
                    totals.transportTotal += entry.amount;
                    break;
                case "Entertainment":
                    totals.entertainmentTotal += entry.amount;
                    break;
                case "Utilities":
                    totals.utilitiesTotal += entry.amount;
                    break;
                case "Health":
                    totals.healthTotal += entry.amount;
                    break;
                case "Miscellaneous":
                    totals.miscellaneousTotal += entry.amount;
                    break;
                default:
                    break;
            }
        });

        return totals;
    };

    const addTransaction = async (transactionData) => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                }
            });
            const response = await api.post("/transactions",
                {
                    ...transactionData
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            fetchTransactions(); // Fetch the updated list of transactions from the server to ensure state consistency
        } catch (error) {
            console.error("Error adding transaction:", error);
        }
    };

    const deleteTransaction = async (transactionId) => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                }
            });
            const response = await api.delete(`/transactions/${transactionId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Deleted transaction:", response.data);
            fetchTransactions(); // Fetch the updated list of transactions from the server to ensure state consistency
        } catch (error) {
            console.error("Error deleting transaction:", error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return {
        transactions,
        addTransaction,
        getExpenseTransactions,
        deleteTransaction,
        getIncomeTransactions,
        getBalance,
        getExpensesTotal,
        getIncomeTotal,
        getExpenseTypeTotals
    };
}