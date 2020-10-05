import React from "react"
import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { spacing, layout } from '../../styles/spacing'
import { Container, Box } from "../../styles/global"
import { Giant, Large, Schmedium } from "../../styles/typography"

const Title = styled.h2`
  color: ${colors.gray400};
  ${Medium}
  margin-bottom: ${spacing.s100};

  @media (min-width: 768px) {
    ${Large}
    margin-bottom: ${spacing.s300};
  }
`

const Description = styled.p`
  color: ${colors.gray300};
  
  @media (min-width: 768px) {
    ${Schmedium}
  }
`

const SubSectionTitle = (props) => {

  return (
    <div>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </div>
  )
}

export default SubSectionTitle
