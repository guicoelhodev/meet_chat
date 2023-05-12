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

const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log("Connected with socket IO server");
});

socket.on("disconnect", () => {
  console.log("Disconnected with socket IO server");
});

export const RouterProviderComponent = () => {
  const setUserId = userStore((s) => s.setUserId);

  useEffect(() => {
    setUserId();
  }, [setUserId]);

  return <RouterProvider router={router} />;
};
