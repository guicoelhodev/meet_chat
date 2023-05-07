import Morty from "src/assets/meet_avatar/01.webp";
import Cat from "src/assets/meet_avatar/02.jpg";
import Cassio from "src/assets/meet_avatar/03.jpg";
import Tanjiro from "src/assets/meet_avatar/04.webp";
import Beth from "src/assets/meet_avatar/05.webp";
import Anya from "src/assets/meet_avatar/06.webp";
import CommonAvatar from "src/assets/meet_avatar/07.png";
import Pericles from "src/assets/meet_avatar/08.webp";

export type IAvatarKeys =
  | "morty"
  | "cat"
  | "cassio"
  | "tanjiro"
  | "beth"
  | "anya"
  | "commonAvatar"
  | "pericles";

type IAvatarList = {
  [key in IAvatarKeys]: {
    name: IAvatarKeys;
    src: string;
  };
};

export const avatarList: IAvatarList = {
  morty: {
    name: "morty",
    src: Morty,
  },
  cat: {
    name: "cat",
    src: Cat,
  },
  cassio: {
    name: "cassio",
    src: Cassio,
  },
  tanjiro: {
    name: "tanjiro",
    src: Tanjiro,
  },
  beth: {
    name: "beth",
    src: Beth,
  },
  anya: {
    name: "anya",
    src: Anya,
  },
  commonAvatar: {
    name: "commonAvatar",
    src: CommonAvatar,
  },
  pericles: {
    name: "pericles",
    src: Pericles,
  },
};

export const getAvatarImage = (avatarName: IAvatarKeys) => {
  return avatarList[avatarName];
};
