import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Playground } from "src/pages/Playground";
import { ChatRoom } from "./pages/ChatRoom";
import { userStore } from "./store/userStore";
import { useEffect } from "react";
import { io } from "socket.io-client";

const router = createBrowserRouter([
  {
    path: "/playground",
    element: <Playground />,
  },
  {
    path: "/chatRoom",
    element: <ChatRoom />,
  },
]);

export const RouterProviderComponent = () => {
  const setUserId = userStore((s) => s.setUserId);

  useEffect(() => {
    setUserId();
  }, [setUserId]);

  return <RouterProvider router={router} />;
};
