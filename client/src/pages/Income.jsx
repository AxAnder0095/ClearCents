import { SpendingBarChart } from '../components/SpendingBarChart.jsx';
import { useMockData } from '../hooks/useMockData.jsx';
import { useUserTransactions } from '../hooks/useUserTransactions.jsx';
import { useState } from 'react';
import '../styles/Income.scss';

export const Income = () => {
    const { addTransaction, incomeTransactions, deleteTransaction } = useUserTransactions();
    const [showAddIncomeForm, setShowAddIncomeForm] = useState(false);
    const [showEditIncomeForm, setShowEditIncomeForm] = useState(false);
    const MAX_DESCRIPTION_LENGTH = 35;

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

    const displayIncomeEntries = () => {
        return incomeTransactions.map((entry) => (
            <div key={entry._id} className='income-type'>
                <div>
                    <p className='income-date'>
                        {formatEntryDate(entry.createdAt)}
                        <button onClick={() => handleDeleteIncome(entry._id)} className='delete-income'>Delete</button>
                        <button className='edit-income' onClick={() => setShowEditIncomeForm(true)}>Edit</button>
                    </p>
                    <p className='income-name'>{entry.type}</p>
                    <p className='income-desc'>{entry.description}</p>
                </div>
                <p className='income-amount income-amount--income'>${entry.amount}</p>
            </div>
        ));
    };

    const handleAddIncome = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTransaction = {
            category: "Income", // Assuming we're adding an income, this could be dynamic based on the form input
            type: formData.get('type'),
            amount: parseFloat(formData.get('amount')),
            description: formData.get('description'),
            date: new Date(formData.get('date'))
        };
        addTransaction(newTransaction);
        setShowAddIncomeForm(false);
    };

    const handleDeleteIncome = (id) => {
        deleteTransaction(id);
    };

    return (
        <div className="Income">
            <section className='income-header'>
                <div className='income-header-left'>
                    <h1>Income</h1>
                    <p>Track your income and stay on top of your finances.</p>
                </div>
                <div className='income-header-right'>
                    <p className='income-period'>This Month</p>
                    <p className='income-date'>{today}</p>
                </div>
            </section>
            <section className='income-content'>
                <article className='income-list-container'>
                    <div className='income-add-income'>
                        <button className='add-income-button' onClick={() => setShowAddIncomeForm(true)}>+ Add Income</button>
                    </div>
                    <div className='income-bar-chart'>
                        <SpendingBarChart />
                    </div>
                    <div className='income-list'>
                        {incomeTransactions && incomeTransactions.length > 0 ? displayIncomeEntries() : <p>No income entries found.</p>}
                    </div>
                    {showAddIncomeForm && (
                        <div className='income-add-income-form-container'>
                            <div><button onClick={() => setShowAddIncomeForm(false)}>Cancel</button></div>
                            <form className='income-add-income-form' onSubmit={handleAddIncome}>
                                <select name='type' defaultValue=''>
                                    <option value='' disabled>Income Name</option>
                                    <option value='Salary'>Salary</option>
                                    <option value='Investments'>Investments</option>
                                    <option value='Gifts'>Gifts</option>
                                    <option value='Bonux'>Bonux</option>
                                    <option value='Dividends'>Dividends</option>
                                    <option value='Miscellaneous'>Miscellaneous</option>
                                </select>
                                <input type="text" name='description' placeholder='Description' maxLength={MAX_DESCRIPTION_LENGTH} />
                                <input type="number" name='amount' placeholder='Amount' />
                                <input type="date" name='date' placeholder='Date' />
                                <button className='submit-income-button' type='submit'>Submit</button>
                            </form>
                        </div>)}
                    {showEditIncomeForm && (
                        <div className='income-edit-income-form-container'>
                            <div><button onClick={() => setShowEditIncomeForm(false)}>Cancel</button></div>
                            <form className='income-edit-income-form'></form>
                            <select name='type' defaultValue=''>
                                <option value='' disabled>Income Name</option>
                                <option value='Salary'>Salary</option>
                                <option value='Freelance'>Freelance</option>
                                <option value='Investments'>Investments</option>
                                <option value='Gifts'>Gifts</option>
                                <option value='Bonux'>Bonux</option>
                                <option value='Dividends'>Dividends</option>
                                <option value='Miscellaneous'>Miscellaneous</option>
                            </select>
                            <input type="text" name='description' placeholder='Description' maxLength={MAX_DESCRIPTION_LENGTH} />
                            <input type="number" name='amount' placeholder='Amount' />
                            <input type="date" name='date' placeholder='Date' />
                            <button className='submit-income-button' type='submit'>Submit</button>
                        </div>)}
                </article>
            </section>
        </div>
    );
};