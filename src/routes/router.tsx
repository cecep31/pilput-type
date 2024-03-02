import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashoboard from "../pages/page";
import UserManagement from "../pages/user-management/page";
import Temp from "../pages/temp";
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
