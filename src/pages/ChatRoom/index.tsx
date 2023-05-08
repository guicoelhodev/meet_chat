import { FC, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ChatContent } from "src/components/ChatContent";
import { SendMessage } from "src/components/SendMessage";
import { Username } from "src/components/Username";
import { userStore } from "src/store/userStore";
import { IMessage } from "src/types/socket-io";
import { filterBadWords } from "src/utils/filterBadWords";
import { v4 as uuidV4 } from "uuid";

export const ChatRoom: FC = () => {
  const { id, userName, avatar } = userStore();

  const [chatMessages, setChatMessages] = useState<IMessage[]>([]);

  const socket = io("http://localhost:3000");

  const sendMessageToWebsocketServer = (message: string) => {
    if (!id || !message) return;

    const messageFiltered = filterBadWords(message);
    let dataToServer: IMessage = {
      id,
      userName,
      message: messageFiltered,
      createdAt: new Date().toISOString(),
      messageId: uuidV4(),
      imageType: avatar?.name ? avatar.name : "commonAvatar",
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
    <div className="min-h-screen bg-primary-blue flex flex-col gap-4 p-4">
      <header className="flex justify-end items-start">
        <Username isEditable />
      </header>

      <main className="flex-1 flex">
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
