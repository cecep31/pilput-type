import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getProfilePicture } from "@/utils/getImage";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { domain, mainbaseurl } from "@/utils/getConfig";

interface YourData {
  first_name: string;
  last_name: string;
  email: string;
  image: string;
}

const Topbar = ({ yourdata }: { yourdata: YourData }) => {
  function logout() {
    Cookies.remove("token", { path: "/", domain: `.${domain}` });
    window.location.href = mainbaseurl;
  }
  return (
    <header className="w-full shadow-md bg-white dark:bg-gray-700 items-center h-16 rounded-md z-20">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center pl-1 flex w-full sm:pr-2 sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-full">
            <div className="flex items-center">{yourdata.first_name}</div>
          </div>
          <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <DropdownMenu>
              <DropdownMenuTrigger>
                {yourdata.image ? (
                  <img
                    alt="profil"
                    width={50}
                    height={50}
                    src={getProfilePicture(yourdata.image)}
                    className="mx-auto object-cover rounded-full h-10 w-10"
                  />
                ) : (
                  <img
                    alt="profil"
                    width={50}
                    height={50}
                    src="https://placeimg.com/640/480/any"
                    className="mx-auto object-cover rounded-full h-10 w-10"
                  />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-9 w-[200px]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile" className="py-1 w-full flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/" className="py-1 w-full flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    Go Home Page
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button
                    className="py-1 w-full flex gap-1 items-center"
                    onClick={logout}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
