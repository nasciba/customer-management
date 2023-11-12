import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCustomerPage from "./pages/addCustomer/AddCustomer";
import Home from "./pages/home/Home";
import EditCustomerPage from "./pages/editCustomer/EditCustomer";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-customer" element={<AddCustomerPage />} />
          <Route path="/edit-customer/:id" element={<EditCustomerPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
