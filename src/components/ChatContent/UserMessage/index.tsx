import { FC, memo } from "react";
import { getAvatarImage } from "src/data/avatarsList";
import { IMessage } from "src/protocols/chat";
import { userStore } from "src/store/userStore";

interface IUserMessage {
  messageContent: IMessage;
}

const UserMessageMemo: FC<IUserMessage> = ({ messageContent }) => {
  const { id: userId } = userStore();

  const isMyMessage = userId === messageContent.userId;

  return (
    <article
      className={`flex gap-4  ${isMyMessage ? "flex-row-reverse" : "flex-row"}`}
    >
      <article className={`w-16 aspect-square`}>
        <img
          className="rounded-full w-full aspect-square object-cover"
          src={getAvatarImage(messageContent.imageType).src}
          alt="user image"
        />
      </article>
      <section className="flex flex-col gap-4">
        <article className="flex gap-2 font-bold text-lg">
          <p>{messageContent.userName}</p>
          <span className="text-primary-cyan">{`#${messageContent.userId}`}</span>
        </article>

        <article
          className={`bg-secondary-blue p-2 rounded-sm ${
            isMyMessage ? "self-end" : "self-start"
          }`}
        >
          <p>{messageContent.message}</p>
        </article>
      </section>
    </article>
  );
};

export const UserMessage = memo(UserMessageMemo);
