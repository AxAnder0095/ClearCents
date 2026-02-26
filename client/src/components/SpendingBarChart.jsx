import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { getSampleSevenDaySpendingData } from '../mocks/spendingBarChart.mock.js';

const formatSpendingTick = (value) => {
    if (value >= 1000) {
        return `$${Math.round(value / 1000)}k`;
    }

    return `$${value}`;
};

const formatSpendingValue = (value) => [`$${Number(value).toLocaleString()}`, 'Spending'];

const formatSpendingLabel = (day, payload) => {
    const point = payload?.[0]?.payload;

    if (!point) {
        return day;
    }

    return point.isToday
        ? `${point.day} (Today) • ${point.dateLabel}`
        : `${point.day} • ${point.dateLabel}`;
};

export const SpendingBarChart = () => {
    const spendingBarData = getSampleSevenDaySpendingData();

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={spendingBarData}>
                <CartesianGrid strokeDasharray='4 4' vertical={false} horizontal={false} opacity={0.25} />
                <XAxis dataKey='day' tickLine={false} axisLine={false} />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    width={40}
                    tickCount={3}
                    tickFormatter={formatSpendingTick}
                />
                <Tooltip
                    cursor={false}
                    formatter={formatSpendingValue}
                    labelFormatter={formatSpendingLabel}
                />
                <Bar dataKey='amount' radius={[6, 6, 0, 0]}>
                    {spendingBarData.map((entry) => (
                        <Cell
                            key={entry.day}
                            fill={entry.isToday ? '#FF124E' : '#4756FF'}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};
