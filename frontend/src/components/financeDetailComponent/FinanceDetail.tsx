import React from "react";
import "../../assets/FinanceDetailStyles.scss";

export const FinanceDetail: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="title">Current balance:</div>
        <div className="amount">€150</div>
      </div>
    </>
  );
};
