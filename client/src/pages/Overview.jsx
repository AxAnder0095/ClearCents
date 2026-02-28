import '../styles/Overview.scss';
import { SpendingBarChart } from '../components/SpendingBarChart.jsx';
import { IncomeExpensesLineChart } from '../components/IncomeExpensesLineChart.jsx';
import { useMockData } from '../hooks/useMockData.jsx';


export const Overview = () => {
    const {
        getIncomeEntries,
        getExpenseEntries,
        getBalance,
        getIncome,
        getExpenses, 
        getBalanceRatio
    } = useMockData();
    const incomeEntries = getIncomeEntries();
    const expenseEntries = getExpenseEntries();

    const displayIncomeEntries = () => {
        if (incomeEntries.length === 0) {
            return <p>No income entries found.</p>;
        }

        return incomeEntries.map((entry) => (
            <div key={entry._id} className='entry-type'>
                <div>
                    <p className='entry-name'>{entry.type}</p>
                    <p className='entry-date'>{entry.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                </div>
                <p className='entry-amount entry-amount--income'>${entry.amount}</p>
            </div>
        ));
    };

    const displayExpenseEntries = () => {
        if (expenseEntries.length === 0) {
            return <p>No expense entries found.</p>;
        }

        return expenseEntries.map((entry) => (
            <div key={entry._id} className='entry-type'>
                <div>
                    <p className='entry-name'>{entry.type}</p>
                    <p className='entry-date'>{entry.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>

                </div>
                <p className='entry-amount entry-amount--expenses'>${entry.amount}</p>
            </div>
        ));
    };

    return (
        <div className="Overview">
            <section className='overview-header'>
                <h1>Overview</h1>
            </section>
            <section className='overview-content'>
                <section className='overview-grid'>

                    {/* quick look */}
                    <article className='overview-quick-look'>
                        <div className='overview-cards'>
                            <div className='overview-card overview-card--balance'>
                                <p className='card-header'>Total Balance</p>
                                <p className='card-value'>${getBalance()}</p>
                                <p className='card-change'>{`${getBalanceRatio().toFixed(2)}% remaining`}</p>
                            </div>
                            <div className='overview-card overview-card--income'>
                                <p className='card-header'>Total Income</p>
                                <p className='card-value'>${getIncome()}</p>
                                <p className='card-change'>+5% from last month</p>
                            </div>
                            <div className='overview-card overview-card--expenses'>
                                <p className='card-header'>Total Expenses</p>
                                <p className='card-value'>${getExpenses()}</p>
                                <p className='card-change'>+5% from last month</p>
                            </div>
                        </div>
                        <div className='overview-spending-graph'>
                            <div className='overview-spending-header'>
                                <div className='spending-left'>
                                    <p>Daily Spending</p>
                                </div>
                                <div className='spending-right'>
                                    <p>Add an Expense</p>
                                </div>
                            </div>
                            <div className='overview-spending-line-chart'>
                                <IncomeExpensesLineChart />
                            </div>
                        </div>
                    </article>

                    {/* 2 line chart */}
                    <article className='overview-spending-habits'>
                        <h2 className='spending-habits-header'>Spending Habits</h2>
                        <div className='spending-bar-chart'>
                            <SpendingBarChart />
                        </div>
                    </article>


                    {/* distribution */}
                    <article className='overview-distribution'>
                        <p className='overview-distribution-header'>Distribution</p>

                    </article>

                    {/* entries */}
                    <article className='overview-entries'>
                        <div className='entry-box'>
                            <h2 className='entry-header'>Income</h2>
                            <div className='entry-types'>
                                {displayIncomeEntries()}
                            </div>
                        </div>
                        <div className='entry-box'>
                            <h2 className='entry-header'>Expenses</h2>
                            <div className='entry-types'>
                                {displayExpenseEntries()}
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        </div>
    )
};