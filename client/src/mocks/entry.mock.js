

// 6 types for Expenses: Food, Transport, Entertainment, Utilities, Health, Miscellaneous
// 6 types for Income: Salary, Investment, Gift, Bonus, Dividends, Miscellaneous

// use this for when you are using real data. will show mon, tue, wed, etc. instead of the date
// const isoString = "2026-02-24T22:25:36.712+00:00";
// const date = new Date(isoString);

// const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
// console.log(weekday); // "Tue"

export const entryMock = [
  { _id: 1, category: "Expense", type: "Miscellaneous", amount: 275, description: "Miscellaneous expense", date: new Date("2026-01-20T10:00:00.000+00:00") },
  { _id: 2, category: "Expense", type: "Transport", amount: 160, description: "Transport expense", date: new Date("2026-01-21T10:00:00.000+00:00") },
  { _id: 3, category: "Expense", type: "Entertainment", amount: 210, description: "Entertainment expense", date: new Date("2026-01-22T10:00:00.000+00:00") },
  { _id: 4, category: "Expense", type: "Utilities", amount: 720, description: "Utilities expense", date: new Date("2026-01-23T10:00:00.000+00:00") },
  { _id: 5, category: "Expense", type: "Food", amount: 85, description: "Food expense", date: new Date("2026-01-24T10:00:00.000+00:00") },
  { _id: 6, category: "Expense", type: "Miscellaneous", amount: 390, description: "Miscellaneous expense", date: new Date("2026-01-25T10:00:00.000+00:00") },
  { _id: 7, category: "Expense", type: "Health", amount: 240, description: "Health expense", date: new Date("2026-01-26T10:00:00.000+00:00") },
  { _id: 8, category: "Expense", type: "Transport", amount: 175, description: "Transport expense", date: new Date("2026-01-27T10:00:00.000+00:00") },
  { _id: 9, category: "Expense", type: "Food", amount: 130, description: "Food expense", date: new Date("2026-01-28T10:00:00.000+00:00") },
  { _id: 10, category: "Expense", type: "Utilities", amount: 500, description: "Utilities expense", date: new Date("2026-01-29T10:00:00.000+00:00") },
  { _id: 11, category: "Expense", type: "Entertainment", amount: 150, description: "Entertainment expense", date: new Date("2026-01-30T10:00:00.000+00:00") },
  { _id: 12, category: "Expense", type: "Health", amount: 600, description: "Health expense", date: new Date("2026-01-31T10:00:00.000+00:00") },
  { _id: 13, category: "Expense", type: "Miscellaneous", amount: 260, description: "Miscellaneous expense", date: new Date("2026-02-01T10:00:00.000+00:00") },
  { _id: 14, category: "Expense", type: "Transport", amount: 140, description: "Transport expense", date: new Date("2026-02-02T10:00:00.000+00:00") },
  { _id: 15, category: "Expense", type: "Food", amount: 95, description: "Food expense", date: new Date("2026-02-03T10:00:00.000+00:00") },
  { _id: 16, category: "Expense", type: "Utilities", amount: 410, description: "Utilities expense", date: new Date("2026-02-04T10:00:00.000+00:00") },
  { _id: 17, category: "Expense", type: "Entertainment", amount: 320, description: "Entertainment expense", date: new Date("2026-02-05T10:00:00.000+00:00") },
  { _id: 18, category: "Expense", type: "Health", amount: 180, description: "Health expense", date: new Date("2026-02-06T10:00:00.000+00:00") },
  { _id: 19, category: "Expense", type: "Transport", amount: 220, description: "Transport expense", date: new Date("2026-02-07T10:00:00.000+00:00") },
  { _id: 20, category: "Expense", type: "Food", amount: 75, description: "Food expense", date: new Date("2026-02-08T10:00:00.000+00:00") },

  { _id: 21, category: "Income", type: "Miscellaneous", amount: 1200, description: "Miscellaneous income", date: new Date("2026-02-09T10:00:00.000+00:00") },
  { _id: 22, category: "Expense", type: "Miscellaneous", amount: 560, description: "Miscellaneous expense", date: new Date("2026-02-10T10:00:00.000+00:00") },
  { _id: 23, category: "Expense", type: "Utilities", amount: 50, description: "Utilities expense", date: new Date("2026-02-11T10:00:00.000+00:00") },
  { _id: 24, category: "Income", type: "Dividends", amount: 400, description: "Dividends income", date: new Date("2026-02-12T10:00:00.000+00:00") },
  { _id: 25, category: "Expense", type: "Utilities", amount: 1200, description: "Utilities expense", date: new Date("2026-02-13T10:00:00.000+00:00") },
  { _id: 26, category: "Income", type: "Salary", amount: 3000, description: "Salary income", date: new Date("2026-02-14T10:00:00.000+00:00") },
  { _id: 27, category: "Income", type: "Bonus", amount: 1500, description: "Bonus income", date: new Date("2026-02-15T10:00:00.000+00:00") },
  { _id: 28, category: "Expense", type: "Miscellaneous", amount: 350, description: "Miscellaneous expense", date: new Date("2026-02-16T10:00:00.000+00:00") },
  { _id: 29, category: "Expense", type: "Entertainment", amount: 600, description: "Entertainment expense", date: new Date("2026-02-17T10:00:00.000+00:00") },
  { _id: 30, category: "Income", type: "Gift", amount: 300, description: "Gift income", date: new Date("2026-02-18T10:00:00.000+00:00") },
  { _id: 31, category: "Expense", type: "Miscellaneous", amount: 400, description: "Miscellaneous expense", date: new Date("2026-02-19T10:00:00.000+00:00") },
  { _id: 32, category: "Expense", type: "Health", amount: 250, description: "Health expense", date: new Date("2026-02-20T10:00:00.000+00:00") },
  { _id: 33, category: "Income", type: "Investment", amount: 1200, description: "Investment income", date: new Date("2026-02-21T10:00:00.000+00:00") },
  { _id: 34, category: "Expense", type: "Utilities", amount: 300, description: "Utilities expense", date: new Date("2026-02-22T10:00:00.000+00:00") },
  { _id: 35, category: "Expense", type: "Entertainment", amount: 100, description: "Entertainment expense", date: new Date("2026-02-23T10:00:00.000+00:00") },
  { _id: 36, category: "Income", type: "Miscellaneous", amount: 800, description: "Miscellaneous income", date: new Date("2026-02-24T10:00:00.000+00:00") },
  { _id: 37, category: "Expense", type: "Transport", amount: 150, description: "Transport expense", date: new Date("2026-02-25T10:00:00.000+00:00") },
  { _id: 38, category: "Expense", type: "Food", amount: 200, description: "Arby's $10 Box", date: new Date("2026-02-28T10:00:00.000+00:00") },
  { _id: 39, category: "Income", type: "Miscellaneous", amount: 500, description: "Miscellaneous income", date: new Date("2026-02-27T10:00:00.000+00:00") },
  { _id: 40, category: "Income", type: "Dividends", amount: 1000, description: "Dividends income", date: new Date("2026-02-28T10:00:00.000+00:00") },
  { _id: 41, category: "Expense", type: "Food", amount: 33, description: "Papa John's", date: new Date("2026-03-01T10:00:00.000+00:00") },

];