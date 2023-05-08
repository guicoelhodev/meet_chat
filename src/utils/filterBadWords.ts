import badWords from "bad-words";

export const filterBadWords = (message: string) => {
  const filter = new badWords();

  let filteredText = filter.clean(message);

  return filteredText;
};
