import { FC, useState } from "react";
import { ModalPhotos } from "./ModalPhotos";

interface IUsername {
  isEditable: boolean;
}
export const Username: FC<IUsername> = ({ isEditable = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <article className="max-w-xs bg-secondary-blue rounded-md">
      <button
        className={`w-full flex gap-4 items-center justify-evenly py-4 rounded-inherit ${isEditable ? "cursor-pointer" : "cursor-auto"
          }`}
        onClick={() => setIsModalOpen(true)}
        disabled={!isEditable}
      >
        <div className="flex gap-2 text-2xl font-medium">
          <p>my_user</p>
          <span className="text-primary-cyan">#1234</span>
        </div>
        <aside className="w-16 bg-blue-500 aspect-square rounded-full grid place-items-center">
          <p className="text-lg">AS</p>
        </aside>
      </button>

      <ModalPhotos isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </article>
  );
};
