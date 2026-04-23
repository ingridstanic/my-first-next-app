"use client";
import { SubmitEvent, useState } from "react";

export const GuessTheNumber = () => {
  const [numberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState<number>(0);
  const [message, setMessage] = useState("");

  const handleGuess = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userGuess === numberToGuess) {
      setMessage("You guessed correct!");
    }
    if (userGuess > numberToGuess) {
      setMessage("Your guess is too high...");
    }
    if (userGuess < numberToGuess) {
      setMessage("Your guess is too low...");
    }

    console.log(numberToGuess);
    console.log(userGuess);
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleGuess}
        className="flex flex-col justify-center gap-4 items-center border-2 border-slate-600 rounded-md p-5"
      >
        <label>Guess a number 1-100:</label>
        <input
          onChange={(e) => setUserGuess(+e.target.value)}
          type="number"
          className="w-full border-2 border-slate-600 rounded-md"
          id="userGuess"
        />
        <button className="w-full border-2 border-slate-600 rounded-md hover:bg-slate-600 transition">
          Guess
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
};
