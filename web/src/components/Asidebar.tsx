import { Container } from "../styles/components/asidebar";
import { BiSearchAlt, BiListPlus } from "react-icons/bi";
import { IoIosList } from "react-icons/io";
import { useHistory } from "react-router";

function Asidebar () {

    const history = useHistory();

    function handleNavigate( path: string ) {
        history.push(path)
    }

    
    return (
        <Container>
            <ul>
                <li onClick={() => handleNavigate("/search")}> Pesquisar <BiSearchAlt /> </li>
                <li onClick={() => handleNavigate("/addNewPokemon")}>  Adicionar <BiListPlus /> </li>
                <li onClick={() => handleNavigate("/listOfPokemons")}>  Lista <IoIosList /> </li>
            </ul>
        </Container>   
    )
}

export default Asidebar;