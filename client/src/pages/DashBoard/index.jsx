import { Center, Spinner } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

import CardGrid from "./components/CardGrid"
import DashBoardNav from "./components/DashBoardNav"
import Pagination from "./components/Pagination"
import { api } from "../../services/api"

export default function DashBoard() {
    const [pokemons, setPokemons] = useState([])
    const [isWaiting, setIsWating] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(16);

    const [tags, setTags] = useState(false)
    const [search, setSearch] = useState("");
    const [displayPokemons, setDisplay] = useState([])

    const handleTags = async () => {
        setTags(!tags)
    }

    const handleSearchChange = (value) => {
        setSearch(value)
        const newPokemons = pokemons.filter(e => {
            if (!tags) {
                if (e["name"].toLowerCase().includes(value?.toLowerCase())) {
                    return e;
                }
            } else {
                if (e["type1"]?.toLowerCase().includes(value?.toLowerCase())) return e;
                if (e["type2"]?.toLowerCase().includes(value?.toLowerCase())) return e;
                if (e["type3"]?.toLowerCase().includes(value?.toLowerCase())) return e;
            }

            return null
        })
        value.length === 0 ? setDisplay(pokemons) : setDisplay(newPokemons)
    }

    const fetchPokemons = async () => {
        try {
            setIsWating(true)
            const response = await api.get("/pokemon")
            setPokemons(response.data)
            setDisplay(response.data)
            setIsWating(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { fetchPokemons() }, [])

    // Get current posts
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = displayPokemons.slice(indexOfFirstCard, indexOfLastCard);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <React.Fragment>
            <DashBoardNav
                search={search}
                handleSearch={handleSearchChange}
                handleTags={handleTags}
                tags={tags}
            />
            {
                !isWaiting
                    ? (
                        <React.Fragment>
                            <CardGrid pokemons={currentCards} />
                            <Pagination
                                cardsPerPage={cardsPerPage}
                                totalCards={displayPokemons.length}
                                paginate={paginate}
                            />
                        </React.Fragment>
                    ) : (
                        <Center h="360px">
                            <Spinner color="red.500" />
                        </Center>
                    )
            }
        </React.Fragment>
    );
}
