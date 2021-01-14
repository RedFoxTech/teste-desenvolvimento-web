import Pattern from '../Icons/patterns/10X5';
import Pokeball from "../Icons/patterns/Pokeball";
import './pokemon-info.css';
import Sun from '../Icons/weathers/Sun';
import Cloud from '../Icons/weathers/Cloud';
import Rain from '../assets/weathers/rain.svg';

function PokeInfo(){
    return(
        <>
        <div class="infos">
            <div class='row'>
                <div class='pokeball-styled col'>
                    <Pattern class='pattern-info' width='171' height='75'/>
                    <Pokeball fill="#FFF" width="150" height="150" class='pokeball-info'/>
                </div>
                <div class='col'>
                    <div class='glassmorfism mt-3'>
                        <div class='row'>
                            <div class='col center ml-5'>
                                <h7>Partialy Cloudly</h7>
                            </div>
                            <div class='col'>
                                <div class='cloud'>
                                    <Cloud fill="#FFF" width="50" height="50"/>
                                </div>
                                <div class='sun'>
                                <Sun width="50" heigh="50"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='glassmorfism-rain mt-3'>
                        <div class='row'>
                            <div class='col center ml-5'>
                                <h7>Rainy</h7>
                            </div>
                            <div class='col'>
                                <div class='rain'>
                                    <img src={Rain} width="50" height="50" class='rain'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
            <div class="col ml-3 mt-2 d-block stats">
                <h4>pokemon_name</h4>
                <p>regional <br/>
                not raidable <br/>
                hatchable<br/>
                shiny<br/>
                nest<br/>
                not gettable</p>
            </div>
                <div class="col stats mt-3" cellspacing="20">
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
                                <td>0000</td>
                                <td>0000</td>
                                <td>0000</td>
                                <td>0000</td>
                                <td>0000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    )
}

export default PokeInfo;