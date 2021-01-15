import Pokeball from '../Icons/patterns/Pokeball';

import Bug from "../Icons/types/Bug";
import Dark from "../Icons/types/Dark";
import Dragon from "../Icons/types/Dragon";
import Electric from "../Icons/types/Electric";
import Fairy from "../Icons/types/Fairy";
import Fighting from "../Icons/types/Fighting";
import Fire from "../Icons/types/Fire";
import Flying from "../Icons/types/Flying";
import Ghost from "../Icons/types/Ghost";
import Grass from "../Icons/types/Grass";
import Ground from "../Icons/types/Ground";
import Ice from "../Icons/types/Ice";
import Normal from "../Icons/types/Normal";
import Poison from "../Icons/types/Poison";
import Psychic from "../Icons/types/Psychic";
import Rock from "../Icons/types/Rock";
import Steel from "../Icons/types/Steel";
import Water from "../Icons/types/Water";


import './item.css';

function PokeItem(props){

    if(props.type1 === "Bug") {
        return (
            <>
                <div class="card info-bug container ">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Bug fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Dark") {
        return (
            <>
                <div class="card info-dark container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Dark fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Dragon") {
        return (
            <>
                <div class="card info-dragon container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Dragon fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Fairy") {
        return (
            <>
                <div class="card info-fairy container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Fairy fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Fire") {
        return (
            <>
                <div class="card info-fire container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Fire fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Grass") {
        return (
            <>
                <div class="card info-grass container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Grass fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Ghost") {
        return (
            <>
                <div class="card info-ghost container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Ghost fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Ground") {
        return (
            <>
                <div class="card info-ground container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Ground fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Ice") {
        return (
            <>
                <div class="card info-ice container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Ice fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Electric") {
        return (
            <>
                <div class="card info-electric container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Electric fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Fighting") {
        return (
            <>
                <div class="card info-fighting container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Fighting fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Flying") {
        return (
            <>
                <div class="card info-flying container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Flying fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Normal") {
        return (
            <>
                <div class="card info-normal container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Normal fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Poison") {
        return (
            <>
                <div class="card info-poison container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Poison fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Psychic") {
        return (
            <>
                <div class="card info-psychic container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Psychic fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Steel") {
        return (
            <>
                <div class="card info-steel container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Steel fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Water") {
        return (
            <>
                <div class="card info-water container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Water fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    if(props.type1 === "Rock") {
        return (
            <>
                <div class="card info-rock container">
                    <div class="row">
                        <div class='col-75'>
                            <Pokeball fill="#FFF" width="65" height="65" class='pokeball'/>
                        </div>
                        <div class='col-sm mt-1 left pr-5'>
                            <h7 class='left'>{props.name}</h7>
                            <p class='left'> {props.weather1}, {props.weather2}</p>
                        </div>
                        <div class='col-sm center mr-3'>
                            <Rock fill="#FFF" width="25" height="25" class="right"/>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default PokeItem;