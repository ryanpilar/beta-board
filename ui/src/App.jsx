import React from "react";

// Project Imports
import RootLayout from "./components/RootLayout";
import BetaBoard from "./components/BetaBoard";
import GymSetup from "./components/GymSetup";
import SetterSetup from "./components/SetterSetup";
import RootLayoutTwo from "./components/RootLayoutTwo";

// 3rd Party Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** ================================|| App ||=================================== **/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout><BetaBoard /></RootLayout>} />
        <Route path="/shadCNTest" element={<RootLayoutTwo><BetaBoard /></RootLayoutTwo>} />
        <Route path="/gym-setup" element={<RootLayout><GymSetup /></RootLayout>} />
        <Route path="/setter-setup" element={<RootLayout><SetterSetup /></RootLayout>} />
      </Routes>
    </Router>
  )
}
export default App