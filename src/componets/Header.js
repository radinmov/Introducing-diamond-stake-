import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black shadow-md">
      <img className="w-[100px]" src="assets/icons/diamond_200.png" />
      <div className="space-x-4">
        <p className="font-bold text-3xl">Diamond stake </p>
      </div>
    </header>
  );
}

export default Header;
