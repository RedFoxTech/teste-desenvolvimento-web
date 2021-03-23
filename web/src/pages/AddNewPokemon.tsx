import { useContext, useState } from "react";
import { PokemonApiContext } from "../contexts/pokemonApi";
import { Container, ModalError } from "../styles/pages/addNewPokemon";


function AddNewPokemon() {

    const { newPokemon } = useContext(PokemonApiContext);
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

    // Valor da propiedade 100% CP 39
    const [prop1, setProp1] = useState<number>(0);
    // Valor da propiedade 100% CP 40
    const [prop2, setProp2] = useState<number>(0);
    const [ATK, setATK] = useState<number>(0);
    const [Aquireable, setAquireable] = useState<0 | 1>(0);
    const [CrossGen, setCrossGen] = useState<0 | 1>(0);
    const [DEF, setDEF] = useState<number>(0);
    const [EvolutionStage, setEvolutionStage] = useState<number>(0);
    const [Evolved, setEvolved] = useState<0 | 1>(0);
    const [FamilyID, setFamilyId] = useState<number>(0);
    const [FutureEvolve, setFutureEvolve] = useState<0 | 1>(0);
    const [Generation, setGeneration] = useState<number>(0);
    const [Hatchable, setHatchable] = useState<number>(0);
    const [ImgName, setImageName] = useState<number>(0);
    const [Legendary, setLegendary] = useState<0 | 1>(0);
    const [Name, setName] = useState<string>('');
    const [Nest, setNest] = useState<0 | 1>(0);
    const [New, setNew] = useState<0 | 1>(0);
    const [NotGettable, setNotGettable] = useState<0 | 1>(0);
    const [PokedexNumber, setPokedexNumber] = useState<number>(0);
    const [Raidable, setRaidable] = useState<0 | 1>(0);
    const [Regional, setRegional] = useState<0 | 1>(0);
    const [Row, setRow] = useState<number>(0);
    const [STA, setSTA] = useState<number>(0);
    const [STATTOTAL, setSTATTOTAL] = useState<number>(0);
    const [Shiny, setShiny] = useState<0 | 1>(0);
    const [Type1, setType1] = useState<string>('');
    const [Type2, setType2] = useState<string>('');
    const [Weather1, setWeather1] = useState<string>('');
    const [Weather2, setWeather2] = useState<string>('');
    const [Spawns, setSpawns] = useState<0 | 1>(0);


    function handleCreatePokemon(event: any) {
        let isEveryThingClear = false;
        const pokemonInfos: any = {
            "Evolution Stage": EvolutionStage,
            "100% CP @ 39": prop1,
            "100% CP @ 40": prop2,
            ATK,
            Aquireable: Aquireable,
            "Cross Gen": CrossGen,
            DEF,
            Evolved,
            FamilyID,
            "Future Evolve": FutureEvolve,
            Generation,
            Hatchable,
            "Img name": ImgName,
            Name,
            Legendary,
            Nest,
            New,
            "Not-Gettable": NotGettable,
            "Pokedex Number": PokedexNumber,
            Raidable,
            Regional,
            Row,
            STA,
            "STAT TOTAL": STATTOTAL,
            Shiny,
            "Type 1": Type1,
            "Type 2": Type2,
            "Weather 1": Weather1,
            "Weather 2": Weather2,
            Spawns
        }

        for (let key in pokemonInfos) {
            const value = pokemonInfos[key];
            if (typeof value === 'string' && value === '') {
                isEveryThingClear = false;
                return setShowErrorModal(true);
            } 

            isEveryThingClear = true
        }

        if (isEveryThingClear) {
            newPokemon(pokemonInfos)
        }


    }

    return (
        <Container>
            <h1> Adicionar novo pokémon </h1>

            .

            {showErrorModal && (
                <ModalError>
                    <main>

                        <h1>Erro!</h1>
                        <p> Por favor preencha todos os campos corretamente. </p>

                        <button onClick={() => setShowErrorModal(false)}> Entendi</button>
                    </main>
                </ModalError>
            )}

            <label htmlFor="prop1">
                <span>
                    100% CP @ 39
                    </span>
                <input
                    id="prop1"
                    type='number'
                    value={prop1}
                    onChange={event => setProp1(event.target.value as any)}
                    required
                />
            </label>

            <label htmlFor="prop2">
                <span>
                    100% CP @ 40
                    </span>
                <input
                    id="prop2"
                    type='number'
                    value={prop2}
                    onChange={event => setProp2(event.target.value as any)}
                    required
                />
            </label>

            <label htmlFor="ATK">
                <span>
                    ATK
                    </span>
                <input
                    id="ATK"
                    type='number'
                    value={ATK}
                    onChange={event => setATK(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Aquireable">
                <span>
                    Aquireable
                    </span>
                <input
                    id="Aquireable"
                    type='number'
                    value={Aquireable}
                    onChange={event => setAquireable(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="CrossGen">
                <span>
                    Cross Gen
                    </span>
                <input
                    id="CrossGen"
                    type='number'
                    value={CrossGen}
                    onChange={event => setCrossGen(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="DEF">
                <span>
                    DEF
                    </span>
                <input
                    id="DEF"
                    type='number'
                    value={DEF}
                    onChange={event => setDEF(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="EvolutionStage">
                <span>
                    Evolution Stage
                    </span>
                <input
                    id="EvolutionStage"
                    type='number'
                    value={EvolutionStage}
                    onChange={event => setEvolutionStage(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Evolved">
                <span>
                    Evolved
                    </span>
                <input
                    id="Evolved"
                    type='number'
                    value={Evolved}
                    onChange={event => setEvolved(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="FamilyId">
                <span>
                    FamilyId
                    </span>
                <input
                    id="FamilyId"
                    type='number'
                    value={FamilyID}
                    onChange={event => setFamilyId(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="FutureEvolve">
                <span>
                    Future Evolved
                    </span>
                <input
                    id="FutureEvolve"
                    type='number'
                    value={FutureEvolve}
                    onChange={event => setFutureEvolve(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Generation">
                <span>
                    Generation
                    </span>
                <input
                    id="Generation"
                    type='number'
                    value={Generation}
                    onChange={event => setGeneration(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Hatchable">
                <span>
                    Hatchable
                    </span>
                <input
                    id="Hatchable"
                    type='number'
                    value={Hatchable}
                    onChange={event => setHatchable(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="ImgName">
                <span>
                    Img Name
                    </span>
                <input
                    id="ImgName"
                    type='number'
                    value={ImgName}
                    onChange={event => setImageName(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Legendary">
                <span>
                    Legendary
                    </span>
                <input
                    id="Legendary"
                    type='number'
                    value={Legendary}
                    onChange={event => setLegendary(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Name">
                <span>
                    Name
                    </span>
                <input
                    id="Name"
                    type='text'
                    value={Name}
                    onChange={event => setName(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Nest">
                <span>
                    Nest
                    </span>
                <input
                    id="Nest"
                    type='number'
                    value={Nest}
                    onChange={event => setNest(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="New">
                <span>
                    New
                    </span>
                <input
                    id="New"
                    type='number'
                    value={New}
                    onChange={event => setNew(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="NotGettable">
                <span>
                    Not-Gettable
                    </span>
                <input
                    id="NotGettable"
                    type='number'
                    value={NotGettable}
                    onChange={event => setNotGettable(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="PokedexNumber">
                <span>
                    Pokedex Number
                    </span>
                <input
                    id="PokedexNumber"
                    type='number'
                    value={PokedexNumber}
                    onChange={event => setPokedexNumber(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Raidable">
                <span>
                    Raidable
                    </span>
                <input
                    id="Raidable"
                    type='number'
                    value={Raidable}
                    onChange={event => setRaidable(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Regional">
                <span>
                    Regional
                    </span>
                <input
                    id="Regional"
                    type='number'
                    value={Regional}
                    onChange={event => setRegional(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Row">
                <span>
                    Row
                    </span>
                <input
                    id="Row"
                    type='number'
                    value={Row}
                    onChange={event => setRow(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="STA">
                <span>
                    STA
                    </span>
                <input
                    id="STA"
                    type='number'
                    value={STA}
                    onChange={event => setSTA(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="STATTOTAL">
                <span>
                    STAT TOTAL
                    </span>
                <input
                    id="STATTOTAL"
                    type='number'
                    value={STATTOTAL}
                    onChange={event => setSTATTOTAL(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Shiny">
                <span>
                    Shiny
                    </span>
                <input
                    id="Shiny"
                    type='number'
                    value={Shiny}
                    onChange={event => setShiny(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Spawns">
                <span>
                    Spawns
                    </span>
                <input
                    id="Spawns"
                    type='number'
                    value={Spawns}
                    onChange={event => setSpawns(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Type1">
                <span>
                    Type 1
                    </span>
                <input
                    id="Type1"
                    type='text'
                    value={Type1}
                    onChange={event => setType1(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Type2">
                <span>
                    Type 2
                    </span>
                <input
                    id="Type2"
                    type='text'
                    value={Type2}
                    onChange={event => setType2(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Weather1">
                <span>
                    Weather1
                    </span>
                <input
                    id="Weather1"
                    type='text'
                    value={Weather1}
                    onChange={event => setWeather1(event.target.value as any)}
                    required
                />
            </label>
            <label htmlFor="Weather2">
                <span>
                    Weather2
                    </span>
                <input
                    id="Weather2"
                    type='text'
                    value={Weather2}
                    onChange={event => setWeather2(event.target.value as any)}
                    required
                />
            </label>

            <button onClick={event => handleCreatePokemon(event as any)} type="submit"> Criar pokémon</button>
        </Container>

    );

}


export default AddNewPokemon;