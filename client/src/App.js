import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import LoanForm from "./components/LoanForm";
import LoanApps from "./components/LoanApps";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/loan-form" element={<LoanForm />} />
          <Route path="/loan-apps" element={<LoanApps />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
