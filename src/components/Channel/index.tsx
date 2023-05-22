import { FC, useState } from "react";
import VolumeHigh from "src/assets/channel_icon/volume_high.svg";
import Mic from "src/assets/channel_icon/mic.svg";
import Video from "src/assets/channel_icon/video_recorder.svg";
import Headphone from "src/assets/channel_icon/headphone.svg";

import A from "src/assets/meet_avatar/05.webp";
import { ExpandedChannel } from "./ExpandedChannel";

const users = [1, 1, 1, 1, 1];

export const Channel: FC = () => {
  const [expandedChannel, setExpandedChannel] = useState(false);

  const getTranslateXSize = (index: number) => `translateX(-${8 * index}px)`;

  const channelActions = [
    {
      icon: Mic,
      slug: "mic",
      onclick: () => console.log("opa"),
    },
    {
      icon: Video,
      slug: "video",
      onclick: () => console.log("opa"),
    },
    {
      icon: Headphone,
      slug: "headphone",
      onclick: () => setExpandedChannel(true),
    },
  ];

  return (
    <>
      <section className="w-72 bg-secondary-blue rounded-md py-4 flex flex-col items-center gap-4 font-semibold">
        <header className="w-full flex justify-between px-4">
          <article className="flex items-center gap-2">
            <img src={VolumeHigh} alt="high_volume_icon" />
            <p>channel 02</p>
          </article>
          <aside>
            <p>1/5</p>
          </aside>
        </header>

        <ul
          className="b-1 w-4/5 flex overflow-auto scrollbar-hide"
          style={{ marginLeft: `${users.length * 8}px` }}
        >
          {users.map((user, index) => (
            <div
              className={`w-12 h-12 aspect-square rounded-full border-2 borcer-color-primary-gray -translate-x-[${
                1.5 * index
              }]`}
              style={{ transform: getTranslateXSize(index) }}
            >
              <img src={A} alt="User image" className="rounded-full" />
            </div>
          ))}
        </ul>

        <footer className="flex gap-2">
          {channelActions.map((actions) => (
            <button
              className="bg-terciary-blue p-1 rounded-md"
              onClick={actions.onclick}
            >
              <img src={actions.icon} alt={`Channel action ${actions.slug}`} />
            </button>
          ))}
        </footer>
      </section>

      <ExpandedChannel
        isOpen={expandedChannel}
        setIsOpen={setExpandedChannel}
      />
    </>
  );
};
