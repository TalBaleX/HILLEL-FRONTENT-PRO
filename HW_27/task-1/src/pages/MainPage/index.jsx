import React from "react";
import Header from "/src/components/Header/Header.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import Todos from "/src/components/Todos/Todos.jsx";

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Todos />
      </main>
      <Footer />
    </>
  );
}
