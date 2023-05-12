import { FC, KeyboardEvent, useRef, useState } from "react";
import { Icon } from "@iconify/react";

interface ISendMessage {
  onClickFn: (message: string) => void;
}

export const SendMessage: FC<ISendMessage> = ({ onClickFn }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickEvent = () => {
    onClickFn(message);

    //inputRef.current?.blur();
    return setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") return handleClickEvent();
  };

  return (
    <section className="w-full bg-secondary-blue border-solid border border-primary-gray rounded-full flex gap-4 items-center focus-within:border-primary-cyan">
      <input
        className="w-full bg-secondary-blue text-secondary-gray text-lg rounded-full p-4 pl-6 focus:outline-none"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        value={message}
        ref={inputRef}
      />

      <button
        className="w-14 bg-inherit aspect-square bg-secondary-blue rounded-full grid place-items-center focus:outline-none"
        onClick={() => {
          onClickFn(message);
        }}
      >
        <Icon
          icon="ic:baseline-send"
          className="w-3/5 h-3/5 text-primary-gray"
        />
      </button>
    </section>
  );
};
