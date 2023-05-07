import { IAvatarKeys, avatarList } from "src/data/avatarsList";

export type IUserStore = IAttributes & IMethods;

export type IAttributes = {
  id: number | null;
  userName: string;
  avatar: string | null;
};

export type IMethods = {
  handleAvatar: (avatarKey: IAvatarKeys) => void;
  handleUserInfo: (value: string | number, type: "id" | "userName") => void;
};
