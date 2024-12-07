import React from "react";
import useTitle from "../../componets/Hook/useTitle";

export const Home = () => {
  useTitle("welcome page")
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Diamond Stake</h1>
        <div className="flex items-center">
          <img 
            src="/assets/icons/diamond.png" 
            alt="Diamond Icon" 
            className="w-16 h-16"
          />
        </div>
      </header>

      <section className="bg-blue-50 text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-4">Welcome to Diamond Stake</h2>
        <p className="text-lg text-gray-700 mb-6">
          This app is for BTS Contracting Company, based in Canada. The company specializes in urban development and hotel construction projects. It invites users to participate in its ventures and offers the opportunity to earn profits in dollars.
        </p>
        <button className="bg-blue-900 text-white py-2 px-6 rounded hover:bg-blue-800">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Our Features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <li className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">Secure Online Banking</h4>
            <p className="text-gray-600">Bank with confidence and security.</p>
          </li>
          <li className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">Quick Transactions</h4>
            <p className="text-gray-600">Fast and hassle-free payments.</p>
          </li>
          <li className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
            <p className="text-gray-600">Help is always just a click away.</p>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h3>
        <p className="text-center max-w-3xl mx-auto text-gray-700">
          "BankPro has made my financial life easier! Their services are unmatched, and I feel secure managing my finances with them."
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-900 text-white py-6 text-center">
        <p className="mb-4">
          Contact us at{" "}
          <a href="mailto:support@bankpro.com" className="underline">
            support@bankpro.com
          </a>
        </p>
        <p>&copy; 2024 BankPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
