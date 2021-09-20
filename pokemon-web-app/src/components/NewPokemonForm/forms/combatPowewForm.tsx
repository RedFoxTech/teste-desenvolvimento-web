import * as C from '@chakra-ui/react'
import { Input } from '../../input'

type RequestFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  values: any
}

export const CombatPowerForm = ({ handleChange, values }: RequestFormProps) => {
  return (
    <C.Flex>
      <Input
        name="cp40"
        label="Combat Power 40"
        onChange={handleChange}
        placeholder="Poder de Combate 40"
        value={values.cp40}
      />

      <Input
        name="cp39"
        label="Combat Power 39"
        onChange={handleChange}
        placeholder="Poder de Combate 39"
        value={values.cp39}
      />
    </C.Flex>
  )
}
