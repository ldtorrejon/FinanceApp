import { FinanceDetail } from "../financeDetailComponent/FinanceDetail";
import userFinanceData from "../../../mockData/userFinanceData.json";
import { JSX, useEffect, useState } from "react";
import { UserFinance } from "./FinanceTypes";
import { Nullable } from "../../globalTypes/types";
import { FinanceNotConf } from "../FinanceNotConf/FinanceNotConf";
import { BALANCE, GOAL, PER_DAY, SPEND, STATUS } from "../../assets/text/en-us";
import calculateFinance from "../../helperFunctions/calculateFinance";
/**
 * Queries the user's financial data.
 *
 * @returns The user's financial data and null if it isn't configured.
 */
const reqUserFinanceData = (): Nullable<UserFinance> => {
  try {
    const data = userFinanceData;
    let date: Date;
    if (data.deadline) {
      date = new Date(data.deadline);
    } else {
      throw new Error("user hasn't configured yet it's finance data");
    }
    return { ...data, deadline: date };
  } catch (e) {
    console.error(e);
    return null;
  }
};

/**
 * Figures out if the user has it's finance data configured and returns the according component(s).
 * @param userFinanceData The user's finance data.
 * @returns An array of JSX element with either FinanceDetails or FinanceNotConf.
 */
const getFinanceChildComponent = (
  userFinanceData: Nullable<UserFinance>
): Array<JSX.Element> => {
  const financeDetails: Array<JSX.Element> = [];

  // All are checked so that calculcateFinance doesn't cry about null possibility. Must find cleaner solution.
  if (
    !userFinanceData ||
    !userFinanceData.balance ||
    !userFinanceData.income ||
    !userFinanceData.expenses ||
    !userFinanceData.payday ||
    !userFinanceData.goal ||
    !userFinanceData.deadline
  ) {
    financeDetails.push(<FinanceNotConf key="notConfigured" />);
    return financeDetails;
  }

  const finance = calculateFinance(
    userFinanceData.balance,
    userFinanceData.income,
    userFinanceData.expenses,
    userFinanceData.payday,
    userFinanceData.goal,
    userFinanceData.deadline
  );

  console.log(finance);

  const balanceString: string = userFinanceData.balance.toString();
  financeDetails.push(
    <FinanceDetail
      key="balance"
      detail={BALANCE}
      measureUnit={"€"}
      value={balanceString}
    />
  );

  financeDetails.push(
    <FinanceDetail
      key="goal"
      detail={GOAL}
      measureUnit={"€"}
      value={userFinanceData.goal.toString()}
    />
  );

  financeDetails.push(
    <FinanceDetail key="status" detail={STATUS} value={finance.status} />
  );
  financeDetails.push(
    <FinanceDetail
      key="spend"
      detail={`${SPEND} ${PER_DAY}`}
      measureUnit={"€"}
      value={finance.spendADay.toString()}
    />
  );

  return financeDetails;
};

export const Finance: React.FC = () => {
  const [userFinanceData, setUserFinanceData] =
    useState<Nullable<UserFinance>>(null);

  useEffect(() => {
    setUserFinanceData(reqUserFinanceData);
  }, []);

  return (
    <>
      {getFinanceChildComponent(userFinanceData).map(
        (jsxElement) => jsxElement
      )}
    </>
  );
};
