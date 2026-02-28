import {
    buildSevenDayBaseData,
    buildSevenDayTotalsByDate,
    getSevenDayWindowFromEntries,
} from './chartData.utils.js';

export const getSampleSevenDayIncomeExpenseData = () => {
    const sevenDayWindow = getSevenDayWindowFromEntries();
    const baseData = buildSevenDayBaseData(sevenDayWindow);
    const totalsByDate = buildSevenDayTotalsByDate(undefined, sevenDayWindow);

    return baseData.map((dayPoint) => ({
        day: dayPoint.day,
        income: totalsByDate[dayPoint.dateKey]?.income ?? 0,
        expenses: totalsByDate[dayPoint.dateKey]?.expenses ?? 0,
    }));
};
