import React from "react";
import types from "../../assets/FinanceDetail.module.scss";
import { Props } from "./FinanceDetailTypes";

export const FinanceDetail: React.FC<Props> = ({
  detail,
  measureUnit,
  value,
}) => {
  return (
    <>
      <div className={types.container}>
        <div>{detail}</div>
        <div className={types.amount}>
          {value} {measureUnit}
        </div>
      </div>
    </>
  );
};
