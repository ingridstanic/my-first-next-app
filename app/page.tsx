import Image from "next/image";
import { ListObject } from "./components/ListObject";
import { Interpolation } from "./components/Interpolation";
import { UserInput } from "./components/UserInput";
import { GuessTheNumber } from "./components/GuessTheNumber";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-betweeen gap-5 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ListObject />
        <Interpolation />
        <UserInput />
        <GuessTheNumber />
      </main>
    </div>
  );
}
