import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { IMessage } from "src/protocols/chat";
import { preventDuplicatedMessages } from "src/utils/preventDuplicatedMessages";
import { UserMessage } from "./UserMessage";
import { Socket } from "socket.io-client";

interface IChatContent {
  socketConnection: Socket;
  chatMessages: IMessage[];
  setChatMessages: Dispatch<SetStateAction<IMessage[]>>;
}
export const ChatContent: FC<IChatContent> = ({
  socketConnection,
  chatMessages,
  setChatMessages,
}) => {
  const receiveMessageFromServer = () => {
    socketConnection.on(
      "resendMessageToApp",
      (dataServer: IMessage[] | IMessage) => {
        if (Array.isArray(dataServer)) return setChatMessages(dataServer);
        setChatMessages((prev) => preventDuplicatedMessages(dataServer, prev));
      }
    );
  };

  useEffect(() => {
    receiveMessageFromServer();
  }, []);

  return (
    <section className="w-full rounded-sm  ">
      <ul className="flex flex-col p-4 gap-4">
        {chatMessages?.map((messageInfo) => (
          <UserMessage messageContent={messageInfo} key={messageInfo.id} />
        ))}
      </ul>
    </section>
  );
};
