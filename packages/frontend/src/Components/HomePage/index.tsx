import React from "react";
import classNames from "classnames";
import PokemonCard from "../PokemonCard";

import { pokemonContainer } from '@styles/Components/homePage.module.scss'
import PokemonType from "../../../../shared/declarations/enums/PokemonType";
import PokemonWeather from "../../../../shared/declarations/enums/Weather";
import Pokemon from "../../../../shared/declarations/interfaces/Pokemon";
import { CachedApiFactory /* ,clearCacheByKey */ } from "@services/ApiWithCache";
import ApiFactory from "@services/Api";
import toast, { Toaster } from "react-hot-toast";

class HomePage extends React.PureComponent<null, { pokemons: Pokemon[] }>{
    private paginationId = "";
    private isFetching = false;
    private scrollObserverAttached = false;
    private scrollObserver: { callback: () => void };
    private readonly apiFactory = ApiFactory();

    constructor(props: null) {
        super(props);
        this.state = {
            pokemons: [],
        };

        /** Observer para a posição de scroll, caso tenhamos chegado em 75% da
         * tela, carregamos mais pokemons usando this.updatePokemonsPage.
         */

        this.scrollObserver = {
            callback: () => {
                if (window.innerHeight + window.scrollY >= (
                    window.document.body.scrollHeight - window.innerHeight) * 0.75
                ) {
                    this.updatePokemonsPage();
                }
            },
        };
    }

    /** Insere this.scrollObserver no DOM */
    private attachScrollObserver() {
        if (!this.scrollObserverAttached) {
            window.addEventListener("scroll", this.scrollObserver.callback);
            this.scrollObserverAttached = true;
        }
    }


    private async fetchPokemonsPage(
        useCache = true,
    ): Promise<{ data: Pokemon[], fromCache: boolean } | void> {
        if (this.isFetching) {
            return;
        }

        this.isFetching = true;
        try {
            const { paginationId } = this;

            /** API com chave de cache */
            const { api } = useCache ?
                CachedApiFactory(`/Pokemon/getPage/${paginationId}`) :
                this.apiFactory;


            const response = await api.get(`/Pokemon/getPage/${paginationId}`);
            this.isFetching = false;
            // console.log(response);
            const { fromCache } = response.request;

            const { data } = response;

            return { data, fromCache };

        } catch (error) {
            console.log(error);
            toast.error(error.message);
            this.isFetching = false;
        }
    }

    private async updatePokemonsPage() {
        if (this.isFetching) {
            return;
        }

        this.fetchPokemonsPage().then(async (pokemons) => {
            // Pega o ultimo elemento da Array pokemons (cuidado com off-by-one)
            if (!pokemons) {
                return;
            }
            const lastPokemon = pokemons.data[pokemons.data.length - 1];

            let originalState: Array<Pokemon> | undefined = undefined;
            if (pokemons.fromCache) {
                // Vamos pegar do cache por agora, mas depois atualizaremos
                this.isFetching = true;
                originalState = this.state.pokemons;
            } else {
                // esse ítem já ta atualizado, avance para o próximo
                this.paginationId = lastPokemon._id || '';
            }

            this.setState({ pokemons: [...(this.state.pokemons || []), ...pokemons.data] })

            if (originalState) { // Se a requisição for retornada do cache
                // Pegou do cache, faça a requisição novamente para atualizar
                // os dados e evitar a "viagem no tempo" (conteúdo antigo)
                // clearCacheByKey(`/Pokemon/getPage/${this.paginationId}`);
                this.isFetching = false; // Se não a funçaão de fetch não roda
                const { data } = await this.fetchPokemonsPage(false) || { data: [] };
                this.setState({ pokemons: [...originalState, ...data] });
                // Avança para a próxima página
                const _lastPokemon = data[data.length - 1];
                this.paginationId = _lastPokemon._id || '';
            }
        }).catch(error => {
            toast.error(error.message);
            console.log(error);
            this.isFetching = false;
        });
    }

    componentDidMount(): void {
        this.attachScrollObserver();
        this.updatePokemonsPage();
    }

    /** Remove this.scrollObserver do DOM */
    componentWillUnmount(): void {
        this.scrollObserverAttached = false;
        window.removeEventListener("scroll", this.scrollObserver.callback);
    }

    private suspensePokemons(): React.ReactNode[] {
        const pokemons: React.ReactNode[] = [];
        for (let i = 0; i <= 9; i++) {
            pokemons.push(
                <PokemonCard key={i} pokemon={{
                    row: -1, name: 'Carregando...', pokedexId: -1, imageName: 'invalid', generation: 'Carregando...', type1: PokemonType.NORMAL, weather1: PokemonWeather.SUNNY, type2: PokemonType.NORMAL, weather2: PokemonWeather.SUNNY, staminaHP: -1, attack: -1, defense: -1, evolutionState: 'Carregando...', evolved: false, crossGeneration: false, statsSum: -1, legendary: false, acquirable: false, spawns: false, regional: false, raidable: -1, hatchable: -1, shiny: false, nest: false, isNewPokemon: false, notGettable: true, fullCPLevel39: -1, fullCPLevel40: -1, futureEvolve: false,
                }}
                    imgSrc="Assets/fa-pokemon-arena.svg"
                />
            );
        }
        return pokemons;
    }

    render(): React.ReactNode {

        const { pokemons = null } = this.state;
        const importSpritesPromise = import("@src/Services/ImportAllPokemonSprites");

        return (<>
            <Toaster />
            <main className={classNames(["container", "bg-light", pokemonContainer])} >
                {pokemons?.length
                    ? pokemons.map((pokemon) => (
                        <PokemonCard
                            pokemon={pokemon}
                            key={pokemon._id}
                            imgSrc={`./${pokemon.imageName}.png`}
                            imgImport
                            importSpritesPromise={(async () => (importSpritesPromise))()}
                        />
                    ))
                    : this.suspensePokemons()
                }

            </main>
        </>);
    }
}

export default HomePage;
