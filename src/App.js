import React from "react";
import BookDetail from "./componets/Bookdetail";
import Header from "./componets/Header";
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="px-4 py-8">
        <BookDetail />
      </main>
    </div>
  );
}

export default App;
