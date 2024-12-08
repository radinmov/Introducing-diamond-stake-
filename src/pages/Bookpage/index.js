import React from "react";
import Header from "../components/Header";
import BookDetail from "../components/BookDetail";

function BookPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <BookDetail />
      </main>
    </>
  );
}

export default BookPage;
