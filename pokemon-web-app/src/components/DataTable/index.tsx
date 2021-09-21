import * as C from '@chakra-ui/react'
import { useTable, useSortBy } from 'react-table'
import { Pokemon } from '../../interfaces'

import { columns } from './makeColumns'

interface Props {
  data: Pokemon[]
}

export const DataTable = ({ data }: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy)

  return (
    <C.Table colorScheme="whiteAlpha" size="lg" {...getTableProps()}>
      <C.Thead>
        {headerGroups.map((headerGroup, index) => (
          <C.Tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <C.Th key={index}>{column.render('Header')}</C.Th>
            ))}
          </C.Tr>
        ))}
      </C.Thead>
      <C.Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <C.Tr key={row} {...row.getRowProps()}>
              {row.cells.map((cell, index) => (
                <C.Td key={index} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </C.Td>
              ))}
            </C.Tr>
          )
        })}
      </C.Tbody>
    </C.Table>
  )
}
