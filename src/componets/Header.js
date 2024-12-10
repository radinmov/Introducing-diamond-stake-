import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black shadow-md">
      <img className="" src="assets/icons/diamond.png" />
      <div className="space-x-4">
        <p className="font-bold text-2xl">Diamond stake </p>
      </div>
    </header>
  );
}

export default Header;
