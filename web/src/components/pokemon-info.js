import Pattern from '../assets/patterns/10x5.png';
import PatternWhite from '../Icons/patterns/10X5';
import Pokeball from "../assets/patterns/pokeball-gradient.png";
import Weather from "./weather";
import Type from "./type";

import './pokemon-info.css';

function PokeInfo(props) {
    console.log(props);
    if (props.type1 === "bug") {
            return (
                <>
                    <div class="infos info-bug container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        if (props.type1 === "dark") {
            return (
                <>
                    <div class="infos info-dark container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "dragon") {
            return (
                <>
                    <div class="infos info-dragon container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "electric") {
            return (
                <>
                    <div class="infos info-electric container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "fairy") {
            return (
                <>
                    <div class="infos info-fairy container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "fire") {
            return (
                <>
                    <div class="infos info-fire container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "grass") {
            return (
                <>
                    <div class="infos info-grass container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "ghost") {
            return (
                <>
                    <div class="infos info-ghost container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "ground") {
            return (
                <>
                    <div class="infos info-ground container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "fighting") {
            return (
                <>
                    <div class="infos info-fighting container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "flying") {
            return (
                <>
                    <div class="infos info-flying container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "normal") {
            return (
                <>
                    <div class="infos info-normal container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <PatternWhite fill="#FFF" class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "ice") {
            return (
                <>
                    <div class="infos info-ice container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "poison") {
            return (
                <>
                    <div class="infos info-poison container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "psychic") {
            return (
                <>
                    <div class="infos info-psychic container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "steel") {
            return (
                <>
                    <div class="infos info-steel container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if(props.type1 === "water"){
            return (
                <>
                    <div class="infos info-water container">
                        <div class='row'>
                            <div class='pokeball-styled col'>
                                <img src={Pattern} class='pattern-info' width='150' height='55'/>
                                <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                            </div>
                            <div class='col'>
                                {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                                <Weather weather={props.weather1}/>
                                {!!props.weather2 && <Weather weather={props.weather2}/>}
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md ml-3 mg-tm2">
                                <h4>{props.name}</h4>
                                {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                                <p>RAIDABLE {props.raidable} </p>
                                <p>HATCHABLE {props.hatchable} </p>
                                {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                                {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                                {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ATK</th>
                                        <th scope="col">DEF</th>
                                        <th scope="col">STA</th>
                                        <th scope="col">IV40</th>
                                        <th scope="col">IV39</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{props.atk}</td>
                                        <td>{props.def}</td>
                                        <td>{props.sta}</td>
                                        <td>{props.IV40}</td>
                                        <td>{props.IV39}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md row mt-3 mr-3">
                                <Type type={props.type1}/>
                                {!!props.type2 && <Type type={props.type2}/>}
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (props.type1 === "rock") {
        return (
            <>
                <div class="infos info-rock container">
                    <div class='row'>
                        <div class='pokeball-styled col'>
                            <img src={Pattern} class='pattern-info' width='150' height='55'/>
                            <img src={Pokeball} width="100" height="100" class='pokeball-info'/>
                        </div>
                        <div class='col'>
                            {!props.weather2 && <div className="empty mt-3 mb-3"></div>}
                            <Weather weather={props.weather1}/>
                            {!!props.weather2 && <Weather weather={props.weather2}/>}
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-md ml-3 mg-tm2">
                            <h4>{props.name}</h4>
                            {props.regional ? <p>REGIONAL </p> : <p>NOT REGIONAL</p>}
                            <p>RAIDABLE {props.raidable} </p>
                            <p>HATCHABLE {props.hatchable} </p>
                            {props.shiny ? <p>SHINY</p> : <p>NOT SHINY</p>}
                            {props.nest ? <p>NEST</p> : <p>NO NEST</p>}
                            {props.getable ? <p>GETABLE </p> : <p>NOT GETABLE</p>}
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">ATK</th>
                                    <th scope="col">DEF</th>
                                    <th scope="col">STA</th>
                                    <th scope="col">IV40</th>
                                    <th scope="col">IV39</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{props.atk}</td>
                                    <td>{props.def}</td>
                                    <td>{props.sta}</td>
                                    <td>{props.IV40}</td>
                                    <td>{props.IV39}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md row mt-3 mr-3">
                            <Type type={props.type1}/>
                            {!!props.type2 && <Type type={props.type2}/>}
                            <img src={`https://cdn.traction.one/pokedex/pokemon/${props.pokedexNumber}.png`} width="200" height="200" className="image anim"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
        else {
            return (
                <p>Que isso? ACHEI NADA</p>
            );
        }
}

export default PokeInfo;