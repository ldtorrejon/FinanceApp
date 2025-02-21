import React from "react";
import types from "../../assets/Finance.module.scss";

export const FinanceDetail: React.FC = () => {
  return (
    <>
      <div className={types.container}>
        <div>Current balance:</div>
        <div className={types.amount}>€150</div>
      </div>
    </>
  );
};
