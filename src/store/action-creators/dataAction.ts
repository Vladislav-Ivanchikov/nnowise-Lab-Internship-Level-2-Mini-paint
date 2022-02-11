import { DataTypes, UsersDataType } from "../../types/data";

export const fetchUsersPicture = (data: UsersDataType[]) => {
  return { type: DataTypes.FETCH_USERS, payload: data };
};

export const findReq = (findReq: string) => {
  return { type: DataTypes.FIND_USERS, payload: findReq }
}

export const filtredUsers = (arr: UsersDataType[], findReq: string) => {
  return { type: DataTypes.FILTRED_USERS, payload: arr.filter((item) => item.username === findReq) }
}
