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

export default function(props){
    if(props.type === "Bug"){
        return(
            <div className="col-md type-bug mr-2 d-inline pt-2">
                <Bug fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Dark"){
        return(
            <div className="col-md type-dark mr-2 d-inline pt-2">
                <Dark fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Dragon"){
        return(
            <div className="col-md type-dragon mr-2 d-inline pt-2">
                <Dragon fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Electric"){
        return(
            <div className="col-md type-electric mr-2 d-inline pt-2">
                <Electric fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Fairy"){
        return(
            <div className="col-md type-fairy mr-2 d-inline pt-2">
                <Fairy fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Fighting"){
        return(
            <div className="col-md type-fighting mr-2 d-inline pt-2">
                <Fighting fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Fire"){
        return(
            <div className="col-md type-fire mr-2 d-inline pt-2">
                <Fire fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Flying"){
        return(
            <div className="col-md type-flying mr-2 d-inline pt-2">
                <Flying fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Grass"){
        return(
            <div className="col-md type-grass mr-2 d-inline pt-2">
                <Grass fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Ghost"){
        return(
            <div className="col-md type-ghost mr-2 d-inline pt-2">
                <Ghost fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Ground"){
        return(
            <div className="col-md type-ground mr-2 d-inline pt-2">
                <Ground fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Ice"){
        return(
            <div className="col-md type-ice mr-2 d-inline pt-2">
                <Ice fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Normal"){
        return(
            <div className="col-md type-normal mr-2 d-inline pt-2">
                <Normal fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Poison"){
        return(
            <div className="col-md type-poison mr-2 d-inline pt-2">
                <Poison fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Psychic"){
        return(
            <div className="col-md type-psychic mr-2 d-inline pt-2">
                <Psychic fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Rock"){
        return(
            <div className="col-md type-rock mr-2 d-inline pt-2">
                <Rock fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Steel"){
        return(
            <div className="col-md type-steel mr-2 d-inline pt-2">
                <Steel fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
    if(props.type === "Water"){
        return(
            <div className="col-md type-water mr-2 d-inline pt-2">
                <Water fill="#FFF" width="25" height="25"/>
                <h7>{props.type}</h7>
            </div>
        )
    }
}