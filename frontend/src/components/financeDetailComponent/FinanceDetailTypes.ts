import { Nullable } from "../../globalTypes/types";

export type Props = {
  detail: string;
  measureUnit: Nullable<string>;
  value: Nullable<string>;
};

export interface Finance {
  balance: Nullable<number>;
  goal: Nullable<number>;
  income: Nullable<number>;
  user_id: number;
}
