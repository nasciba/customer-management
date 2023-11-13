import React,  { lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AddCustomerPage = lazy(() => import("./pages/addCustomer/AddCustomer"));
const HomePage = lazy(() => import("./pages/home/Home"));
const EditCustomerPage = lazy(() =>
  import("./pages/editCustomer/EditCustomer")
);
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-customer" element={<AddCustomerPage />} />
          <Route path="/edit-customer/:id" element={<EditCustomerPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
