import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
