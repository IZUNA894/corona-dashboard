import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SecondSection from "./components/secondSection";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* middle section */}
      <SecondSection />
    </div>
  );
}

export default App;
