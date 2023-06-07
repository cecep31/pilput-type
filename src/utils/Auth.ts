import cookiesjs from "js-cookie";
import { getData } from "./fetch";

export function getToken() {
  const token = cookiesjs.get("token");
  return token;
}

export const getAuth = async () => {
  const auth = await getData("/api/v1/profile");
  return auth.data;
};
