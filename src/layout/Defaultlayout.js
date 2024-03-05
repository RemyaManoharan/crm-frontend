import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Defaultlayout = () => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">main page content</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Defaultlayout;
