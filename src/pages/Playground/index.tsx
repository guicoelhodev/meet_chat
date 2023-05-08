import { FC } from "react";
import { SendMessage } from "src/components/SendMessage";

export const Playground: FC = () => {
  return (
    <div
      aria-label="playground_page"
      className="min-h-screen bg-primary-blue flex flex-col items-center justify-evenly"
    >
      <section className="w-full max-w-2xl">
        <SendMessage onClickFn={(value) => console.log(value)} />
      </section>
    </div>
  );
};
