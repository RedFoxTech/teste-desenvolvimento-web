import * as C from '@chakra-ui/react'
import Link from 'next/link'

import { FiPlus, FiSearch } from 'react-icons/fi'

export const Header = () => {
  return (
    <C.Stack
      p={4}
      w="100%"
      maxWidth={1200}
      mt="4"
      mx="auto"
      direction="row"
      align="center"
      justify="space-between"
    >
      <C.Text fontSize="3xl" fontWeight="bold" color="yellow.400">
        PoKRUD
      </C.Text>

      <C.Flex
        as="label"
        flex="1"
        w="100%"
        p={2}
        px="6"
        ml={6}
        maxWidth={400}
        borderRadius="full"
        bg="gray.700"
        position="relative"
        alignItems="center"
      >
        <C.Input
          color="gray.300"
          variant="unstyled"
          placeholder="Procurar Pokemon"
          _placeholder={{ color: 'gray.800' }}
        />

        <button type="button">
          <C.Icon as={FiSearch} />
        </button>
      </C.Flex>

      <Link href="/pokemon-new" passHref>
        <C.Button
          as="a"
          href="newPokemon"
          colorScheme="yellow"
          bg="yellow.400"
          rightIcon={<FiPlus />}
        >
          Novo Pokemon
        </C.Button>
      </Link>
    </C.Stack>
  )
}
