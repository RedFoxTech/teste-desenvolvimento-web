import React, { Component } from 'react';
import PokeIcon from './pokemon-img.png';
import SearchBox from './components/SearchBox';
import ModalAddPokemon from './components/ModalAddPokemon';
import ModalUpdatePokemon from './components/ModalUpdatePokemon';
import './App.css';

class App extends Component {

  state = {
    value: '',
    data: [],
    showModalAdd: false,
    showModalUpdate: false,
    selectedPokemonId: 0,
    name: 0,
    pokedex_number: 0,
    img_name: 0,
    generation: 0,
    evolution_stage: 0,
    evolved: 0,
    family_id: 0,
    cross_gen: 0,
    type_1: 0,
    type_2: 0,
    weather_1: 0,
    weather_2: 0,
    stat_total: 0,
    atk: 0,
    def: 0,
    sta: 0,
    legendary: 0,
    aquireable: 0,
    spawns: 0,
    regional: 0,
    raidable: 0,
    hatchable: 0,
    shiny: 0,
    nest: 0,
    new: 0,
    non_gettable: 0,
    future_evolve: 0,
    cp40: 0,
    cp39: 0,

    nameU: 0,
    pokedex_numberU: 0,
    img_nameU: 0,
    generationU: 0,
    evolution_stageU: 0,
    evolvedU: 0,
    family_idU: 0,
    cross_genU: 0,
    type_1U: 0,
    type_2U: 0,
    weather_1U: 0,
    weather_2U: 0,
    stat_totalU: 0,
    atkU: 0,
    defU: 0,
    staU: 0,
    legendaryU: 0,
    aquireableU: 0,
    spawnsU: 0,
    regionalU: 0,
    raidableU: 0,
    hatchableU: 0,
    shinyU: 0,
    nestU: 0,
    newU: 0,
    non_gettableU: 0,
    future_evolveU: 0,
    cp40U: 0,
    cp39U: 0
  }

  changeHandler = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  changeHandlerUpdateAndAdd = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  //Cria tabela com a janela é aberta
  componentDidMount = () => {
    window.addEventListener('load', () => {
      fetch('back-end/selectDB.php?pokemonName=""', { method: 'POST' })
        .then(response => response.json())
        .then(json => {
          this.setState({ data: json });
          this.createTable();
        })
    });
  }

  //Cria tabela com os dados procurados
  handleSubmitSearch = (event) => {
    this.selectPokemon();
    event.preventDefault();
  }

  //Cria cabeçalho da tabela
  tableHeader = () => {
    return (
      <table className="table-sm table-bordered table-hover mx-auto my-4 sortable">
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
    );
  }

  //Modal Adicionar
  modalAdd = () => {
    const handleClose = () => {
      this.setState({
        showModalAdd: false
      })
    };
    const handleShow = () => {
      this.setState({
        showModalAdd: true
      })
    };

    return (
      <ModalAddPokemon show={this.state.showModalAdd} onClickShow={handleShow} onClickClose={handleClose} onClickSave={this.insertPokemon} onHide={handleClose} onChange={this.changeHandlerUpdateAndAdd} />
    );
  }

  //Modal Update
  modalUpd = () => {
    const handleClose = () => {
      this.setState({
        showModalUpdate: false
      })
    };
    const handleShow = () => {
      this.setState({
        showModalUpdate: true
      })
    };

    return (
      <ModalUpdatePokemon
        show={this.state.showModalUpdate}
        onClickShow={handleShow}
        onClickClose={handleClose}
        onClickSave={this.updatePokemon}
        onClickDelete={this.deletePokemon}
        onHide={handleClose}
        onChange={this.changeHandlerUpdateAndAdd}
        name={this.state.nameU}
        pokedexNum={this.state.pokedex_numberU}
        imgName={this.state.img_nameU}
        generation={this.state.generationU}
        evolutionStage={this.state.evolution_stageU}
        evolved={this.state.evolvedU}
        familyId={this.state.family_idU}
        crossGen={this.state.cross_genU}
        type1={this.state.type_1U}
        type2={this.state.type_2U}
        weather1={this.state.weather_1U}
        weather2={this.state.weather_2U}
        statTotal={this.state.stat_total}
        atk={this.state.atkU}
        def={this.state.defU}
        sta={this.state.staU}
        legendary={this.state.legendaryU}
        aquireable={this.state.aquireableU}
        spawns={this.state.spawnsU}
        regional={this.state.regionalU}
        raidable={this.state.raidableU}
        hatchable={this.state.hatchableU}
        shiny={this.state.shinyU}
        nest={this.state.nestU}
        new={this.state.newU}
        nonGettable={this.state.non_gettableU}
        futureEvolve={this.state.future_evolveU}
        cp40={this.state.cp40U}
        cp39={this.state.cp39U}
      />
    );
  }

