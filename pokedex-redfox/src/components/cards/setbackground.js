export  function returnBackground(color){
    switch(color){
        case "grass":
            return "#a3ff84";
            break;
        case "poison":
            return "#ad3aad";
            break;
        case "water":
            return "lightblue";
            break;
        case "fire":
            return "#ff790c";
            break;
        case "bug":
            return "#C2CE63"
            break;
        case "flying":
            return "#C2B2F5"
            break;
        case "normal":
            return "#CDC495"
            break;
        case "electric":
            return "#FAE47D"
            break;
        case "ground":
            return "#baa266"
            break;
        case "fairy":
            return "#EE99AC"
            break;
        case "fighting":
            return "#C03028"
            break;
        case "psychic":
            return "#F85888"
            break;
        case "rock":
            return "#B8A038"
            break;
        case "ghost":
            return "#9B8BB7";
            break;
        case "ice":
            return "#98D8D8"
            break;
        case "dragon":
            return "#7038F8"
            break;
        case "dark":
            return "#9B8B7F";
            break;
        case "steel":
            return "#B8B8D0"
            break;
        default:
            return ""
            break;
    }       
    
}