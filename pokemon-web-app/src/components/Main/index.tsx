import * as C from '@chakra-ui/react'
import { DataTable } from '../DataTable'
import { Header } from '../Header'

export const Main = () => {
  return (
    <C.Flex alignItems="center" justifyContent="center" w="100%">
      <C.Stack maxWidth={1200} width="full" spacing={10}>
        <Header />

        <DataTable />
      </C.Stack>
    </C.Flex>
  )
}
