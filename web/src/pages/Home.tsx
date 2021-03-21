import { Container, MobileButtonsContainer, MobileContent } from "../styles/pages/home";
import { BiSearchAlt, BiListPlus } from "react-icons/bi";
import { IoIosList } from "react-icons/io";

function Home() {
    return (
        <Container>
            <MobileContent>
                <h1> Pokémon Go </h1>

                <MobileButtonsContainer>


                    <div>
                        <BiSearchAlt />
                        Pesquisar
                    </div>

                    <div>
                        <BiListPlus />
                        Adicionar
                    </div>

                    <div>
                        <IoIosList />
                        Lista
                    </div>

                </MobileButtonsContainer>

            </MobileContent>
        </Container>
    )
}

export default Home