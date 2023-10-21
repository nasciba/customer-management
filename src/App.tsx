import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/add-customer" element={<div>Add Costumer</div>} />
          <Route path="/edit-customer" element={<div>Add Costumer</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
