import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from './routes'

import "./style/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
