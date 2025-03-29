import React from "react";
import styles from "../../assets/scss/FinanceDetail.module.scss";
import { Props } from "./FinanceTopicCardTypes";

export const FinanceTopicCard: React.FC<Props> = ({
  detail,
  measureUnit,
  value,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div>{detail}</div>
        <div className={styles.amount}>
          {value} {measureUnit}
        </div>
      </div>
    </>
  );
};
