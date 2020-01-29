import React, { Component } from 'react';
import PokeIcon from './pokemon-img.png';
import SearchBox from './components/SearchBox';
import FoundPokemons from './components/FoundPokemons';
import './App.css';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('back-end/selectDB.php')
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
        console.log(this.state.data);
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header text-center">
          <img src={PokeIcon} className="app-logo mt-2" alt="logo" />
        </header>
        <SearchBox />
        <table className="table-sm table-bordered table-hover mx-auto my-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Generation</th>
              <th scope="col">Evolution Stage</th>
              <th scope="col">Evolved</th>
              <th scope="col">Type 1</th>
              <th scope="col">Type 2</th>
              <th scope="col">Weather 1</th>
              <th scope="col">Weather 2</th>
              <th scope="col">Stat total</th>
              <th scope="col">Atk</th>
              <th scope="col">Def</th>
              <th scope="col">Sta</th>
              <th scope="col">Legendary</th>
              <th scope="col">Aquireable</th>
            </tr>
          </thead>
          <tbody id="table">

          </tbody>
        </table>
        {createTable(this.state.data)}
      </div>
    );
  }
}


let createTable = (data) => {
  console.log(data);
  for (let len in data) {
    console.log(data[0].id);

    let id = "data[" + len + "].id";
    let name = "data[" + len + "].name";
    let generation = "data[" + len + "].generation";
    let evolution_stage = "data[" + len + "].evolution_stage";
    let evolved = "data[" + len + "].evolved";
    let type_1 = "data[" + len + "].type_1";
    let type_2 = "data[" + len + "].type_2";
    let weather_1 = "data[" + len + "].weather_1";
    let weather_2 = "data[" + len + "].weather_2";
    let stat_total = "data[" + len + "].stat_total";
    let atk = "data[" + len + "].atk";
    let def = "data[" + len + "].def";
    let sta = "data[" + len + "].sta";
    let legendary = "data[" + len + "].legendary";
    let aquireable = "data[" + len + "].aquireable";

    let row = document.getElementById('table').insertRow();

    let cell = row.insertCell(0);
    let element = document.createElement("asd");
    element.innerHTML = eval(id);
    cell.appendChild(element);


    cell = row.insertCell(1);
    element = document.createElement("asd");
    element.innerHTML = eval(name);
    cell.appendChild(element);

    cell = row.insertCell(2);
    element = document.createElement("asd");
    element.innerHTML = eval(generation);
    cell.appendChild(element);

    cell = row.insertCell(3);
    element = document.createElement("asd");
    element.innerHTML = eval(evolution_stage);
    cell.appendChild(element);

    cell = row.insertCell(4);
    element = document.createElement("asd");
    element.innerHTML = eval(evolved);
    cell.appendChild(element);

    cell = row.insertCell(5);
    element = document.createElement("asd");
    element.innerHTML = eval(type_1);
    cell.appendChild(element);

    cell = row.insertCell(6);
    element = document.createElement("asd");
    element.innerHTML = eval(type_2);
    cell.appendChild(element);

    cell = row.insertCell(7);
    element = document.createElement("asd");
    element.innerHTML = eval(weather_1);
    cell.appendChild(element);

    cell = row.insertCell(8);
    element = document.createElement("asd");
    element.innerHTML = eval(weather_2);
    cell.appendChild(element);

    cell = row.insertCell(9);
    element = document.createElement("asd");
    element.innerHTML = eval(stat_total);
    cell.appendChild(element);

    cell = row.insertCell(10);
    element = document.createElement("asd");
    element.innerHTML = eval(atk);
    cell.appendChild(element);

    cell = row.insertCell(11);
    element = document.createElement("asd");
    element.innerHTML = eval(def);
    cell.appendChild(element);

    cell = row.insertCell(12);
    element = document.createElement("asd");
    element.innerHTML = eval(sta);
    cell.appendChild(element);

    cell = row.insertCell(13);
    element = document.createElement("asd");
    element.innerHTML = eval(legendary);
    cell.appendChild(element);

    cell = row.insertCell(14);
    element = document.createElement("asd");
    element.innerHTML = eval(aquireable);
    cell.appendChild(element);
  }
}


export default App;
