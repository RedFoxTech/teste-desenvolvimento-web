import { useEffect, useState } from "react";
import { Container, InfosArea } from "../styles/components/pokemonItem";
import { BsEyeFill } from "react-icons/bs";


function PokemonItem({ pokemonObj }: any) {
    const [arrayOfTitlesAndValues, setArrayOfTitlesAndValues] = useState<[[string, string | number]]>();;
    const [mainTitles, setMainTitles] = useState<[[string, string | number]]>();

    useEffect(() => {
        getTitlesAndValues();

        return getTitlesAndValues
        
    },[])

    function getTitlesAndValues() {
        let titlesRet: any = [];
        let mainTitlesRet: any = [];

        for (let title in pokemonObj) {

            if (title === "Row" || title === "Name") {
                mainTitlesRet.push([title, pokemonObj[title]]);

            } else {
                titlesRet.push([title, pokemonObj[title]])
            }

        }

        setMainTitles(mainTitlesRet)
        setArrayOfTitlesAndValues(titlesRet);
    }




    return (
        <Container>
            <InfosArea>
                <main>

                    <div className="titles">

                        {mainTitles?.map(title => (<h3 key={title[0]}> {title[0]}</h3>))}
                        {arrayOfTitlesAndValues?.map((columnName, index) => <h3 key={index}> {columnName[0]} </h3>)}
                    </div>
                    <div className="values">
                        {mainTitles?.map(title => (<h3 key={title[1]}> {title[1]}</h3>))}

                        {arrayOfTitlesAndValues?.map((columnName, index) => <h3 key={index}> {columnName[1]} </h3>)}
                    </div>
                </main>
            </InfosArea>

            <BsEyeFill />

        </Container>
    )
}

export default PokemonItem;