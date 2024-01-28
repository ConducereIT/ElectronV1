import React from "react";
import Footer from "./Footer/Footer.component";
import Header from "./Header/Header.component";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-font-style">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
