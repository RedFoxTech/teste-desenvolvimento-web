import * as C from '@chakra-ui/react'
import { Input } from '../../input'

type RequestFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  values: any
}

export const PhysicalAttributes = ({
  handleChange,
  values
}: RequestFormProps) => {
  return (
    <C.Flex>
      <Input
        type="number"
        name="atk"
        label="ataque"
        onChange={handleChange}
        placeholder="Ataque"
        value={values.atk}
      />

      <Input
        type="number"
        name="def"
        label="Defesa"
        onChange={handleChange}
        placeholder="Defesa"
        value={values.def}
      />

      <Input
        type="number"
        name="sta"
        label="Stamina"
        onChange={handleChange}
        placeholder="Stamina"
        value={values.sta}
      />
    </C.Flex>
  )
}
