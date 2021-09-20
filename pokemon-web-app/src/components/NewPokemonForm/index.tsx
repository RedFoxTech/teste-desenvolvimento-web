import * as C from '@chakra-ui/react'
import { CgPokemon } from 'react-icons/cg'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { useFormik } from 'formik'
import { PokemonData, PhysicalAttributes, CombatPowerForm } from './forms'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import Head from 'next/head'

export const NewPokemonForm = () => {
  const formik = useFormik({
    initialValues: {
      name: undefined,
      generation: undefined,
      evolutionStage: undefined,
      evolved: undefined,
      crossGen: undefined,
      type1: undefined,
      type2: undefined,
      weather1: undefined,
      weather2: undefined,
      atk: undefined,
      def: undefined,
      sta: undefined,
      legendary: false,
      aquireable: false,
      spawns: false,
      regional: false,
      raidable: false,
      shiny: false,
      nest: false,
      new: false,
      notGettable: false,
      futureEvolve: false,
      hatchable: 0,
      cp40: undefined,
      cp39: undefined
    },
    onSubmit: (values) => console.log(values)
  })

  const steps = [
    {
      label: 'Identificação',
      content: (
        <PokemonData
          handleChange={formik.handleChange}
          values={formik.values}
        />
      )
    },
    {
      label: 'Identificação',
      content: (
        <PhysicalAttributes
          handleChange={formik.handleChange}
          values={formik.values}
        />
      )
    },
    {
      label: 'Combate',
      content: (
        <CombatPowerForm
          handleChange={formik.handleChange}
          values={formik.values}
        />
      )
    }
  ]

  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <C.Stack
      spacing={1}
      position="relative"
      w="100%"
      maxWidth={720}
      mx="auto"
      p={4}
      borderRadius={10}
      minHeight="680px"
    >
      <Head>
        <title>PoKRUD | Novo Pokemon</title>
      </Head>
      <Link href="/" passHref>
        <C.Button
          variant="unstyled"
          as="a"
          type="button"
          maxW={2}
          display="flex"
          alignItems="center"
        >
          <FiArrowLeft />
        </C.Button>
      </Link>

      <form onSubmit={formik.handleSubmit}>
        <Steps
          activeStep={activeStep}
          responsive
          colorScheme="yellow"
          checkIcon={CgPokemon}
        >
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              {content}
            </Step>
          ))}
        </Steps>

        <C.Stack
          position="absolute"
          mt={4}
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          right={0}
          bottom={4}
        >
          <C.Button
            type="button"
            onClick={prevStep}
            disabled={activeStep === 0}
            colorScheme="yellow"
          >
            Voltar
          </C.Button>

          <C.Button
            type="button"
            onClick={nextStep}
            colorScheme="yellow"
            disabled={activeStep === 2}
          >
            Próximo
          </C.Button>

          <C.Button type="submit" colorScheme="green" mt={2}>
            Cadastrar
          </C.Button>
        </C.Stack>
      </form>
    </C.Stack>
  )
}
