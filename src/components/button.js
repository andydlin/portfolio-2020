import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'

const ButtonLink = styled.a`
  color: ${colors.gray200};
  font-size: 1rem;
  line-height: 1.5;
  padding: ${spacing.s800} ${spacing.s500};
  text-align: center;

  a {
    color: ${colors.gray400};
    transition: color 0.25s;

    &:hover {
      color: ${colors.blue};
    }
  }
`

const Button = () => (
  <ButtonLink>
    Read Case Study
  </ButtonLink>
)

export default Button
