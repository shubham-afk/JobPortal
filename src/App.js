import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Homepage from "./pages/homepage";
import AddJob from "./pages/AddJob";
import Jobs from "./pages/Jobs";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/add-job" element={<AddJob />} />
    //     <Route path="/jobs" element={<Jobs />} />
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        {/* Landing page without Navbar */}
        <Route path="/" element={<Homepage />} />
        {/* All other pages with Navbar */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/add-job" element={<AddJob />} />
                <Route path="/jobs" element={<Jobs />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
