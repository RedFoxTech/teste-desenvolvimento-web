import { Container, MobileButtonsContainer, MobileContent, DesktopContent } from "../styles/pages/home";
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

            <DesktopContent>
                <h1> Pokémon Go </h1>

                <p> Por favor selecione oque deseja fazer no menu ao lado.</p>

            </DesktopContent>
        </Container>
    )
}

export default Home