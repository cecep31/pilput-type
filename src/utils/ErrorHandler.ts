import Cookies from "js-cookie";

export const ErrorHandlerAPI = (error: any) => {
  if (
    error?.response?.data.message === "Invalid or expired JWT" ||
    error?.response?.data?.message === "jwt malformed" ||
    error?.response?.data?.message === "invalid token" ||
    error?.response?.data?.message === "invalid signature" ||
    error?.response?.data?.message === "Authentication invalid" ||
    error?.response?.data?.message === "invalid algorithm"
  ) {
    // Cookies.remove("token");
    console.log("token di hapus");
    
    return error.response;
  }
  console.log("tone ngk di hapus");
  
  return error.response;
};
