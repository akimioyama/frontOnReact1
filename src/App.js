import React, { useState } from "react";
import './styles/App.css';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main"
import Result from "./pages/Result"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="posts/:id" element={<Result />} />
    </Routes>
  );
}

export default App;