  selectPokemon = () => {
    fetch('back-end/selectDB.php?pokemonName="' + this.state.value, { method: 'POST' })
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
        this.createTable();
      });
  }

  insertPokemon = (event) => {
    fetch('back-end/insertDB.php?name="' + this.state.name +
      "&pokedex_number=" + this.state.pokedex_number +
      "&img_name=" + this.state.img_name +
      "&generation=" + this.state.generation +
      "&evolution_stage=" + this.state.evolution_stage +
      "&evolved=" + this.state.evolved +
      "&family_id=" + this.state.family_id +
      "&cross_gen=" + this.state.cross_gen +
      "&type_1=" + this.state.type_1 +
      "&type_2=" + this.state.type_2 +
      "&weather_1=" + this.state.weather_1 +
      "&weather_2=" + this.state.weather_2 +
      "&stat_total=" + this.state.stat_total +
      "&atk=" + this.state.atk +
      "&def=" + this.state.def +
      "&sta=" + this.state.sta +
      "&legendary=" + this.state.legendary +
      "&aquireable=" + this.state.aquireable +
      "&spawns=" + this.state.spawns +
      "&regional=" + this.state.regional +
      "&raidable=" + this.state.raidable +
      "&hatchable=" + this.state.hatchable +
      "&shiny=" + this.state.shiny +
      "&nest=" + this.state.nest +
      "&new=" + this.state.new +
      "&non_gettable=" + this.state.non_gettable +
      "&future_evolve=" + this.state.future_evolve +
      "&cp40=" + this.state.cp40 +
      "&cp39=" + this.state.cp39, { method: 'POST' });
    event.preventDefault();
    this.setState({
      showModalAdd: false
    });
    this.selectPokemon();
  }

  updatePokemon = (event) => {
    fetch('back-end/updateDB.php?id="' + this.state.selectedPokemonId +
      "&name=" + this.state.nameU +
      "&pokedex_number=" + this.state.pokedex_numberU +
      "&img_name=" + this.state.img_nameU +
      "&generation=" + this.state.generationU +
      "&evolution_stage=" + this.state.evolution_stageU +
      "&evolved=" + this.state.evolvedU +
      "&family_id=" + this.state.family_idU +
      "&cross_gen=" + this.state.cross_genU +
      "&type_1=" + this.state.type_1U +
      "&type_2=" + this.state.type_2U +
      "&weather_1=" + this.state.weather_1U +
      "&weather_2=" + this.state.weather_2U +
      "&stat_total=" + this.state.stat_totalU +
      "&atk=" + this.state.atkU +
      "&def=" + this.state.defU +
      "&sta=" + this.state.staU +
      "&legendary=" + this.state.legendaryU +
      "&aquireable=" + this.state.aquireableU +
      "&spawns=" + this.state.spawnsU +
      "&regional=" + this.state.regionalU +
      "&raidable=" + this.state.raidableU +
      "&hatchable=" + this.state.hatchableU +
      "&shiny=" + this.state.shinyU +
      "&nest=" + this.state.nestU +
      "&new=" + this.state.newU +
      "&non_gettable=" + this.state.non_gettableU +
      "&future_evolve=" + this.state.future_evolveU +
      "&cp40=" + this.state.cp40U +
      "&cp39=" + this.state.cp39U, { method: 'POST' });
    event.preventDefault();
    this.setState({
      showModalUpdate: false
    });
    this.selectPokemon();
  };

  deletePokemon = () => {
    fetch('back-end/deleteDB.php?id="' + this.state.selectedPokemonId, { method: 'POST' });
    this.setState({
      showModalUpdate: false
    });
    this.selectPokemon();
  };





  render() {
    return (
      <div className="App">
        <header className="App-header text-center">
          <img src={PokeIcon} className="app-logo mt-2" alt="logo" />
        </header>

        <div className="search-add mx-auto">
          <this.modalAdd />
          <SearchBox changed={this.changeHandler} value={this.state.value} submit={this.handleSubmitSearch} />
        </div>
        <this.tableHeader />
        <this.modalUpd />
      </div>
    );
  }

  //Cria tabela com os dados encontrados
  createTable = () => {
    document.getElementById("table").innerHTML = '';
    const data = this.state.data;
    for (let len in data) {

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


      //Mostra modal de update e guarda id para UPDATE e DELETE
      let row = document.getElementById('table').insertRow();
      row.id = eval(id);
      row.onclick = () => {
        this.setState({
          showModalUpdate: true,
          selectedPokemonId: eval(id)
        });
        fetch('back-end/selectIdDB.php?id="' + eval(id), { method: 'POST' })
          .then(response => response.json())
          .then(json => {
            this.setState({ data: json })
            this.setState({
              nameU: this.state.data[0].name,
              pokedex_numberU: this.state.data[0].pokedex_number,
              img_nameU: this.state.data[0].img_name,
              generationU: this.state.data[0].generation,
              evolution_stageU: this.state.data[0].evolution_stage,
              evolvedU: this.state.data[0].evolved,
              family_idU: this.state.data[0].family_id,
              cross_genU: this.state.data[0].cross_gen,
              type_1U: this.state.data[0].type_1,
              type_2U: this.state.data[0].type_2,
              weather_1U: this.state.data[0].weather_1,
              weather_2U: this.state.data[0].weather_2,
              stat_totalU: this.state.data[0].stat_total,
              atkU: this.state.data[0].atk,
              defU: this.state.data[0].def,
              staU: this.state.data[0].sta,
              legendaryU: this.state.data[0].legendary,
              aquireableU: this.state.data[0].aquireable,
              spawnsU: this.state.data[0].spawns,
              regionalU: this.state.data[0].regional,
              raidableU: this.state.data[0].raidable,
              hatchableU: this.state.data[0].hatchable,
              shinyU: this.state.data[0].shiny,
              nestU: this.state.data[0].nest,
              newU: this.state.data[0].new,
              non_gettableU: this.state.data[0].non_gettable,
              future_evolveU: this.state.data[0].future_evolve,
              cp40U: this.state.data[0].cp40,
              cp39U: this.state.data[0].cp39
            })
          });
      };

      let cell = row.insertCell(0);
      let element = document.createElement("div");
      element.innerHTML = eval(id);
      cell.appendChild(element);

      cell = row.insertCell(1);
      element = document.createElement("div");
      element.innerHTML = eval(name);
      cell.appendChild(element);

      cell = row.insertCell(2);
      element = document.createElement("div");
      element.innerHTML = eval(generation);
      cell.appendChild(element);

      cell = row.insertCell(3);
      element = document.createElement("div");
      element.innerHTML = eval(evolution_stage);
      cell.appendChild(element);

      cell = row.insertCell(4);
      element = document.createElement("div");
      element.innerHTML = eval(evolved);
      cell.appendChild(element);

      cell = row.insertCell(5);
      element = document.createElement("div");
      element.innerHTML = eval(type_1);
      cell.appendChild(element);

      cell = row.insertCell(6);
      element = document.createElement("div");
      element.innerHTML = eval(type_2);
      cell.appendChild(element);

      cell = row.insertCell(7);
      element = document.createElement("div");
      element.innerHTML = eval(weather_1);
      cell.appendChild(element);

      cell = row.insertCell(8);
      element = document.createElement("div");
      element.innerHTML = eval(weather_2);
      cell.appendChild(element);

      cell = row.insertCell(9);
      element = document.createElement("div");
      element.innerHTML = eval(stat_total);
      cell.appendChild(element);

      cell = row.insertCell(10);
      element = document.createElement("div");
      element.innerHTML = eval(atk);
      cell.appendChild(element);

      cell = row.insertCell(11);
      element = document.createElement("div");
      element.innerHTML = eval(def);
      cell.appendChild(element);

      cell = row.insertCell(12);
      element = document.createElement("div");
      element.innerHTML = eval(sta);
      cell.appendChild(element);

      cell = row.insertCell(13);
      element = document.createElement("div");
      element.innerHTML = eval(legendary);
      cell.appendChild(element);

      cell = row.insertCell(14);
      element = document.createElement("div");
      element.innerHTML = eval(aquireable);
      cell.appendChild(element);
    }
  }
}
export default App;
