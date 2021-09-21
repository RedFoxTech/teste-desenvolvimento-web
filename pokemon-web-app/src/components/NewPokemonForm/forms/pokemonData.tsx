import * as C from '@chakra-ui/react'
import { Input } from '../../input'

type RequestFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  values: any
}

export const PokemonData = ({ handleChange, values }: RequestFormProps) => {
  return (
    <C.Stack spacing={1}>
      <Input
        name="name"
        label="Nome"
        onChange={handleChange}
        placeholder="Nome do Pokemon capturado"
        value={values.name}
      />

      <C.Flex spacing={2} direction="row">
        <Input
          name="generation"
          label="Geração"
          type="number"
          onChange={handleChange}
          placeholder="Número da Geração"
          value={values.generation}
        />

        <Input
          name="evolutionStage"
          label="Estag. Evolução"
          onChange={handleChange}
          placeholder="Defina o estágio de evolução"
          value={values.evolutionStage}
        />

        <Input
          name="evolved"
          label="Evoluído"
          type="number"
          onChange={handleChange}
          placeholder="Evolução"
          value={values.evolved}
        />
      </C.Flex>

      <Input
        name="crossGen"
        label="Geração Cruzada"
        type="number"
        onChange={handleChange}
        placeholder="Geração Cruzada"
        value={values.crossGen}
      />

      <C.Flex spacing={2}>
        <Input
          name="type1"
          label="Tipo 1"
          onChange={handleChange}
          placeholder="Defina um tipo"
          value={values.Type1}
        />

        <Input
          name="type2"
          label="Tipo 2"
          onChange={handleChange}
          placeholder="Defina um segundo tipo"
          value={values.type2}
        />
      </C.Flex>

      <C.Flex spacing={2}>
        <Input
          name="weather1"
          label="Clima 1"
          onChange={handleChange}
          placeholder="Clima 1"
          value={values.weather1}
        />

        <Input
          name="weather2"
          label="Tipo 2"
          onChange={handleChange}
          placeholder="Clima 2"
          value={values.weather12}
        />
      </C.Flex>

      <C.Flex justify="space-between">
        <C.Checkbox
          size="md"
          name="legendary"
          value={values.legendary}
          isChecked={values.legendary}
          checked={values.legendary}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Lendário
        </C.Checkbox>

        <C.Checkbox
          size="md"
          name="aquireable"
          value={values.aquireable}
          isChecked={values.aquireable}
          checked={values.aquireable}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Aquireable
        </C.Checkbox>

        <C.Checkbox
          size="md"
          name="spawns"
          value={values.spawns}
          isChecked={values.spawns}
          checked={values.spawns}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Spawns
        </C.Checkbox>
      </C.Flex>

      <C.Flex justify="space-between">
        <C.Checkbox
          size="md"
          name="regional"
          value={values.regional}
          isChecked={values.regional}
          checked={values.regional}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Regional
        </C.Checkbox>

        <C.Checkbox
          size="md"
          name="raidable"
          value={values.raidable}
          isChecked={values.raidable}
          checked={values.raidable}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Atacável
        </C.Checkbox>

        <C.Checkbox
          size="md"
          name="shiny"
          value={values.shiny}
          isChecked={values.shiny}
          checked={values.shiny}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Brilhante
        </C.Checkbox>
      </C.Flex>

      <C.Flex justify="space-between">
        <C.Checkbox
          size="md"
          name="new"
          value={values.new}
          isChecked={values.new}
          checked={values.new}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Novo
        </C.Checkbox>

        <C.Checkbox
          size="md"
          name="notGettable"
          value={values.notGettable}
          isChecked={values.notGettable}
          checked={values.notGettable}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Obtível
        </C.Checkbox>

        <C.Checkbox
          size="md"
          name="futureEvolve"
          value={values.futureEvolve}
          isChecked={values.futureEvolve}
          checked={values.futureEvolve}
          colorScheme="yellow"
          onChange={handleChange}
        >
          Evol. futura
        </C.Checkbox>
      </C.Flex>
    </C.Stack>
  )
}
