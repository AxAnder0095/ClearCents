const WEEKDAY_FORMATTER = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
});

const sampleTotalsByDayOffset = {
    0: 1103,
    1: 2890,
    2: 3250,
    3: 3010,
    4: 7120,
    5: 6200,
    6: 5980,
};

export const getSampleSevenDaySpendingData = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sevenDayData = [];

    for (let offset = 6; offset >= 0; offset -= 1) {
        const dayDate = new Date(today);
        dayDate.setDate(today.getDate() - offset);

        sevenDayData.push({
            day: WEEKDAY_FORMATTER.format(dayDate),
            dateLabel: DATE_FORMATTER.format(dayDate),
            amount: sampleTotalsByDayOffset[offset] ?? 0,
            isToday: offset === 0,
        });
    }

    return sevenDayData;
};
