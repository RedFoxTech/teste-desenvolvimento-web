import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="pokemonlist" element={<PokemonList />} />
        <Route path="*" Component={() => <h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
