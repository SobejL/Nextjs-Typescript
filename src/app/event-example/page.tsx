'use client'
import React from "react";

const EventExample = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched!");
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted!`);
  };

  return (
    <div className="eventExample p-4 space-y-4">
      <form className="flex items-center">
        <input
          className="border rounded p-2 mr-2"
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
        />
    <button
  className="bg-blue-500 text-blue border border-blue-700 hover:border-blue-800 py-2 px-4 rounded transition duration-300"
  onClick={handleClick}
>
  Search
</button>

      </form>

      <div className="post bg-gray-100 p-4 rounded">
        <h1 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet consectetur 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button
          className="bg-red-500 text-black py-2 px-4 rounded mt-2"
          onClick={(e) => handleDelete(e, 1)}
        >
          Delete
        </button>
      </div>

      <div className="post bg-gray-100 p-4 rounded">
        <h1 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet consectetur 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button
 className="bg-red-500 text-black border-2 border-black hover:border-gray-900 py-2 px-4 rounded mt-2 transition duration-300"
  onClick={(e) => handleDelete(e, 2)}
>
  Delete
</button>

      </div>
    </div>
  );
};

export default EventExample;
