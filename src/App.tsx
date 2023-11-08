import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCustomerPage from "./pages/add-customer/add-customer";
import Home from "./pages/home/home";
import InactiveCustomersPage from "./pages/inactive-users/inactive-customers";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-customer" element={<AddCustomerPage />} />
          <Route path="/edit-customer" element={<div>Edit Customer</div>} />
          <Route
            path="/inactive-customers"
            element={<InactiveCustomersPage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
