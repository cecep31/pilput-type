import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/page";
import Dashoboard from "./pages/dashboard/page";
import Blogs from "./pages/blogs/page";
import Counter from './pages/counter'
import Login from './pages/login/page'
import "./index.css";
import {loader} from './routes/rootloader'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Dashoboard />,
    loader:loader
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path:"counter",
    element: <Counter />
  },
  {
    path:"login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
