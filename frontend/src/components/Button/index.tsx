import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  onlyText?: boolean
  icon?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({
  icon,
  children,
  onlyText = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper hasIcon={!!icon} onlyText={onlyText} {...props}>
    {!!icon && <S.Icon>{icon}</S.Icon>}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
