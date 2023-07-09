import React from "react";
import ReactDOM from "react-dom/client";
import {Toaster} from 'react-hot-toast'
import "./global.css";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
