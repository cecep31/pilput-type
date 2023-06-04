import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/page";
import Dashoboard from "./pages/dashboard/page";
import Blogs from "./pages/blogs/page";
import Counter from "./pages/counter";
import Login from "./pages/login/page";
import ErrorPage from './pages/error-page'
import UserManagement from "./pages/dashboard/user-management/page";
import "./index.css";
import { loader } from "./routes/rootloader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage />
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
