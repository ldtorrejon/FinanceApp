import { FinanceDetail } from "../financeDetailComponent/FinanceDetail";
import UserData from "../../../mockData/userData.json";
import { useEffect, useState } from "react";
import { User } from "./FinanceTypes";
import { Nullable } from "../../globalTypes/types";

const getUserData = (): Nullable<User> => {
  try {
    const data = UserData;
    const dateString = data.date_of_birth;

    let date: Date;
    if (dateString) {
      date = new Date(dateString);
    } else {
      throw new Error("No date string here");
    }

    return { ...data, dateOfBirth: date };
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const Finance: React.FC = () => {
  const [userData, setUserData] = useState<Nullable<User>>(null);

  useEffect(() => {
    setUserData(getUserData);
  }, []);

  console.log(userData);
  return (
    <>
      <FinanceDetail
        detail={"sometitle"}
        measureUnit={"€"}
        value={"someValueInAString"}
      />
    </>
  );
};
