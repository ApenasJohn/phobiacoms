import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './header/header';
import Home from './home/home';
import Adesivos from "./adesivos/adesivos";
import Prints from "./prints/prints";
import Contato from "./contato/contato";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redireciona de "/" para "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adesivos" element={<Adesivos />} />
        <Route path="/prints" element={<Prints />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
