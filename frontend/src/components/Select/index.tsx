import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type SelectProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  fullWidth?: boolean
  as?: React.ElementType
} & InputHTMLAttributes<HTMLInputElement>

const Select = ({
  label = '',
  initialValue = '',
  icon,
  name,
  fullWidth = true,
  onInput,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
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
    </S.Wrapper>
  )
}

export default Select
