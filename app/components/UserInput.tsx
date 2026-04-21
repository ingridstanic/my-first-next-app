"use client";

export const UserInput = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const usernameInput = (
      document.getElementById("usernameInput") as HTMLInputElement
    ).value;

    const passwordInput = (
      document.getElementById("passwordInput") as HTMLInputElement
    ).value;

    console.log("Username: ", usernameInput, "Password: ", passwordInput);
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        id="userForm"
        className="flex flex-col justify-center gap-3 items-center rounded-md border-2 border-blue-600 p-5"
      >
        <label>Username</label>
        <input
          id="usernameInput"
          type="text"
          placeholder="email@email.com"
          className="w-full border-2 border-blue-600 rounded-md"
        />

        <label>Password</label>
        <input
          id="passwordInput"
          type="password"
          placeholder="******"
          className="w-full border-2 border-blue-600 rounded-md"
        />
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
          Log in
        </button>
        <button
          className="w-full bg-red-300 text-orange-800 px-4 py-2 rounded-md hover:bg-orange-800 hover:text-red-200 transition"
          type="reset"
        >
          Reset
        </button>
      </form>
    </div>
  );
};
