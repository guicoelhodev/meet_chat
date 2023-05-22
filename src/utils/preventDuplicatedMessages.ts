import { IMessage } from "src/protocols/chat";

type IPreventDuplicatedMessages = (
  currentMessage: IMessage,
  messageList: IMessage[]
) => IMessage[];

export const preventDuplicatedMessages: IPreventDuplicatedMessages = (
  currentMessage,
  messageList
) => {
  const arr: IMessage[] = [...messageList, currentMessage];
  const key: keyof IMessage = "id";

  const uniqueMessageId = [
    ...new Map(arr.map((item) => [item[key], item])).values(),
  ];
  return uniqueMessageId;
};
