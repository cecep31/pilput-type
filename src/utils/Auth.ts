import cookiesjs from "js-cookie";
import { axiosIntence } from './fetch'
import { userInterface } from "@/types";

export function getToken() {
  const token = cookiesjs.get("token");
  return token;
}

export const getAuth = async () => {
  const auth = await axiosIntence.get("/api/auth/profile");
  return auth.data as userInterface;
};
