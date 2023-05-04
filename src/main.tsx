import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./app/index";
import "./style/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
