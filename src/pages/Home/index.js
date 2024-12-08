import React from "react";
import { Link } from "react-router-dom";
import Header from "../../componets/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="p-6 text-center bg-black text-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
          <div className="w-full md:w-1/3">
            <img
              src="assets/icons/diamond.png"
              alt="Book Cover"
              className="rounded-lg shadow-lg w-[200px]"
            />
          </div>

          <div className="text-left w-full md:w-2/3">
            <h2 className="text-4xl md:text-4xl font-bold mb-4">
              The Diamond stake application
            </h2>
            <p className="text-gray-400 mb-6">
            This app belongs to BTS Contracting Company based in Canada, specializing in township development and hotel construction.

We invite you to join us in this venture, offering you the opportunity to earn profits in USD.

Our goal is a long-term 10-year partnership, and there are plenty of exciting opportunities waiting for you in this investment.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700">
                Buy on Amazon
              </button>
              <button className="bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
