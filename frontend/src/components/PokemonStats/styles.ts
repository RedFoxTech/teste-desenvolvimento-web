import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 30px;
    height: 400px;
    width: 450px;
    background-color: ${theme.colors.lightGray};
    /* top-left | top-right | bottom-right | bottom-left */
    border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const WeatherColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
`

export const WrapperStatsBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
`

export const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`
export const CPWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const CPColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
`

export const AditionalInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xsmall};
    flex-direction: row;
    justify-content: flex-start;
  `}
`
export const AditionalInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
`
