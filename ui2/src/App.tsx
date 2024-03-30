// Project Imports
import RootLayout from "./components/RootLayout";
import Test from "./components/Test";

// 3rd Party Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** ================================|| App ||=================================== **/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout><Test /></RootLayout>} />
        <Route path="/shadeExample" element={<RootLayout><Test2 /></RootLayout>} />

      </Routes>
    </Router>
  )
}
export default App