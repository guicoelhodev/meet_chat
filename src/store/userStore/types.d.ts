import { IAvatarKeys, avatarList } from "src/data/avatarsList";

export type IUserStore = IAttributes & IMethods;
export type IAvatar = {
  name: keyof typeof avatarList;
  src: string;
};
export type IAttributes = {
  id: number | null;
  userName: string;
  avatar: null | IAvatar;
};

export type IMethods = {
  handleAvatar: (avatarKey: IAvatarKeys) => void;
  handleUserInfo: (value: string | number, type: "id" | "userName") => void;
};
