import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Footer } from "./components/Footer/Footer";
import { ComplianceCentralUsers } from "./components/ComplianceCentralUsers/ComplianceCentralUsers";
import { LandingPage } from "./components/LandingPage/LandingPage";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/complianceCentralUsers" element={<ComplianceCentralUsers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
