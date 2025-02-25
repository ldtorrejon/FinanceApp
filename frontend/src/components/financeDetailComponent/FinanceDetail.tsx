import React, { useState } from "react";
import types from "../../assets/Finance.module.scss";
import data from "../../../mockData/data.json";
import { UserData } from "./FinanceDetailTypes";

export const FinanceDetail: React.FC = () => {
  const [userData, setUserData] = useState<UserData>(data);

  return (
    <>
      <div className={types.container}>
        <div>Current balance:</div>
        <div className={types.amount}>€{userData.balance}</div>
      </div>
    </>
  );
};
