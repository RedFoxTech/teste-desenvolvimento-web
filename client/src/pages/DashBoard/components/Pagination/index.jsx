import { Flex, chakra, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Pagination({ cardsPerPage, totalCards, paginate }) {
  const [currentPage, setCurrent] = useState(1)
  const numOfPages = Math.ceil(totalCards / cardsPerPage);

  const PagButton = (props) => {
    const activeStyle = {
      bg: useColorModeValue("brand.600", "brand.500"),
      color: useColorModeValue("white", "gray.200"),
    };
    return (
      <chakra.button
        mx={1}
        px={4}
        py={2}
        rounded="md"
        bg={useColorModeValue("red.500", "gray.800")}
        color={useColorModeValue("white", "white")}
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active && activeStyle)}
      >
        {props.children}
      </chakra.button>
    );
  };
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <span onClick={() => {
          if (currentPage > 1) {
            paginate(currentPage - 1)
            setCurrent(currentPage - 1)
          }
        }}>
          <PagButton  >&lt;</PagButton>
        </span>
        <PagButton>{currentPage}</PagButton>
        <span onClick={() => {
          if (currentPage < numOfPages) {
            paginate(currentPage + 1)
            setCurrent(currentPage + 1)
          }
        }}>
          <PagButton >&gt;</PagButton>
        </span>
      </Flex>
    </Flex>
  );
};
