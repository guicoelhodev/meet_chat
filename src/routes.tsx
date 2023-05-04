import { createBrowserRouter } from "react-router-dom";
import { Playground } from "src/pages/Playground";

export const router = createBrowserRouter([
  {
    path: '/playground',
    element: <Playground />
  }
]);
