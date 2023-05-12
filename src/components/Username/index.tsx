import { FC, useEffect, useState } from "react";
import { ModalPhotos } from "./ModalPhotos";
import { userStore } from "src/store/userStore";
import { getAvatarImage } from "src/data/avatarsList";

interface IUsername {
  isEditable: boolean;
}
export const Username: FC<IUsername> = ({ isEditable = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userName, id, avatarId } = userStore();

  return (
    <article className="max-w-xs bg-secondary-blue rounded-md">
      <button
        className={`w-80 flex gap-4 items-center justify-evenly p-4 rounded-inherit ${
          isEditable ? "cursor-pointer" : "cursor-auto"
        }`}
        onClick={() => setIsModalOpen(true)}
        disabled={!isEditable}
      >
        <div className="flex gap-2 text-2xl font-medium">
          <p>{userName}</p>
          {id && <span className="text-primary-cyan">{`#${id}`}</span>}
        </div>
        <aside className="w-16 bg-blue-500 aspect-square rounded-full grid place-items-center">
          <img
            src={getAvatarImage(avatarId).src}
            alt="user avatar"
            className="rounded-full w-full aspect-square object-cover"
          />
        </aside>
      </button>

      <ModalPhotos isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </article>
  );
};
