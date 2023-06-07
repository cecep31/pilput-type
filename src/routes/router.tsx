import Home from "../pages/page";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashoboard from "../pages/dashboard/page";
import Blogs from "../pages/blogs/page";
import Login from "../pages/login/page";
import Chat from "../pages/chat/page";
import ErrorPage from "../pages/error-page";
import UserManagement from "../pages/dashboard/user-management/page";
import Mytask from "../pages/dashboard/tasks/page";
import { createBrowserRouter } from "react-router-dom";
import { loader } from "./logged";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    loader: loader,
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
    ],
  },
  // {
  //   path: "dashboard",
  //   element: <Dashoboard />,
  //   loader: loader,
  // },
  // {
  //   path: "dashboard/user-management",
  //   element: <UserManagement />,
  //   loader: loader,
  // },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  // {
  //   path: "dashboard/mytask",
  //   element: <Mytask />,
  // },
]);
