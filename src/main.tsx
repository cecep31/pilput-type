import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
