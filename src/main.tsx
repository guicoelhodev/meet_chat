import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { io } from "socket.io-client";

import "./style/main.css";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected with socket IO server");
});

socket.on("disconnect", () => {
  console.log("Disconnected with socket IO server");
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
