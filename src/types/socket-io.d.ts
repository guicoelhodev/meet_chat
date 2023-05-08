import { avatarList } from "src/data/avatarsList";

type IMessage = {
  id: number;
  userName: string;
  message: string;
  createdAt: string;
  messageId: string;
  imageType: keyof typeof avatarList;
};
