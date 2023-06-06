import React from "react";
import { useState } from "react";
import { postDatanoauth } from "../../utils/fetch";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/modal/Loading";
import Cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("guest");
  const [password, setpassword] = useState("guest");
  const [loginwait, setloginwait] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setloginwait(true);
    const data = {
      username: username,
      password: password,
    };
    const response = await postDatanoauth("/api/auth/login", data);
    if (response.status === 200) {
      console.log(response);
      const expire = new Date();

      // Menambahkan 3 hari ke tanggal sekarang
      expire.setDate(expire.getDate() + 3);
      // nookies.set(null, "token", response.data.data);
      Cookies.set("token", response.data.access_token, {
        secure: true,
        sameSite: "Strict",
        expires: expire
      });
      setloginwait(false);
      navigate("/dashboard");
    } else {
      setloginwait(false);
      alert("Wrong username or passowrd");
    }
  }

  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <div className="min-h-screen flex justify-center items-center">
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-4 cursor-pointer">
              Sign in
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Lanjut aja login, ngapain baca
              <br />
            </p>
          </div>
          <div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="text-xl w-48 px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-2xl"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-3 text-black">
              username: <strong>guest</strong> password: <strong>guest</strong>
            </p>
            <div className="text-center">
              <Link className="text-blue-600 underline" to="/">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      {loginwait ? <Loading /> : ""}
    </main>
  );
}
