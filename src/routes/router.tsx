import Home from "../pages/page";
import Dashoboard from "../pages/dashboard/page";
import Blogs from "../pages/blogs/page";
import Counter from "../pages/counter";
import Login from "../pages/login/page";
import Chat from '../pages/chat/page'
import ErrorPage from "../pages/error-page";
import UserManagement from "../pages/dashboard/user-management/page";
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
    element: <Dashoboard />,
    loader: loader,
  },
  {
    path: "dashboard/user-management",
    element: <UserManagement />,
    loader: loader,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "counter",
    element: <Counter />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
]);
