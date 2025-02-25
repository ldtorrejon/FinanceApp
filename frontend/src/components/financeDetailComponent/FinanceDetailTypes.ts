import { Nullable } from "../../globalTypes/types";

export interface UserData {
  balance: number;
  goal: number;
  income: Nullable<number>;
  user_id: number;
}
