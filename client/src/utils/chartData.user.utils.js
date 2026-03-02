const WEEKDAY_FORMATTER = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
});

const getEntryDate = (entry) => entry?.date ?? entry?.createdAt;

const getStartOfDay = (date) => {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    return normalizedDate;
};

const toDateKey = (date) => getStartOfDay(date).toISOString().split('T')[0];

export const getSevenDayWindowFromEntries = (entries = []) => {
    if (entries.length === 0) {
        const today = getStartOfDay(new Date());
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 6);
        return { startDate, anchorDate: today };
    }

    const latestDate = entries.reduce((latest, entry) => {
        const entryDate = new Date(getEntryDate(entry));

        if (Number.isNaN(entryDate.getTime())) {
            return latest;
        }

        return entryDate > latest ? entryDate : latest;
    }, new Date(getEntryDate(entries[0])));

    const anchorDate = getStartOfDay(latestDate);
    const startDate = new Date(anchorDate);
    startDate.setDate(anchorDate.getDate() - 6);

    return { startDate, anchorDate };
};

export const buildSevenDayBaseData = ({ anchorDate }) => {
    const sevenDayData = [];

    for (let offset = 6; offset >= 0; offset -= 1) {
        const dayDate = new Date(anchorDate);
        dayDate.setDate(anchorDate.getDate() - offset);

        sevenDayData.push({
            day: WEEKDAY_FORMATTER.format(dayDate),
            dateLabel: DATE_FORMATTER.format(dayDate),
            dateKey: toDateKey(dayDate),
            isToday: offset === 0,
        });
    }

    return sevenDayData;
};

export const buildSevenDayTotalsByDate = (entries = [], { startDate, anchorDate }) => {
    return entries.reduce((accumulator, entry) => {
        const rawDate = getEntryDate(entry);

        if (!rawDate) {
            return accumulator;
        }

        const entryDay = getStartOfDay(rawDate);

        if (Number.isNaN(entryDay.getTime()) || entryDay < startDate || entryDay > anchorDate) {
            return accumulator;
        }

        const dateKey = toDateKey(entryDay);

        if (!accumulator[dateKey]) {
            accumulator[dateKey] = { income: 0, expenses: 0 };
        }

        if (entry.category === 'Income') {
            accumulator[dateKey].income += entry.amount;
        }

        if (entry.category === 'Expense') {
            accumulator[dateKey].expenses += entry.amount;
        }

        return accumulator;
    }, {});
};
