import React from "react"
import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { spacing } from '../../styles/spacing'
import { Giant, Large, Medium } from "../../styles/typography"

const Title = styled.h2`
  color: ${colors.gray300};
  ${Medium}
  margin-bottom: ${spacing.s100};

  @media (min-width: 768px) {
    ${Large}
  }
`

const Description = styled.p`
  color: ${colors.gray300};
`

const SubSectionTitle = (props) => {

  return (
    <div
      css={`
        margin: 0 auto;
        max-width: 480px;
      `}
      {...props}
    >
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </div>
  )
}

export default SubSectionTitle
