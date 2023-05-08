import { create } from "zustand";
import { IAttributes, IUserStore } from "./types";
import { getAvatarImage } from "src/data/avatarsList";

const initalUserInfo: IAttributes = {
  id: Number(localStorage.getItem("@USER_ID")),
  userName: "user",
  avatar: JSON.parse(localStorage.getItem("@USER_IMAGE")!) as any,
};

export const userStore = create<IUserStore>((set) => ({
  ...initalUserInfo,
  handleAvatar: (avatarKey) =>
    set((state) => {
      const image = getAvatarImage(avatarKey);

      localStorage.setItem("@USER_IMAGE", JSON.stringify(image));

      return { ...state, avatar: image };
    }),
  handleUserInfo: (value, type) =>
    set((state) => {
      let { userName, id } = state;
      if (type === "id") {
        id = Number(value);
        localStorage.setItem("@USER_ID", String(value));
      } else if (type === "userName") {
        userName = String(value);
      }

      return { ...state, userName, id };
    }),
}));
