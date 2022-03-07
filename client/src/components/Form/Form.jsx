import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./form.module.css";

export default function Form() {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");

    return (
        <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
            <input {...register("firstName")} placeholder="Pokemon Name" />
            <input {...register("lastName")} placeholder="Pokedex Number" />
            <div className={styles.types}>
                <input className={styles.type1} {...register("type1")} placeholder="Type 1" />
                <input className={styles.type2}{...register("type2")} placeholder="Type 2" />
            </div>
            <div className={styles.weathers}>
                <input className={styles.weather1} {...register("weather1")} placeholder="Weather 1" />
                <input className={styles.weather2}{...register("weather2")} placeholder="Weather 2" />
            </div>
            <select {...register("category")}>
                <option value="">Family ID</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
            </select>
            <p>{result}</p>
            <input type="submit" />
        </form>
    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<Form />, rootElement);


