import cookiesjs from "js-cookie";
import { userInterface } from "./type";
import { axiosIntence } from './fetch'

export function getToken() {
  const token = cookiesjs.get("token");
  return token;
}

export const getAuth = async () => {
  const auth = await axiosIntence.get("/api/v1/profile");
  return auth.data as userInterface;
};
