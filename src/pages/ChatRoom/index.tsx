import { FC, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ChatContent } from "src/components/ChatContent";
import { SendMessage } from "src/components/SendMessage";
import { Username } from "src/components/Username";
import { IMessage } from "src/models/chat";
import { userStore } from "src/store/userStore";
import { filterBadWords } from "src/utils/filterBadWords";
import { v4 as uuidV4 } from "uuid";

export const ChatRoom: FC = () => {
  const { id: userId, userName, avatarId } = userStore();

  const [chatMessages, setChatMessages] = useState<IMessage[]>([]);

  const socket = io("http://localhost:3000");

  const sendMessageToWebsocketServer = (message: string) => {
    if (!userId || !message) return;

    const messageFiltered = filterBadWords(message);
    const dataToServer: IMessage = {
      id: uuidV4(),
      userName,
      userId,
      message: messageFiltered,
      createdAt: new Date().toISOString(),
      imageType: avatarId,
    };
    socket.emit("sendMessageToServer", dataToServer);
  };

  const receiveMessageFromServer = () => {
    socket.once("getHistoricMessages", (dataServer: IMessage[]) => {
      setChatMessages(dataServer);
    });
  };

  useEffect(() => {
    receiveMessageFromServer();
  }, []);

  return (
    <div className="h-screen bg-primary-blue flex flex-col gap-4 p-4">
      <header className="flex justify-end items-start">
        <Username isEditable />
      </header>

      <main className="flex-1 flex overflow-auto">
        <ChatContent
          socketConnection={socket}
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </main>

      <footer>
        <SendMessage
          onClickFn={(messageInput) =>
            sendMessageToWebsocketServer(messageInput)
          }
        />
      </footer>
    </div>
  );
};
