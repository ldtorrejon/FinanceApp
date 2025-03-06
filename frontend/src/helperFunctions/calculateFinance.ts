const calculateFinance = (
  balance: number,
  income: number,
  expenses: number,
  payday: number,
  goal: number,
  deadline: Date
): { balance: number; status: string; spendADay: number; earnADay: number } => {
  const spendADay = spendingPerDay(goal, balance, deadline, payday, income);
  return { balance, status: "stable", spendADay, earnADay: 0 };
};

/**
 * This methods calculates how many a user can spend a day and still achieve it's saving goal. For now it returns -1 if the goal isn't achievable.
 * Doesn't take the expenses in account.
 * @param goal The saving goal.
 * @param balance The current balance of the user.
 * @param deadline The date when the saving goal must be met.
 * @param payday The date that the user gets paid monthly.
 * @param income The monthly income of the user.
 * @returns How much you should spend per day to meet that goals or a -1 if the goals isn't possible, so you would need to earn more money.
 */
const spendingPerDay = (
  goal: number,
  balance: number,
  deadline: Date,
  payday: number,
  income: number
): number => {
  const today = new Date();
  const utcToday = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const utcDeadline = Date.UTC(
    deadline.getFullYear(),
    deadline.getMonth(),
    deadline.getDate()
  );

  const timeLeft = utcDeadline - utcToday;
  const daysLeft =
    timeLeft < 0 ? 0 : Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  const monthsLeft = monthDiff(today, deadline);

  let paydays = 0;
  for (let i = 0; i < monthsLeft; i++) {
    if (i == 0) {
      if (today.getDate() < payday) paydays++;
    } else if (i == monthsLeft - 1) {
      if (deadline.getDate() >= payday) paydays++;
    } else {
      paydays++;
    }
  }

  const res = (balance + paydays * income - goal) / daysLeft;
  return res >= 0 ? res : -1;
};

const monthDiff = (currentDate: Date, deadline: Date): number =>
  Math.max(
    0,
    (deadline.getFullYear() - currentDate.getFullYear()) * 12 -
      currentDate.getMonth() +
      deadline.getMonth()
  );

export default calculateFinance;
