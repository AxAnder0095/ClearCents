import '../styles/Income.scss';

export const Income = () => {
    const today = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    }).format(new Date());

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
                <p>Income entries will go here.</p>
            </section>
        </div>
    )
};