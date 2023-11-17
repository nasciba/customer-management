import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./Theme";
import Loading from "./components/loading/Loading";
import Navbar from "./components/navbar/Navbar";

const AddCustomerPage = lazy(() => import("./pages/addCustomer/AddCustomer"));
const HomePage = lazy(() => import("./pages/home/Home"));
const EditCustomerPage = lazy(
  () => import("./pages/editCustomer/EditCustomer")
);
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
       <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-customer" element={<AddCustomerPage />} />
            <Route path="/edit-customer/:id" element={<EditCustomerPage />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
