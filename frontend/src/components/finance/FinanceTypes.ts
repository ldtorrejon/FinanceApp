import { Nullable } from "../../globalTypes/types";

export interface UserFinance {
  balance: Nullable<number>;
  income: Nullable<number>;
  goal: Nullable<number>;
  deadline: Nullable<Date>;
  userId: number;
}
