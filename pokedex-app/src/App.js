import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ControlPage } from "./components/ControlPage";
import { Routes } from "./components/Router";
import Header from "./components/Header";
import Image from "./components/Image";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ControlPage />
      <Routes />
    </BrowserRouter>
  );
}
