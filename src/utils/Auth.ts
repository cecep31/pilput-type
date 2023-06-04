import cookiesjs from "js-cookie";

export function getToken() {
  const token = cookiesjs.get("token");
  
  return token;
}
