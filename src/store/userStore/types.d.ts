import { IAvatarKeys, avatarList } from "src/data/avatarsList";
import { IUser } from "src/models/user";

export type IUserStore = IAttributes & IMethods;

export type IAttributes = IUser;

export type IMethods = {
  handleUserInfo: (value: string, type: keyof IAttributes) => void;
  setUserId: () => void;
};
