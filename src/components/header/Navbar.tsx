import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blogs" },
  { name: "Forum", href: "/chat" },
  { name: "dashboard", href: "/dashboard" },
];

export default function Navigation() {
  return (
    <header className="z-30 flex items-center w-full sm:h-24">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <div className="flex items-center text-3xl font-black text-gray-800 dark:text-white">
          <EnvelopeIcon className="h-6" />
          <span className="mt-1 ml-3 text-xs">cecepjanuardi31@gmail.com</span>
        </div>
        <div className="flex items-center">
          <nav className="items-center hidden text-lg text-gray-800 font-sen dark:text-white lg:flex">
            {navigation.map((key, i) => (
              <Link
                key={i}
                to={key.href}
                className="flex px-6 py-2 hover:text-black"
              >
                {key.name}
              </Link>
            ))}
          </nav>
          <button className="flex flex-col ml-4 lg:hidden">
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
