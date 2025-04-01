import { FinanceTopicCard } from "../financeTopicCard/FinanceTopicCard";
import { JSX, useEffect, useState } from "react";
import { FinanceData } from "./FinanceOverviewTypes";
import { Nullable } from "../../globalTypes/types";
import { FinanceNotConf } from "../FinanceNotConf/FinanceNotConf";
import {
  BALANCE,
  GOAL,
  PER_DAY,
  SPEND,
  STATUS,
} from "../../constants/text/en-us";
import mockData from "../../../mockData/userFinanceData.json";

import styles from "../../assets/scss/Finance.module.scss";

/**
 * Mimicks a call to the backend with setTimeout and returns a promise.
 * @returns a promise which can either be null or an obj of type FinanceData
 */
const reqFinanceData = (): Promise<Nullable<FinanceData>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data: FinanceData = mockData;
      if (data) resolve(data);
      reject(null);
    }, 1000);
  });
};

/**
 * Figures out if the user has it's finance data configured and returns the according component(s).
 * @param financeData The user's finance data.
 * @returns An array of JSX element(s) with either FinanceTopicCards or FinanceNotConf.
 */
const getFinanceTopicCards = (
  financeData: Nullable<FinanceData>
): Array<JSX.Element> => {
  const jsxChildren: Array<JSX.Element> = [];
  if (!financeData) {
    jsxChildren.push(<FinanceNotConf key="notConfigured" />);
    return jsxChildren;
  }

  const balanceString: string = financeData.balance.toString();
  jsxChildren.push(
    <FinanceTopicCard
      key="balance"
      detail={BALANCE}
      measureUnit={"€"}
      value={balanceString}
    />
  );

  jsxChildren.push(
    <FinanceTopicCard
      key="goal"
      detail={GOAL}
      measureUnit={"€"}
      value={financeData.saving_goal.toString()}
    />
  );

  jsxChildren.push(
    <FinanceTopicCard key="status" detail={STATUS} value={"good"} />
  );
  jsxChildren.push(
    <FinanceTopicCard
      key="spend"
      detail={`${SPEND} ${PER_DAY}`}
      measureUnit={"€"}
      value={"5"}
    />
  );

  return jsxChildren;
};

export const FinanceOverview: React.FC = () => {
  const [financeData, setFinanceData] = useState<Nullable<FinanceData>>(null);

  useEffect(() => {
    reqFinanceData().then((data) => {
      if (data) setFinanceData(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {getFinanceTopicCards(financeData).map((jsxElement) => jsxElement)}
    </div>
  );
};
