import {
    Box,
    Center,
    Container,
    Image,
    Spinner,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import UpdateForm from "./components/UpdateForm";
import { api } from "../../services/api"
import { useParams } from "react-router-dom";

export default function DetailView() {
    const [uri, setUri] = useState("")

    const onUpdate = async (data) => {
        await api.put("/pokemon/update", data)
            .then(function (response) {
                alert("Success !")
            })
            .catch(function (error) {
                alert("Something went wrong. \n Try Again.")
            });
    };


    const onDelete = async (data) => {
        await api.delete(`/pokemon/delete/${data}`)
            .then(function (response) {
                alert("Success !")
                window.location.href = "/";
            })
            .catch(function (error) {
                alert("Something went wrong. \n Try Again.")
            });
    };

    let { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [isWaiting, setIsWating] = useState(false)

    const fetchPokemon = async () => {
        try {
            setIsWating(true)
            const response = await api.get(`/pokemon/${id}`)
            setPokemon(response.data)
            setUri(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.pokedex_number}.png`)
            setIsWating(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { fetchPokemon() }, [])

    return (
        <React.Fragment>
            <Navbar />

            {
                isWaiting
                    ? (
                        <Center h="360px">
                            <Spinner color="red.500" />
                        </Center>
                    ) : (
                        <Container color="black">

                            <Center marginTop="2.5rem" marginBlock="2.5rem">
                                <Box boxSize="sm">
                                    <Image src={uri} alt="Segun Adebayo" />
                                </Box>
                            </Center>
                            <UpdateForm
                                id={pokemon.id}
                                onUpdate={onUpdate}
                                onDelete={onDelete}
                                pokemon={pokemon}
                            />
                        </Container>
                    )
            }

        </React.Fragment >
    )
}