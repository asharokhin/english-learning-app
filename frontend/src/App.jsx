import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Dictionary from "./pages/Dictionary";
import PresentTenses from "./pages/PresentTenses";
import Exercises from "./pages/Exercises/Exercises";
import PastTenses from "./pages/PastTenses";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingBottom: "2.5rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/resources">
            <Route index element={<Resources />} />
            <Route path="grammar">
              <Route path="present-tense">
                <Route index element={<PresentTenses />} />
                <Route path="exercises" element={<Exercises />} />
              </Route>
              <Route path="past-tense" element={<PastTenses />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
