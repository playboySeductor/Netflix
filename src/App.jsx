import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Player from './pages/Player';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/signup" element={<Signup/>}></Route>
      <Route exact path="/player" element={<Player/>}></Route>
      <Route exact path="/" element={<Netflix/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
