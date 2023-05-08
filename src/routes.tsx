import { createBrowserRouter } from "react-router-dom";
import { Playground } from "src/pages/Playground";
import { ChatRoom } from "./pages/ChatRoom";

export const router = createBrowserRouter([
  {
    path: "/playground",
    element: <Playground />,
  },
  {
    path: "/chatRoom",
    element: <ChatRoom />,
  },
]);
