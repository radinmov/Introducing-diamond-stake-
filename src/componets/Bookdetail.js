import React from "react";

function BookDetail() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-6">
        <img
          src="/book-cover-placeholder.png"
          alt="Book Cover"
          className="w-40 h-60 object-cover rounded-md"
        />
        <div>
          <h2 className="text-3xl font-bold">The Subtle Art of Not Giving a F*ck</h2>
          <p className="mt-2 text-sm text-gray-400">by Mark Manson</p>
          <div className="mt-4 flex items-center space-x-2">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-md">
              3.9 ★
            </span>
            <span className="text-gray-400">(190,272 ratings)</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Nonfiction", "Self Help", "Psychology"].map((genre) => (
              <span
                key={genre}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
          <button className="mt-6 px-6 py-2 bg-blue-500 rounded-md">
            Buy book on Amazon
          </button>
        </div>
      </div>
      <div className="mt-8 bg-gray-700 p-4 rounded-md">
        <h3 className="text-xl font-semibold">Table of Contents</h3>
        <ul className="mt-4 space-y-2">
          {[
            "The danger of misguided values",
            "Identifying and avoiding shitty values",
            "Navigating romantic relationships",
          ].map((item, index) => (
            <li key={index} className="text-gray-300">
              {index + 1}. {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookDetail;
