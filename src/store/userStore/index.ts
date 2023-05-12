import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IAttributes, IUserStore } from "./types";
import { v4 as uuidV4 } from "uuid";

const initalUserInfo: IAttributes = {
  id: "",
  userName: "user",
  avatarId: "commonAvatar",
};

export const userStore = create<IUserStore>()(
  persist(
    (set, get) => ({
      ...initalUserInfo,
      handleUserInfo: (value, type) =>
        set((state) => {
          let tmpState = state[type];
          tmpState = value;

          return { ...state, [type]: tmpState };
        }),

      setUserId: () => {
        let idStorage = get().id;

        if (idStorage) return;
        idStorage = String(Math.floor(Math.random() * 9000) + 1000);
        set({ id: idStorage });
      },
    }),
    {
      name: "@user_meetChat",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
