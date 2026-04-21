"use client";

export const GuessTheNumber = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const numberToGuess = randomNumber();

  const handleGuess = () => {
    const userGuess = +(
      document.getElementById("userGuess") as HTMLInputElement
    ).value;

    if (userGuess === numberToGuess) {
      alert("You guessed correct!");
    }
    if (userGuess > numberToGuess) {
      alert("Your guess is too high...");
    }
    if (userGuess < numberToGuess) {
      alert("Your guess is too low");
    }

    console.log(numberToGuess);
  };

  //Borde kunna fixa conditionalrendering

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center gap-4 items-center border-2 border-slate-600 rounded-md p-5">
        <label>Guess a number 1-100:</label>
        <input
          type="number"
          className="w-full border-2 border-slate-600 rounded-md"
          id="userGuess"
        />
        <button
          onClick={handleGuess}
          className="w-full border-2 border-slate-600 rounded-md hover:bg-slate-600 transition"
        >
          Guess
        </button>
      </div>
    </div>
  );
};
