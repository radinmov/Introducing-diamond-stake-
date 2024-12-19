import React, { useEffect, useRef, useState } from "react";
import Header from "../../componets/Header";

function Home() {
  const tableOfContentsRef = useRef(null);
  const [isTableVisible, setIsTableVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTableVisible(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (tableOfContentsRef.current) {
      observer.observe(tableOfContentsRef.current);
    }

    return () => {
      if (tableOfContentsRef.current) {
        observer.unobserve(tableOfContentsRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen flex flex-col items-center">
        {/* Centered Diamond Stake Section */}
        <div
          className={`flex flex-col items-center justify-center min-h-screen transition-opacity duration-700 ${
            isTableVisible ? "opacity-50" : "opacity-100"
          }`}
        >
          <img
            src="assets/icons/diamond_300.png"
            alt="Diamond Stake Logo"
            className="rounded-lg shadow-lg w-[200px] mb-6"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            The Diamond Stake Application
          </h2>
          <p className="text-gray-400 text-center max-w-2xl">
            This app belongs to BTS Contracting Company based in Canada, specializing in township
            development and hotel construction. Our goal is a long-term 10-year partnership, and
            there are plenty of exciting opportunities waiting for you in this investment.
          </p>
          {/* <div className="flex gap-4 mt-8">
              <button className="bg-black border border-lime-400 text-lime-400 px-6 py-2 rounded-lg shadow-md hover:bg-lime-400 hover:text-black transition duration-300">
              Download for Android
              </button>
              <button className="bg-black border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg shadow-md hover:bg-cyan-400 hover:text-black transition duration-300">
              Download for Ios web 
              </button>
            </div> */}
             <div className="flex gap-4 mt-8">
            {/* Download for Android */}
            <a
              href="/app-profile.apk" // Path to your APK file
              download
              className="bg-black border border-lime-400 text-lime-400 px-6 py-2 rounded-lg shadow-md hover:bg-lime-400 hover:text-black transition duration-300"
            >
              Download for Android
            </a>
            {/* Link to PWA */}
            <a
              href="/pwa/index.html" // Path to your PWA index.html
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg shadow-md hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Open Web App
            </a>
          </div>
        </div>

        {/* Table of Contents Section */}
        <div
          ref={tableOfContentsRef}
          className={`w-full bg-gray-900 p-8 rounded-t-3xl transition-opacity duration-700 transform ${
            isTableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Table of Contents</h3>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
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
                In a world filled with endless opportunities and choices, it's easy to feel
                overwhelmed and stressed out. This section explores how to navigate life's
                challenges and find true happiness by focusing on what really matters.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
