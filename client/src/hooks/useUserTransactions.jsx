import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { api } from "../api/api.js"

export const useUserTransactions = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [transactions, setTransactions] = useState([]);

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
            console.log("Fetched transactions:", response.data);
            setTransactions(response.data);
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };


    useEffect(() => {
        fetchTransactions();
    }, []);

    return transactions;
}