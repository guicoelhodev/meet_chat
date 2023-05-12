import { avatarList } from "src/data/avatarsList";
import { Socket } from "socket.io-client";

export type IMessage = {
  id: string;
  userName: string;
  message: string;
  createdAt: string;
  userId: string;
  imageType: keyof typeof avatarList;
};

export type ISocket = Socket;
