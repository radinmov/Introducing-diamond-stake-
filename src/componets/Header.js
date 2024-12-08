import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold">Brieflane</h1>
      <input
        type="text"
        placeholder="Search by author, genre or title"
        className="w-1/3 px-4 py-2 rounded-md text-black"
      />
      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 rounded-md">Sign Up</button>
        <button className="px-4 py-2 bg-gray-700 rounded-md">Log In</button>
      </div>
    </header>
  );
}

export default Header;
