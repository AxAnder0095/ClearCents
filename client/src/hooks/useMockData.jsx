import { entryMock } from "../mocks/entry.mock.js"

export const useMockData = () => {
    const getIncomeEntries = () => {
        const incomeEntries = entryMock.filter(entry => entry.category === "Income")
        return incomeEntries.reverse()
    };

    const getExpenseEntries = () => {
        const expenseEntries = entryMock.filter(entry => entry.category === "Expense")
        return expenseEntries.reverse()
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

    return {
        getIncomeEntries,
        getExpenseEntries,
        getBalance,
        getIncome,
        getExpenses
    };
}