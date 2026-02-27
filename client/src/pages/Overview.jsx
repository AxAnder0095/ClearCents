import '../styles/Overview.scss';
import { SpendingBarChart } from '../components/SpendingBarChart.jsx';
import { entryMock } from '../mocks/entry.mock.js';
import { FaMoneyCheckAlt } from "react-icons/fa";


export const Overview = () => {
    return (
        <div className="Overview">
            <section className='overview-header'>
                <h1>Overview</h1>
            </section>
            <section className='overview-content'>
                <section className='overview-grid'>
                    <article className='overview-quick-look'>
                        <div className='overview-cards'>
                            <div className='overview-card overview-card--balance'>
                                <p className='card-header'>Total Balance</p>
                                <p className='card-value'>$27,550</p>
                                <p className='card-change'>+5% from last month</p>
                            </div>
                            <div className='overview-card overview-card--income'>
                                <p className='card-header'>Total Income</p>
                                <p className='card-value'>$1,450</p>
                                <p className='card-change'>+5% from last month</p>
                            </div>
                            <div className='overview-card overview-card--expenses'>
                                <p className='card-header'>Total Expenses</p>
                                <p className='card-value'>$29,000</p>
                                <p className='card-change'>+5% from last month</p>
                            </div>
                        </div>
                        <div className='overview-spending-graph'>
                            <div className='overview-spending-header'>
                                <div className='spending-left'>
                                    <span><FaMoneyCheckAlt className='spending-icon' /></span>
                                    <p>Daily Spending</p>
                                </div>
                                <div className='spending-right'>
                                    <p>Add an Expense</p>
                                </div>
                            </div>
                            <div className='overview-spending-bar-chart'>
                                <SpendingBarChart />
                            </div>
                        </div>
                    </article>






                    <article className='overview-spending-habits'>
                        <p><FaMoneyCheckAlt className='spending-icon' /> <span style={{ display: "inline-block", verticalAlign: "middle" }}>Spending Habits</span></p>
                    </article>
                    <article className='overview-entries'>
                        <p className='overview-entries-header'>Entries</p>
                        <div className='overview-entries-table-container'>

                        </div>
                    </article>
                    <article className='overview-extra'>
                        <p>Extra</p>
                    </article>
                </section>
            </section>
        </div>
    )
};