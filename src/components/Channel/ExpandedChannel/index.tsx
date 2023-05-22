import React, { Dispatch, SetStateAction } from "react";

// import { Container } from './styles';
interface IExpandedChannel {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const ExpandedChannel: React.FC<IExpandedChannel> = ({ isOpen }) => {
  return (
    <>
      {!isOpen ? null : (
        <div className="w-screen h-screen blur-lg bg-primary-blue opacity-20 fixed">
          dsjkdj
        </div>
      )}
    </>
  );
};
