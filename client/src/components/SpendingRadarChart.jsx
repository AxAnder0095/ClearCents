import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

const formatExpenseRadarValue = (value) => [
    `$${Number(value).toLocaleString()}`,
    'Spent',
];

export const SpendingRadarChart = ({ expenseTypeTotals }) => {
    const radarData = [
        { subject: 'Food', amount: expenseTypeTotals.foodTotal },
        { subject: 'Transport', amount: expenseTypeTotals.transportTotal },
        { subject: 'Entertainment', amount: expenseTypeTotals.entertainmentTotal },
        { subject: 'Utilities', amount: expenseTypeTotals.utilitiesTotal },
        { subject: 'Health', amount: expenseTypeTotals.healthTotal },
        { subject: 'Other', amount: expenseTypeTotals.miscellaneousTotal },
    ];

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <RadarChart data={radarData} outerRadius='70%'>
                <PolarGrid stroke='rgba(255, 255, 255, 0.25)' />
                <PolarAngleAxis
                    dataKey='subject'
                    tick={{ fill: '#D8D8D8', fontSize: 12 }}
                />
                <Tooltip formatter={formatExpenseRadarValue} cursor={false} />
                <Radar
                    name='Expenses'
                    dataKey='amount'
                    stroke='#3AFFA9'
                    fill='#3AFFA9'
                    fillOpacity={0.3}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};
