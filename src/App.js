import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import IndiaMap from "./components/indiaMap";
import IndiaMap2 from "./components/k-file1";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col s5 ">
          <div className="card">
            <h3>India</h3>
            <div className="card-content" style={{ height: "80vh" }}>
              <IndiaMap2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
