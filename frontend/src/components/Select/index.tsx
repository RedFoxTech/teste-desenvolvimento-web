import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type SelectProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  error?: string
  fullWidth?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Select = ({
  label = '',
  initialValue = '',
  icon,
  error,
  name,
  fullWidth = true,
  onInputChange,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper fullWidth={fullWidth} label={label}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Select
