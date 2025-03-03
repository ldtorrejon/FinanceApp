const calculateFinance = (
  balance: number,
  income: number,
  goal: number,
  deadline: Date
): { status: string; spendADay: number; earnADay: number } => {
  const spendADay = spendingPerDay(goal, balance, deadline);
  return { status: "stable", spendADay, earnADay: 0 };
};

const spendingPerDay = (
  goal: number,
  balance: number,
  deadline: Date
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

  const timeDiff = Math.abs(utcDeadline - utcToday);
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // TODO still need to calulcate based on income, balance, expenses and the amount of days left to reach goal.

  // Returning stupid value which is how much he needs to earn per day to reach that goal.
  return Math.round((goal - balance) / daysDiff);
};

export default calculateFinance;
