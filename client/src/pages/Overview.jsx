import '../styles/Overview.scss';
import { SpendingBarChart } from '../components/SpendingBarChart.jsx';

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
                            <p>Spending Graph 7 day bar chart</p>
                            <div className='overview-spending-bar-chart'>
                                <SpendingBarChart />
                            </div>
                        </div>
                    </article>






                    <article className='overview-spending-habits'>
                        <p>Spending Habits dual line chart</p>
                    </article>
                    <article className='overview-entries'>
                        <p>Entries</p>
                    </article>
                    <article className='overview-extra'>
                        <p>Extra</p>
                    </article>
                </section>
            </section>
        </div>
    )
};