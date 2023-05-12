import { avatarList } from "src/data/avatarsList";

export type IUser = {
  id: string;
  userName: string;
  avatarId: string & keyof typeof avatarList;
};
