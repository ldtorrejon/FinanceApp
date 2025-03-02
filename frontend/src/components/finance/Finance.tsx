import { FinanceDetail } from "../financeDetailComponent/FinanceDetail";
import userFinanceData from "../../../mockData/userFinanceData.json";
import { useEffect, useState } from "react";
import { UserFinance } from "./FinanceTypes";
import { Nullable } from "../../globalTypes/types";
import { FinanceNotConf } from "../FinanceNotConf/FinanceNotConf";

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

const GetFinanceComponent: React.FC<{ isConfigured: boolean }> = ({
  isConfigured,
}) => {
  if (isConfigured) {
    return <FinanceDetail detail={"balance"} measureUnit={"€"} value={"100"} />;
  } else {
    return <FinanceNotConf />;
  }
};

export const Finance: React.FC = () => {
  const [userFinanceData, setUserFinanceData] =
    useState<Nullable<UserFinance>>(null);

  useEffect(() => {
    setUserFinanceData(reqUserFinanceData);
  }, []);

  console.log(userFinanceData);
  return (
    <>
      <GetFinanceComponent isConfigured={userFinanceData !== null} />
    </>
  );
};
