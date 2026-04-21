"use client";
import { useState } from "react";

export const Interpolation = () => {
  const [myDog, setName] = useState("Albus Dumbledog");

  const handleClick = () => {
    setName("Albus Bob Abu Babi Prinsessan Bibi from Ashem Dumbledog");
  };

  return (
    <>
      <h2>{myDog}</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Show fullname
      </button>
    </>
  );
};
