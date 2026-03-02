import { SpendingBarChart } from '../components/SpendingBarChart.jsx';
import { useUserTransactions } from '../hooks/useUserTransactions.jsx';
import { useState } from 'react';
import '../styles/Expenses.scss';

export const Expenses = () => {
    const { addTransaction, expenseTransactions, deleteTransaction} = useUserTransactions();
    const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
    const [showEditExpenseForm, setShowEditExpenseForm] = useState(false);
    const MAX_DESCRIPTION_LENGTH = 35; 
    const expenseEntries = [...expenseTransactions].reverse(); // Reverse to show most recent first

    const today = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    }).format(new Date());

    const formatEntryDate = (value) => {
        const parsedDate = new Date(value);

        if (Number.isNaN(parsedDate.getTime())) {
            return 'Invalid date';
        }

        return parsedDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    const displayExpenseEntries = () => {
        return expenseEntries.map((entry) => (
            <div key={entry._id} className='expenses-type'>
                <div>
                    <p className='expenses-date'>
                        {formatEntryDate(entry.createdAt)}
                        <button onClick={() => handleDeleteExpense(entry._id)} className='delete-expense'>Delete</button>
                        <button className='edit-expense' onClick={() => setShowEditExpenseForm(true)}>Edit</button>
                    </p>
                    <p className='expenses-name'>{entry.type}</p>
                    <p className='expenses-desc'>{entry.description}</p>
                </div>
                <p className='expenses-amount expenses-amount--expenses'>${entry.amount}</p>
            </div>
        ));
    };

    const handleAddExpense = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTransaction = {
            category: "Expense", // Assuming we're adding an expense, this could be dynamic based on the form input
            type: formData.get('type'),
            amount: parseFloat(formData.get('amount')),
            description: formData.get('description'),
            date: new Date(formData.get('date'))
        };
        addTransaction(newTransaction);
        setShowAddExpenseForm(false);
    };

    const handleDeleteExpense = (id) => {
        deleteTransaction(id);
    }

    return (
        <div className="Expenses">
            <section className='expenses-header'>
                <div className='expenses-header-left'>
                    <h1>Expenses</h1>
                    <p>Track your spending and stay on top of your finances.</p>
                </div>
                <div className='expenses-header-right'>
                    <p className='expenses-period'>This Month</p>
                    <p className='expenses-date'>{today}</p>
                </div>
            </section>
            <section className='expenses-content'>
                <article className='expenses-list-container'>
                    <div className='expenses-add-expense'>
                        <button className='add-expense-button' onClick={() => setShowAddExpenseForm(true)}>+ Add Expense</button>
                    </div>
                    <div className='expenses-bar-chart'>
                        <SpendingBarChart />
                    </div>
                    <div className='expenses-list'>
                        {expenseEntries && expenseEntries.length > 0 ? displayExpenseEntries() : <p>No expense entries found.</p>}
                    </div>
                    {showAddExpenseForm && (
                        <div className='expenses-add-expense-form-container'>
                            <div><button onClick={() => setShowAddExpenseForm(false)}>Cancel</button></div>
                            <form className='expenses-add-expense-form' onSubmit={handleAddExpense}>
                                <select name='type' defaultValue=''>
                                    <option value='' disabled>Expense Name</option>
                                    <option value='Food'>Food</option>
                                    <option value='Transport'>Transport</option>
                                    <option value='Entertainment'>Entertainment</option>
                                    <option value='Utilities'>Utilities</option>
                                    <option value='Health'>Health</option>
                                    <option value='Miscellaneous'>Miscellaneous</option>
                                </select>
                                <input type="text" name='description' placeholder='Description' maxLength={MAX_DESCRIPTION_LENGTH} />
                                <input type="number" name='amount' placeholder='Amount' />
                                <input type="date" name='date' placeholder='Date' />
                                <button className='submit-expense-button' type='submit'>Submit</button>
                            </form>
                        </div>)}
                    {showEditExpenseForm && (
                        <div className='expenses-edit-expense-form-container'>
                            <div><button onClick={() => setShowEditExpenseForm(false)}>Cancel</button></div>
                            <form className='expenses-edit-expense-form'></form>
                                <select name='type' defaultValue=''>
                                    <option value='' disabled>Expense Name</option>
                                    <option value='Food'>Food</option>
                                    <option value='Transport'>Transport</option>
                                    <option value='Entertainment'>Entertainment</option>
                                    <option value='Utilities'>Utilities</option>
                                    <option value='Health'>Health</option>
                                    <option value='Miscellaneous'>Miscellaneous</option>
                                </select>
                                <input type="text" name='description' placeholder='Description' maxLength={MAX_DESCRIPTION_LENGTH} />
                                <input type="number" name='amount' placeholder='Amount' />
                                <input type="date" name='date' placeholder='Date' />
                                <button className='submit-expense-button' type='submit'>Submit</button>
                        </div>)}
                </article>
            </section>
        </div>
    )
};