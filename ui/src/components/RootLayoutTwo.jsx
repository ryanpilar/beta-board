import React from "react";
// Project Imports
import Navbar from "./Navbar";

import ThemeProvider from "../contexts/ThemeProvider";
import Footer from "./Footer";

/** ================================|| Root Layout ||=================================== **/

function RootLayoutTwo({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-full min-w-full">

        <Navbar />
        {children}
        <Footer />


      </div>
    </ThemeProvider>
  );
}

export default RootLayoutTwo;