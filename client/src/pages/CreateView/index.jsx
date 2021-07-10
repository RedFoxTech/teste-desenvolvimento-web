import {
    Button,
    Checkbox,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    VStack
} from "@chakra-ui/react"

import Navbar from "../../components/Navbar";
import React from "react"
import { api } from "../../services/api"
import { useForm } from "react-hook-form";

export default function NewPokemon() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await api.post("/pokemon/new", data)
            .then(function (response) {
                window.location.href = "/";
                alert("Success !")
            })
            .catch(function (error) {
                alert("Something went wrong. \n Try Again.")
            });
    };

    return (
        <React.Fragment>


            <Navbar />


            <Container marginTop="5rem" color="black">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <FormControl p={4} id="name" isRequired>
                        <FormLabel>Pokemon Name</FormLabel>
                        <Input
                            {...register("name")}
                            type="name"
                            placeholder="EX: Pikachu..."
                        />
                    </FormControl>

                    <Flex>

                        <FormControl p={4} id="type1" isRequired>
                            <FormLabel>Type 1</FormLabel>
                            <Input
                                {...register("type1")}
                                type="type1"
                                placeholder="EX: Eletric..."
                            />
                        </FormControl>

                        <FormControl p={4} id="type2" >
                            <FormLabel>Type 2</FormLabel>
                            <Input
                                {...register("type2")}
                                type="type2"
                                placeholder="EX: Grass..."
                            />
                        </FormControl>

                        <FormControl p={4} id="pokedex_number" isRequired>
                            <FormLabel>Pokedex N°</FormLabel>
                            <Input
                                {...register("pokedex_number")}
                                type="pokedex_number"
                                placeholder="EX: 861..."
                            />
                        </FormControl>

                    </Flex>

                    <Flex>

                        <FormControl p={4} id="weather1" isRequired>
                            <FormLabel>Weather 1</FormLabel>
                            <Input
                                {...register("weather1")}
                                type="weather1"
                                placeholder="EX: Rainy..."
                            />
                        </FormControl>

                        <FormControl p={4} id="weather2" >
                            <FormLabel>Weather 2</FormLabel>
                            <Input
                                {...register("weather1")}
                                type="weather2"
                                placeholder="EX: Cloudy..."
                            />
                        </FormControl>

                    </Flex>

                    <Flex>

                        <FormControl isRequired p={4} id="family_id" >
                            <FormLabel>Family ID</FormLabel>

                            <NumberInput >
                                <NumberInputField {...register("family_id")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>

                        </FormControl>

                    </Flex>


                    <Flex justify="left">
                        <VStack align="left">

                            <Checkbox p={4} {...register("legendary")}> Legendary</Checkbox>
                            <Checkbox p={4} {...register("acquirable")}> Acquirable</Checkbox>
                            <Checkbox p={4} {...register("spawns")}> Spawns</Checkbox>

                            <Checkbox p={4} {...register("regional")}> Regional</Checkbox>
                            <Checkbox p={4} {...register("raidable")}> Raidable</Checkbox>
                            <Checkbox p={4} {...register("hatchable")}> Hatchable</Checkbox>

                        </VStack>


                        <VStack align="left">

                            <Checkbox p={4} {...register("shiny")}> Shiny</Checkbox>
                            <Checkbox p={4} {...register("nest")}> Sest</Checkbox>
                            <Checkbox p={4} {...register("new")}> New</Checkbox>

                            <Checkbox p={4} {...register("not_gettable")}> Not Gettable</Checkbox>
                            <Checkbox p={4} {...register("future_evolve")}> Future Evolve</Checkbox>
                            <Checkbox p={4} {...register("evolved")}>Evolved</Checkbox>


                        </VStack>

                    </Flex>

                    <Flex align="end">

                        <FormControl isRequired p={4} id="img_name" >
                            <FormLabel>Image Name</FormLabel>
                            <NumberInput  >
                                <NumberInputField {...register("img_name")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired p={4} id="generation" >
                            <FormLabel>Generation</FormLabel>
                            <NumberInput  >
                                <NumberInputField {...register("generation")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired p={4} id="evolution_stage" >
                            <FormLabel>Evolution Stage</FormLabel>
                            <NumberInput >
                                <NumberInputField {...register("evolution_stage")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                    </Flex>

                    <Flex>

                        <FormControl isRequired p={4} id="cross_gen" >
                            <FormLabel>Cross Gen</FormLabel>
                            <NumberInput  >
                                <NumberInputField {...register("cross_gen")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired p={4} id="stat_total" >
                            <FormLabel>Total Stats</FormLabel>
                            <NumberInput  >
                                <NumberInputField {...register("stat_total")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                    </Flex>

                    <Flex>

                        <FormControl isRequired p={4} id="atk" >
                            <FormLabel>ATK</FormLabel>
                            <NumberInput  >
                                <NumberInputField {...register("atk")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired p={4} id="def" >
                            <FormLabel>Def</FormLabel>
                            <NumberInput>
                                <NumberInputField  {...register("def")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired p={4} id="sta" >
                            <FormLabel>STA</FormLabel>
                            <NumberInput  >
                                <NumberInputField {...register("sta")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                    </Flex>

                    <Flex>

                        <FormControl isRequired p={4} id="full_cp_40" >
                            <FormLabel>100% CP @ 40</FormLabel>
                            <NumberInput  >
                                <NumberInputField {...register("full_cp_40")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired p={4} id="full_cp_39" >
                            <FormLabel>100% CP @ 39</FormLabel>
                            <NumberInput  >
                                <NumberInputField {...register("full_cp_39")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                    </Flex>

                    <Button type="submit"
                        colorScheme="blue"
                        w="full"
                        marginBottom="5rem"
                        marginTop="2rem"
                    >
                        Button
                    </Button>
                </form>


            </Container>


        </React.Fragment >
    )
}