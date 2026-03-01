import { SpendingBarChart } from '../components/SpendingBarChart.jsx';
import '../styles/Expenses.scss';
import { useMockData } from '../hooks/useMockData.jsx';

export const Expenses = () => {

    const {
        getExpenseEntries,
    } = useMockData();
    const expenseEntries = getExpenseEntries().reverse(); // Reverse to show most recent first

    const today = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    }).format(new Date());

    const displayExpenseEntries = () => {
        if (expenseEntries.length === 0) {
            return <p>No expense entries found.</p>;
        }

        return expenseEntries.map((entry) => (
            <div key={entry._id} className='expenses-type'>
                <div>
                    <p className='expenses-name'>{entry.type}</p>
                    <p className='expenses-date'>{entry.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                    <p className='expenses-desc'>{entry.description}</p>
                </div>
                <p className='expenses-amount expenses-amount--expenses'>${entry.amount}</p>
            </div>
        ));
    };

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
                        <button className='add-expense-button'>+ Add Expense</button>
                    </div>
                    <div className='expenses-bar-chart'>
                        <SpendingBarChart />
                    </div>
                    <div className='expenses-list'>
                        {displayExpenseEntries()}
                    </div>
                </article>
            </section>
        </div>
    )
};