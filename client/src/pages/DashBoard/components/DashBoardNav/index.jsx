import {
    AiFillHome,
    AiOutlineMenu,
    AiOutlinePlus,
    AiOutlineSearch,
} from "react-icons/ai";
import {
    Box,
    Button,
    CloseButton,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Switch,
    Tag,
    VStack,
    chakra,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";
import logo from "./assets/navbar-logo.svg"

export default function DashBoardNav({ handleSearch, search, tags, handleTags }) {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">

                    {/* FROM HERE ON WE HAVE THE MOBILE SECTION */}
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Button w="full" variant="ghost" >
                                    <Link to="/">Dashboard</Link>
                                </Button>
                                <Button
                                    w="full"
                                    variant="ghost"
                                >
                                    <Link to="/create">New Pokemon</Link>
                                </Button>

                            </VStack>
                        </Box>
                        <chakra.a
                            href="/"
                            title="Choc Home Page"
                            display="flex"
                            alignItems="center"
                        >
                            <Image
                                marginRight="2rem"
                                src={logo}
                                width="100px"
                                alt="nav-bar=logo"
                                sx={{
                                    "@media (max-width: 720px)": {
                                        display: "none",
                                    },
                                }}
                            />
                        </chakra.a>

                        {/* FROM HERE ON WE HAVE THE DESKTOP SECTION */}
                        <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
                            <Button
                                w="full"
                                variant="ghost"
                                leftIcon={<AiFillHome />}
                            >
                                <Link to="/">Dashboard</Link>
                            </Button>
                            <Button
                                w="full"
                                variant="ghost"
                                leftIcon={<AiOutlinePlus />}
                            >
                                <Link to="/create">New Pokemon</Link>
                            </Button>

                        </HStack>
                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >


                        <FormControl display="flex" alignItems="center" >
                            <FormLabel htmlFor="email-alerts" mb="0" >
                                <Tag variant="solid" colorScheme="teal">
                                    Tags ?
                                </Tag>
                            </FormLabel>
                            <Switch
                                onChange={() => handleTags()}
                                isChecked={tags}
                                id="email-alerts" />
                        </FormControl>


                        <InputGroup >
                            <InputLeftElement
                                pointerEvents="none"
                                children={<AiOutlineSearch />}
                            />
                            <Input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={e => {
                                    handleSearch(e.target.value)
                                }}
                            />
                        </InputGroup>


                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
}
