import { Banner, Page, Content } from "./style";
import { PokemonSearch } from "../../Components/InputSection"


export function Home() {
    return (
        <Page>
            <Banner />
            <PokemonSearch/>
        </Page>)
}  