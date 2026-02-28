import { entryMock } from "../mocks/entry.mock.js"

export const useMockData = () => {
    const getIncomeEntries = () => {
        const incomeEntries = entryMock.filter(entry => entry.category === "Income")
        return incomeEntries
    };

    const getExpenseEntries = () => {
        const expenseEntries = entryMock.filter(entry => entry.category === "Expense")
        return expenseEntries
    };

    const getBalance = () => {
        const incomeEntries = getIncomeEntries();
        const expenseEntries = getExpenseEntries();
        const totalIncome = incomeEntries.reduce((total, entry) => total + entry.amount, 0);
        const totalExpenses = expenseEntries.reduce((total, entry) => total + entry.amount, 0);
        return totalIncome - totalExpenses;
    };

    const getIncome = () => {
        const incomeEntries = getIncomeEntries();
        const totalIncome = incomeEntries.reduce((total, entry) => total + entry.amount, 0);
        return totalIncome;
    };

    const getExpenses = () => {
        const expenseEntries = getExpenseEntries();
        const totalExpenses = expenseEntries.reduce((total, entry) => total + entry.amount, 0);
        return totalExpenses;
    };

    const getBalanceRatio = () => {
        const totalIncome = getIncome();
        const totalExpenses = getExpenses();
        return totalExpenses === 0 ? 0 : totalIncome / totalExpenses;
    };

    const getExpenseTypeTotals = () => {
        const expenseEntries = getExpenseEntries();
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

    return {
        getIncomeEntries,
        getExpenseEntries,
        getBalance,
        getIncome,
        getExpenses,
        getBalanceRatio,
        getExpenseTypeTotals
    };
}