import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashoboard from "../pages/page";
// import ErrorPage from "../pages/error-page";
import UserManagement from "../pages/user-management/page";
import Mytask from "../pages/tasks/page";
import Temp from "../pages/temp";
import Board from "../pages/board/page";
import Posts from "@/pages/posts";
import PostCreate from "@/pages/posts/create";
import { createBrowserRouter } from "react-router-dom";
import { loader } from "./logged";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashoboard />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
        loader: loader,
      },
      {
        path: "mytask",
        element: <Mytask />,
      },
      {
        path: "board",
        element: <Board />,
      },
      {
        path: "posts/create",
        element: <PostCreate />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
  // {
  //   path: "dashboard",
  //   element: <Dashoboard />,
  //   loader: loader,
  // },

  {
    path: "temp",
    element: <Temp />,
  },
]);
