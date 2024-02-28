import { Link, Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  HomeIcon,
} from "@heroicons/react/24/outline";
import { axiosIntence } from "../../utils/fetch";
import { mainbaseurl } from "@/utils/getConfig";
import { getToken } from "@/utils/Auth";
import Topbar from "./topbar";

interface YourData {
  first_name: string;
  last_name: string;
  email: string;
  image: string;
}

const Logged = () => {
  const [yourdata, setyourdata] = useState<YourData>({
    email: "Loading...",
    image: "placeholder/spinner.gif",
    first_name: "",
    last_name: "",
  });
  const token = getToken();

  async function getyourdata() {
    try {
      const response = await axiosIntence.get("/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setyourdata(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getyourdata();
  }, []);

  return (
    <main className="relative h-screen overflow-hidden  dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen shadow-lg lg:block w-80   ">
          <div className="flex h-full flex-col flex-1 space-y-1 bg-zinc-800 dark:bg-gray-700 text-gray-200 p-2 text-sm">
            <div className="flex justify-center my-5">
              <Link to={mainbaseurl} className="rounded-xl">
                <img src="/pilput.png" alt="pilput" height="50" width="100" />
              </Link>
            </div>
            <nav className="overflow-y-auto flex flex-1 flex-col border-b border-white/50">
              <Link
                to="/"
                className="flex items-center my-2 justify-start w-full py-3 px-3 transition-colors duration-200 hover:bg-zinc-700 rounded-lg dark:text-white"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                </svg>
                <span className="mx-2 text-gray-200 font-normal">
                  Dashboard
                </span>
              </Link>

              <Link
                to="/user-management"
                className="flex items-center my-2 justify-start w-full py-3 px-3 transition-colors duration-200 hover:bg-zinc-700 rounded-lg dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>

                <span className="mx-2 text-gray-200 font-normal">
                  User management
                </span>
              </Link>
              <Link
                to="/posts"
                className="flex items-center my-2 justify-start w-full py-3 px-3 transition-colors duration-200 hover:bg-zinc-700 rounded-lg dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                </svg>

                <span className="mx-2 text-gray-200 font-normal">Posts</span>
              </Link>
            </nav>

            <a
              href={mainbaseurl}
              className="cursor-pointer flex space-x-2 py-3 items-center px-3 hover:bg-zinc-700 rounded-lg"
            >
              <HomeIcon className="h-4 w-4" />
              <span>Back To Home</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col relative w-full h-screen p-3 bg-gray-200">
          <Topbar yourdata={yourdata}/>
          <div className="h-full mt-2 p-3 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Logged;
