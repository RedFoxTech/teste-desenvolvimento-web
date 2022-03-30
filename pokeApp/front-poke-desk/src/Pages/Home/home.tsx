import { Banner, Page, Content } from "./style";
import { PokemonSearch } from "../../Components/InputSection"
import axios from "axios";
import { useEffect, useState } from "react";
import { POKEMONS_PER_PAGE } from "../../utils/constants";
import Pokemons from "../../Components/pokemons/pokemons"

export function Home() {

    const [data, setData] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    const dados = async () => {
        const res = await axios.post("http://localhost:1337/pokemon")
        setData(res.data)
        setTotalPages(Math.ceil(res.data.length / POKEMONS_PER_PAGE));
    }

    useEffect(() => {
        dados()
    }, [])
 
    const handleClick = (num: any) => {
        setPage(num);
    }

    return (
        <Page>
            <Banner />
            <PokemonSearch />
            {/* <Content>
                <Pokemons pokemons={data} page={page} totalPages={totalPages} handleClick={handleClick}/>
            </Content> */}
        </Page>)
}  