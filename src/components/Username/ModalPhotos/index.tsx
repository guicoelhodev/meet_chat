import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { avatarList } from "src/data/avatarsList";
import { userStore } from "src/store/userStore";

interface IModalPhotos {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalPhotos: FC<IModalPhotos> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const { userName, handleUserInfo } = userStore();
  const [inputValue, setInputValue] = useState(userName);

  const handleAvatarImg = (avatarName: keyof typeof avatarList) => {
    handleUserInfo(avatarName, "avatarId");
    return setIsModalOpen(false);
  };

  const maxCharacters = 12 - inputValue.length;

  const onBlurUserName = useCallback(() => {
    if (maxCharacters === 12) return;
    if (maxCharacters <= 0) return;

    handleUserInfo(inputValue, "userName");
  }, [maxCharacters, handleUserInfo, inputValue]);

  if (!isModalOpen) return null;

  return (
    <>
      <div
        aria-label="modal_photos"
        className="absolute inset-0 grid place-items-center"
      >
        <motion.section
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="z-10 w-11/12 bg-terciary-blue py-8 px-8 rounded-lg flex flex-col items-center gap-8 sm:max-w-2xl sm:px-2"
        >
          <h3 className="text-center">
            To choose a avatar, simply double click on it
          </h3>

          <section className="relative mt-4 w-auto ">
            <input
              type="text"
              data-testId="username-input"
              defaultValue={userName}
              onBlur={onBlurUserName}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              className="bg-inherit w-auto p-2 border-b-2 border-primary-gray outline-none text-primary-cyan text-center text-xl tracking-widest focus:border-b-primary-cyan"
            />

            <span
              className={`absolute right-2 top-2 text-2xl ${
                maxCharacters > 0 ? "text-primary-cyan" : "text-red-600"
              }`}
            >
              {maxCharacters}
            </span>
          </section>

          <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.values(avatarList).map((avatar, index) => (
              <li key={index + avatar.name} aria-label={avatar.name}>
                <button
                  className="w-24 aspect-square rounded-full bg-blue-500 grid place-items-center"
                  onDoubleClick={() => handleAvatarImg(avatar.name)}
                >
                  <img
                    src={avatar.src}
                    className="rounded-full w-full aspect-square object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
      <div
        className="fixed top-0 left-0 h-screen w-full backdrop-blur-sm grid place-items-center p-4"
        onClick={() => setIsModalOpen(false)}
      ></div>
    </>
  );
};
