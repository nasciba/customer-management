import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCustomer from "./pages/add-customer/add-customer";
import Home from "./pages/home/home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/edit-customer" element={<div>Add Costumer</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
