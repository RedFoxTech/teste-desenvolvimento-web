import styled, { css } from 'styled-components'

import * as TextInputFieldStyles from 'components/TextInputField/styles'
import * as ButtonStyles from 'components/Button/styles'
import * as SelectStyles from 'components/Select/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextInputFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${SelectStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyles.Wrapper} {
      width: 144px;
    }
    width: 100%;
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge}
      ${theme.spacings.small} ${theme.spacings.xxlarge};
  `}
`
export const FormError = styled.div`
  ${({ theme }) => css`
    text-align: center;
    line-height: ${theme.font.sizes.huge};
    color: red;
    font-size: ${theme.font.sizes.small};

    svg {
      width: 1.6rem;
    }
  `}
`
