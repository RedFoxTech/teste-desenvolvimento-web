import React from 'react';
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
import './type.css';

function Type(props){
    if(props.type === "bug"){
        return(
            <div className="col-md type-bug mr-2 d-inline pt-2">
                <Bug fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "dark"){
        return(
            <div className="col-md type-dark mr-2 d-inline pt-2">
                <Dark fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "dragon"){
        return(
            <div className="col-md type-dragon mr-2 d-inline pt-2">
                <Dragon fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "electric"){
        return(
            <div className="col-md type-electric mr-2 d-inline pt-2">
                <Electric fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "fairy"){
        return(
            <div className="col-md type-fairy mr-2 d-inline pt-2">
                <Fairy fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "fighting"){
        return(
            <div className="col-md type-fighting mr-2 d-inline pt-2">
                <Fighting fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "fire"){
        return(
            <div className="col-md type-fire mr-2 d-inline pt-2">
                <Fire fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "flying"){
        return(
            <div className="col-md type-flying mr-2 d-inline pt-2">
                <Flying fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "grass"){
        return(
            <div className="col-md type-grass mr-2 d-inline pt-2">
                <Grass fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "ghost"){
        return(
            <div className="col-md type-ghost mr-2 d-inline pt-2">
                <Ghost fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "ground"){
        return(
            <div className="col-md type-ground mr-2 d-inline pt-2">
                <Ground fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "ice"){
        return(
            <div className="col-md type-ice mr-2 d-inline pt-2">
                <Ice fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "normal"){
        return(
            <div className="col-md type-normal mr-2 d-inline pt-2">
                <Normal fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "poison"){
        return(
            <div className="col-md type-poison mr-2 d-inline pt-2">
                <Poison fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "psychic"){
        return(
            <div className="col-md type-psychic mr-2 d-inline pt-2">
                <Psychic fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "rock"){
        return(
            <div className="col-md type-rock mr-2 d-inline pt-2">
                <Rock fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "steel"){
        return(
            <div className="col-md type-steel mr-2 d-inline pt-2">
                <Steel fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50 right"}>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "water"){
        return(
            <div className="col-md type-water mr-2 d-inline pt-2">
                <Water fill="#FFF" width="25" height="25"/>
                <h7 className={"w-50"}>{props.type}</h7>
            </div>
        )
    } else {
        return(<p> Não foi possível identificar o tipo de Pokémon</p>)
    }
}
export default Type;