import React from "react";
import AppNavbar from "../components/Navbar";

function Main({ children }) {
  return (
    <>
      <AppNavbar />
      <div className="main">{children}</div>
    </>
  );
}

export default Main;
