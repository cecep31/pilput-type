import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

export async function loader() {
  const token = Cookies.get("token");
  if (!token) {
    return redirect("https://pilput.dev/login");
  }
  return null;
}
