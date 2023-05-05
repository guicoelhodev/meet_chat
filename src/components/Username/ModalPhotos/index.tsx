import { Dispatch, FC, SetStateAction } from "react";

interface IModalPhotos {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const arr = [1, 1, 1, 1, 1, 1, 1, 1];

export const ModalPhotos: FC<IModalPhotos> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  if (!isModalOpen) return null;
  return (
    <>
      <div className="absolute inset-0 grid place-items-center">
        <section className="z-10 w-11/12 bg-terciary-blue py-8 rounded-lg sm:max-w-2xl flex flex-col items-center gap-8">
          <h3>To choose a avatar, simply double click on it</h3>

          <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {arr.map((avatar, index) => (
              <li key={index + avatar}>
                <button
                  className="w-24 aspect-square rounded-full bg-blue-500 grid place-items-center"
                  onDoubleClick={() => console.log("foi")}
                >
                  AB
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div
        className="fixed top-0 left-0 h-screen w-full backdrop-blur-sm grid place-items-center p-4"
        onClick={() => setIsModalOpen(false)}
      ></div>
    </>
  );
};
