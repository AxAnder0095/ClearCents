import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { api } from "../api/api.js"
// import { set } from "mongoose";

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

    const getExpenseTransactions = async () => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                }
            });
            const response = await api.get("/transactions/expenses", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setExpenseTransactions(response.data);
        } catch (error) {
            console.error("Error fetching expense transactions:", error);
        }
    };

    const getIncomeTransactions = async () => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                }
            });
            const response = await api.get("/transactions/income", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setIncomeTransactions(response.data);
        } catch (error) {
            console.error("Error fetching income transactions:", error);
        }
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
            getExpenseTransactions(); // Fetch the updated list of expense transactions from the server to ensure state consistency
            getIncomeTransactions(); // Fetch the updated list of income transactions from the server to ensure state consistency
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
            getExpenseTransactions(); // Fetch the updated list of expense transactions from the server to ensure state consistency
            getIncomeTransactions(); // Fetch the updated list of income transactions from the server to ensure state consistency
        } catch (error) {
            console.error("Error deleting transaction:", error);
        }
    };

    useEffect(() => {
        fetchTransactions();
        getExpenseTransactions();
        getIncomeTransactions();
    }, []);

    return {
        transactions,
        addTransaction,
        expenseTransactions,
        getExpenseTransactions,
        deleteTransaction,
        incomeTransactions,
        getIncomeTransactions
    };
}