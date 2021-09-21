import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage
} from '@chakra-ui/react'

type RequestProps = {
  name: string
  label: string
  placeholder: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  value: string
}

export const Input = ({
  name,
  label,
  placeholder,
  error,
  onChange,
  type,
  value
}: RequestProps) => {
  return (
    <FormControl isInvalid={!!error} m={1}>
      <FormLabel htmlFor={name} fontSize={14}>
        {label}
      </FormLabel>
      <ChakraInput
        variant="flushed"
        value={value}
        type={type || 'text'}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}
