import { FC, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Channel } from "src/components/Channel";
import { ChatContent } from "src/components/ChatContent";
import { SendMessage } from "src/components/SendMessage";
import { Username } from "src/components/Username";
import { IUser, UsersRoom } from "src/components/UsersRoom";
import { IMessage } from "src/protocols/chat";
import { userStore } from "src/store/userStore";
import { filterBadWords } from "src/utils/filterBadWords";
import { v4 as uuidV4 } from "uuid";

import Room3 from "src/assets/room_images/room3.png";

const fakeUsers: IUser[] = [
  {
    id: "1",
    status: "active",
    username: "john_doe",
  },
  {
    id: "2",
    status: "inactive",
    username: "jane_smith",
  },
  {
    id: "3",
    status: "active",
    username: "alex_walker",
  },
  {
    id: "4",
    status: "inactive",
    username: "emma_jones",
  },
  {
    id: "5",
    status: "active",
    username: "michael_brown",
  },
  {
    id: "6",
    status: "inactive",
    username: "sarah_wilson",
  },
  {
    id: "7",
    status: "active",
    username: "ryan_anderson",
  },
  // Additional 20 users
  {
    id: "8",
    status: "inactive",
    username: "laura_smith",
  },
  {
    id: "9",
    status: "active",
    username: "adam_jackson",
  },
  {
    id: "10",
    status: "inactive",
    username: "olivia_thompson",
  },
  {
    id: "11",
    status: "active",
    username: "benjamin_martin",
  },
  {
    id: "12",
    status: "inactive",
    username: "natalie_harris",
  },
  {
    id: "13",
    status: "active",
    username: "samuel_wilson",
  },
  {
    id: "14",
    status: "inactive",
    username: "emily_rodriguez",
  },
  {
    id: "15",
    status: "active",
    username: "daniel_garcia",
  },
  {
    id: "16",
    status: "inactive",
    username: "mia_anderson",
  },
  {
    id: "17",
    status: "active",
    username: "ethan_lee",
  },
  {
    id: "18",
    status: "inactive",
    username: "ava_taylor",
  },
  {
    id: "19",
    status: "active",
    username: "william_clark",
  },
  {
    id: "20",
    status: "inactive",
    username: "sophia_walker",
  },
];

const socket = io("http://10.1.30.22:3003/channel01");

socket.on("connect", () => {
  console.log("Connected with socket IO server");
});

socket.on("disconnect", () => {
  console.log("Disconnected with socket IO server");
});

export const ChatRoom: FC = () => {
  const { id: userId, userName, avatarId } = userStore();

  const [chatMessages, setChatMessages] = useState<IMessage[]>([]);

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
    <div>
      <div className="h-screen flex flex-col lg:flex-row">
        <section className="bg-primary-blue flex flex-col items-center grow max-w-none border-r-2 border-red-500 pb-4 lg:max-w-xs">
          <div className="w-full p-4 flex-1 flex flex-col gap-2">
            <Channel />
            <Channel />
          </div>

          <article className="relative">
            <img
              className="rounded-md opacity-80"
              src={Room3}
              alt="room 3 image"
            />
            <p className="absolute font-bold right-3 bottom-3 text-lg">
              ROOM 3
            </p>
          </article>
        </section>

        <section className="bg-primary-blue p-4 pt-8 grow flex flex-col">
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
        </section>
        <section className="hidden bg-primary-blue overflow-auto border-l-2 border-red-700 xl:block">
          <article className="bg-primary-blue top-0 p-4">
            <Username isEditable />
          </article>

          <UsersRoom users={fakeUsers} />
        </section>
      </div>
    </div>
  );
};
