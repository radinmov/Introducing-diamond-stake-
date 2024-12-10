import React from "react";
import Header from "../../componets/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="p-6 bg-black text-white min-h-screen">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto py-10">
          <div className="w-full md:w-1/3">
            <img
              src="assets/icons/diamond_300.png"
              alt="Book Cover"
              className="rounded-lg shadow-lg w-[200px]"
            />
          </div>

          <div className="text-left w-full md:w-2/3">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The Diamond Stake Application
            </h2>
            <p className="text-gray-400 mb-6">
              This app belongs to BTS Contracting Company based in Canada, specializing in township development and hotel construction.
              <br />

              <br />
              Our goal is a long-term 10-year partnership, and there are plenty of exciting opportunities waiting for you in this investment.
            </p>
            <div className="flex gap-4">
              <button className="bg-black border border-lime-400 text-lime-400 px-6 py-2 rounded-lg shadow-md hover:bg-lime-400 hover:text-black transition duration-300">
              Download for Android 
              </button>
              <button className="bg-black border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg shadow-md hover:bg-cyan-400 hover:text-black transition duration-300">
              Download for Ios web 
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-t-3xl mt-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Table of Contents</h3>
            <ul className="text-gray-400 list-disc pl-5 space-y-2 ">
              <li>The Struggle is Real</li>
              <li>The Danger of Misguided Values</li>
              <li>Identifying and Avoiding Shitty Values</li>
              <li>Taking Responsibility for Your Life</li>
              <li>Overcoming the Fear of Failure</li>
              <li>Embracing Uncertainty and Self-Doubt</li>
              <li>Navigating Romantic Relationships</li>
              <li>Navigating Non-Romantic Relationships</li>
              <li>Focusing on What Matters</li>
            </ul>

            <div className="mt-8 text-gray-400">
              <p>
                In a world filled with endless opportunities and choices, it's easy to feel overwhelmed and stressed out. This section explores how to navigate life's challenges and find true happiness by focusing on what really matters.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
