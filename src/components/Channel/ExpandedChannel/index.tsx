import React, { Dispatch, SetStateAction } from "react";

import Mic from "src/assets/channel_icon/mic.svg";
import Webcam from "src/assets/channel_icon/webcam.svg";
import CloseCall from "src/assets/channel_icon/close_call.svg";
interface IExpandedChannel {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const mockUsers = [
  {
    id: 1,
    name: "Beach",
    photo:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    name: "Mountain",
    photo:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    name: "City",
    photo:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    name: "Beach",
    photo:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },

  // Add more objects as needed
];

type IControls = { action: string; icon: any };

export const ExpandedChannel: React.FC<IExpandedChannel> = ({ isOpen }) => {
  const controls: IControls[] = [
    {
      action: "open camera",
      icon: Webcam,
    },
    {
      action: "mute mic",
      icon: Mic,
    },
    {
      action: "get out call",
      icon: CloseCall,
    },
  ];
  return (
    <>
      {isOpen ? (
        <div className="z-20 w-screen h-screen bg-primary-blue bg-opacity-20 backdrop-blur-md fixed grid place-items-center">
          <section className="bg-secondary-blue w-full max-w-4xl rounded-sm p-8 flex flex-col items-center gap-4 border-red-100 border relative">
            <ul className="w-full grid grid-cols-2 grid-rows-2 gap-4">
              {mockUsers.map((user) => (
                <li
                  key={user.id}
                  className="bg-blue-800 flex flex-col items-center gap-4 p-4 rounded-md text-xl"
                >
                  <img
                    src={user.photo}
                    className="w-28 aspect-square rounded-full"
                  />
                  <p>{user.name}</p>
                </li>
              ))}
            </ul>

            <article className="flex gap-2 mt-4">
              {controls.map((control) => (
                <button
                  className="bg-blue-900 p-4 rounded-full"
                  title={control.action}
                >
                  <img className="w-8 h-8" src={control.icon} />
                </button>
              ))}
            </article>

            <button className="absolute top-4 right-4 bg-blue-900 p-4 rounded-full border-slate-100 border-2">
              <img src={CloseCall} className="w-6 h-6" />
            </button>

            <aside className="absolute bg-blue-900 bottom-4 right-8 h-20 aspect-video rounded-md flex items-center justify-center">
              {/* <div className="bg-primary-blue p-8 w-6 h-6 flex items-center justify-center rounded-full"> */}
              <p>6</p>
              {/* </div> */}
            </aside>
          </section>
        </div>
      ) : null}
    </>
  );
};
