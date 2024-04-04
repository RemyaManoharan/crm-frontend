import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { Outlet } from "react-router-dom";

const Defaultlayout = () => {

  return (
    <div className="default-layout">
      <header className="header mb-2">
        <Header />
      </header>
      <main className="main">
      <Outlet/>
        </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Defaultlayout;
