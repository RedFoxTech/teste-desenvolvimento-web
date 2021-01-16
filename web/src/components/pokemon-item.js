import React from 'react';
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

function PokeItem(props) {
        if (props.type1 === "bug") {
            return (
                <>
                    <div className="card info-bug container ">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Bug fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "dark") {
            return (
                <>
                    <div className="card info-dark container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Dark fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "dragon") {
            return (
                <>
                    <div className="card info-dragon container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Dragon fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "fairy") {
            return (
                <>
                    <div className="card info-fairy container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Fairy fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "fire") {
            return (
                <>
                    <div className="card info-fire container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Fire fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "grass") {
            return (
                <>
                    <div className="card info-grass container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Grass fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "ghost") {
            return (
                <>
                    <div className="card info-ghost container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Ghost fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "ground") {
            return (
                <>
                    <div className="card info-ground container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Ground fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "ice") {
            return (
                <>
                    <div className="card info-ice container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm centermr-3'>
                                <Ice fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "electric") {
            return (
                <>
                    <div className="card info-electric container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Electric fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "fighting") {
            return (
                <>
                    <div className="card info-fighting container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Fighting fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "flying") {
            return (
                <>
                    <div className="card info-flying container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Flying fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "normal") {
            return (
                <>
                    <div className="card info-normal container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Normal fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "poison") {
            return (
                <>
                    <div className="card info-poison container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Poison fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "psychic") {
            return (
                <>
                    <div className="card info-psychic container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Psychic fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "steel") {
            return (
                <>
                    <div className="card info-steel container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Steel fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "water") {
            return (
                <>
                    <div className="card info-water container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Water fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
        if (props.type1 === "rock") {
            return (
                <>
                    <div className="card info-rock container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5 pl-0'>
                                <h7 className='left w-100'>{props.name}</h7>
                                <p className='left w-100'> {props.weather1} {props.weather2}</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                                <Rock fill="#FFF" width="25" height="25"/>
                            </div>
                        </div>
                    </div>

                </>
            )
        } else {
            return (
                <>
                    <div className="card info-rock container">
                        <div className="row">
                            <div className='col-75'>
                                <Pokeball fill="#FFF" width="65" height="65" className='pokeball r-anim'/>
                            </div>
                            <div className='col-sm mt-1 left pr-5'>
                                <h7 className='left'>Parece que não encontramos nada aqui!</h7>
                                <p className='left w-100'> Tente verificar o acesso ao banco de dados.</p>
                            </div>
                            <div className='col-sm center d-block mr-3 ml-5'>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
}

PokeItem.defaultProps = {}

export default PokeItem;