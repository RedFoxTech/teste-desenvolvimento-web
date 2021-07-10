import {
    Box,
    Center,
    Flex,
    HStack,
    Image,
    Link as StyleLink,
    Tag,
    chakra,
    useColorModeValue
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";

export default function Card({ pokemon }) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokedex_number}.png`
    return (
        <Flex
            p={5}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                w="240px"
                bg={useColorModeValue("white", "gray.800")}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                mx="auto"
            >
                <Image
                    w="full"
                    h={56}
                    fit="cover"
                    src={url}
                    alt="avatar"
                />

                <Box py={5} textAlign="center">
                    <Link to={`/info/${pokemon.pokedex_number}`}>
                        <StyleLink
                            display="block"
                            fontSize="2xl"
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                            marginBottom="1rem"
                        >
                            {pokemon.name}
                        </StyleLink>
                    </Link>
                    <chakra.span>
                        <Center w="full">
                            <HStack spacing={4}>
                                {pokemon.type1 && <Tag colorScheme="green">{pokemon.type1}</Tag>}
                                {pokemon.type2 && <Tag colorScheme="green">{pokemon.type2}</Tag>}
                            </HStack>
                        </Center>
                    </chakra.span>
                </Box>
            </Box>
        </Flex>
    );
};
