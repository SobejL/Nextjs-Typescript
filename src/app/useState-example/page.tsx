"use client";
import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

const UseStateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);
  // OR
  // const [user, setUser] = useState<UserType>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
         <input
  type="text"
  placeholder="Username"
  onChange={handleChange}
  className="border-4 border-blue-500 rounded-md p-3 focus:outline-none focus:border-blue-700"
/>

          <button onClick={handleClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Login</button>
        </form>
      )}
      {/* BE AWARE */}
      {user?.name}
    </div>
  );
};

export default UseStateExample;