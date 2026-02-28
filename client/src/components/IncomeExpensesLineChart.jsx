import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { getSampleSevenDayIncomeExpenseData } from '../mocks/incomeExpensesLineChart.mock.js';

const formatAxisTick = (value) => {
    if (value >= 1000) {
        return `$${Math.round(value / 1000)}k`;
    }

    return `$${value}`;
};

const formatTooltipValue = (value, name) => {
    const label = name === 'income' ? 'Income' : 'Expenses';
    return [`$${Number(value).toLocaleString()}`, label];
};

export const IncomeExpensesLineChart = () => {
    const lineData = getSampleSevenDayIncomeExpenseData();

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={lineData}>
                <CartesianGrid strokeDasharray='4 4' vertical={false} opacity={0.25} />
                <XAxis dataKey='day' tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} width={40} tickFormatter={formatAxisTick} />
                <Tooltip formatter={formatTooltipValue} />
                <Line type='monotone' dataKey='income' stroke='#3AFFA9' strokeWidth={3} dot={false} />
                <Line type='monotone' dataKey='expenses' stroke='#4756FF' strokeWidth={3} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};
