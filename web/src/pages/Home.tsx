import { Container, MobileButtonsContainer, MobileContent } from "../styles/pages/home";
import { BiSearchAlt, BiListPlus } from "react-icons/bi";
import { IoIosList } from "react-icons/io";

interface IHomeProps { 
    history: {
        push: (path: string) => void; 
    }
}

function Home(props: IHomeProps) {

    function handleNavigate(path: string) {
        props.history.push(path);
    }
    
    return (
        <Container>
            <MobileContent>
                <h1> Pokémon Go </h1>

                <MobileButtonsContainer>


                    <div onClick={() => handleNavigate("/search")}>
                        <BiSearchAlt />
                        Pesquisar
                    </div>

                    <div onClick={() => handleNavigate("/addNewPokemon")}>
                        <BiListPlus />
                        Adicionar
                    </div>

                    <div onClick={() => handleNavigate("/listOfPokemons")}>
                        <IoIosList />
                        Lista
                    </div>

                </MobileButtonsContainer>

            </MobileContent>
        </Container>
    )
}

export default Home