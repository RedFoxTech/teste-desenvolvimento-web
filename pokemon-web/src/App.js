import React from "react";
import Header from "./templates/Header";
import Input from "./templates/Input";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import Cards from "../src/templates/Cards";

function App() {
    return (
        <div className="container">
            <Header />
            <Input />
            <Cards />
        </div>
    );
}

export default App;
