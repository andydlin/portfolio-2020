import React from "react"
import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { spacing } from '../../styles/spacing'
import { Large, Medium, Schmedium } from "../../styles/typography"

const Title = styled.h2`
  color: ${colors.gray400};
  ${Medium}
  margin-bottom: ${spacing.s100};

  @media (min-width: 768px) {
    ${Large}
  }
`

const Description = styled.div`
  color: ${colors.gray300};

  @media (min-width: 768px) {
    ${Schmedium}
  }
`

const SubSectionTitle = (props) => {

  return (
    <div
      css={`
        margin: 0 auto;
        max-width: 640px;
      `}
      {...props}
    >
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </div>
  )
}

export default SubSectionTitle
