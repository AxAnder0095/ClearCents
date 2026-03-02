import '../styles/Overview.scss';
import { SpendingBarChart } from '../components/SpendingBarChart.jsx';
import { IncomeExpensesLineChart } from '../components/IncomeExpensesLineChart.jsx';
import { SpendingRadarChart } from '../components/SpendingRadarChart.jsx';
import { useMockData } from '../hooks/useMockData.jsx';
import { useUserTransactions } from '../hooks/useUserTransactions.jsx';


export const Overview = () => {
    const {
        getIncomeEntries,
        getExpenseEntries,
        getBalance,
        getIncome,
        getExpenses, 
        getBalanceRatio,
        getExpenseTypeTotals
    } = useMockData();
    const { transactions} = useUserTransactions();
    const incomeEntries = getIncomeEntries().reverse(); // Reverse to show most recent first
    const expenseEntries = getExpenseEntries().reverse(); // Reverse to show most recent first
    const expenseTypeTotals = getExpenseTypeTotals();
    
    const expenseTypeEntries = [
        { label: 'Food', amount: expenseTypeTotals.foodTotal },
        { label: 'Transport', amount: expenseTypeTotals.transportTotal },
        { label: 'Entertainment', amount: expenseTypeTotals.entertainmentTotal },
        { label: 'Utilities', amount: expenseTypeTotals.utilitiesTotal },
        { label: 'Health', amount: expenseTypeTotals.healthTotal },
        { label: 'Other', amount: expenseTypeTotals.miscellaneousTotal },
    ];
    const totalDistributionSpend = expenseTypeEntries.reduce((sum, item) => sum + item.amount, 0);
    const topExpenseCategory = expenseTypeEntries.reduce(
        (top, item) => (item.amount > top.amount ? item : top),
        expenseTypeEntries[0]
    );
    const today = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    }).format(new Date());

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
                <div className='overview-header-left'>
                    <h1>Overview</h1>
                    <p>Your financial snapshot at a glance.</p>
                </div>
                <div className='overview-header-right'>
                    <p className='overview-period'>This Month</p>
                    <p className='overview-date'>{today}</p>
                </div>
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
                        <h2 className='overview-distribution-header'>Distribution</h2>
                        <div className='distribution-insights'>
                            <div className='distribution-insight'>
                                <p className='insight-label'>Total Tracked</p>
                                <p className='insight-value'>${totalDistributionSpend.toLocaleString()}</p>
                            </div>
                            <div className='distribution-insight'>
                                <p className='insight-label'>Top Category</p>
                                <p className='insight-value'>
                                    {topExpenseCategory.label} (${topExpenseCategory.amount.toLocaleString()})
                                </p>
                            </div>
                        </div>
                        <div className='spending-radar-chart'>
                            <SpendingRadarChart expenseTypeTotals={expenseTypeTotals} />
                        </div>
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