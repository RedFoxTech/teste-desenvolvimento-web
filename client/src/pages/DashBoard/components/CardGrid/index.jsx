import { Grid } from "@chakra-ui/react"

import Card from "../Card"
import React, { useState, useEffect } from "react"

export default function CardGrid({ pokemons }) {
    const [renderPokemons, setPokemons] = useState([])
    useEffect(() => {
        setPokemons(pokemons)
    }, [pokemons])

    return (
        <Grid
            templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)"
                // "repeat(4, 1fr)"
            ]}
            marginTop="3rem"
            gap={1}
            width="100%"
        >
            {
                renderPokemons.map(e => (
                    <Card
                        key={e.pokedex_number}
                        pokemon={e}
                    />
                ))
            }
        </Grid>
    )
}