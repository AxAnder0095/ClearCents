import '../styles/Expenses.scss';

export const Expenses = () => {
    const today = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    }).format(new Date());

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
                <p>Expense entries will go here.</p>
            </section>
        </div>
    )
};