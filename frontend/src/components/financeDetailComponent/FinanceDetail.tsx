import React, { useState } from "react";
import types from "../../assets/Finance.module.scss";
import { Props, Finance } from "./FinanceDetailTypes";
import { Nullable } from "../../globalTypes/types";

export const FinanceDetail: React.FC<Props> = ({
  detail,
  measureUnit,
  value,
}) => {
  const [userData, setUserData] = useState<Nullable<Finance>>(null);

  console.log(detail);
  console.log(measureUnit);
  console.log(value);

  return (
    <>
      <div className={types.container}>
        <div>Current balance:</div>
        <div className={types.amount}>€{userData?.balance}</div>
      </div>
    </>
  );
};
