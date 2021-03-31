import styled, { css } from 'styled-components'
import { math } from 'polished'

import { StatsBarProps } from '.'

export const WrapperBar = styled.div`
  height: 15px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
`

export const WrapperSpanBar = styled.div<StatsBarProps>`
  ${({ completed, bgColor, totalStats }) => css`
    height: 100%;
    width: ${math(`${completed}*100/${totalStats}`)}%;
    max-width: 380px;
    background-color: ${bgColor};
    border-radius: inherit;
    text-align: right;
    transition: width 2s;
    align-items: center;
  `}
`
export const Progress = styled.span`
  padding: 5px;
  color: white;
  font-weight: bold;
`
