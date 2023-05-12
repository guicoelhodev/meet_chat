import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { RouterProviderComponent } from "./routes";
import "./style/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProviderComponent />
  </React.StrictMode>
);
