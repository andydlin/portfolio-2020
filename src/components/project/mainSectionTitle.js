import React from "react"
import styled from 'styled-components'

import VizSensor from "../visibilitySensor"

import { colors } from '../../styles/colors'
import { spacing, layout } from '../../styles/spacing'
import { Container } from "../../styles/global"
import { Giant, Large, Schmedium } from "../../styles/typography"

const Title = styled.h2`
  color: ${colors.gray400};
  ${Large}
  margin-bottom: ${spacing.s100};
  position: relative;

  @media (min-width: 768px) {
    ${Giant}
    margin-bottom: ${spacing.s300};
  }

  &:before {
    background: ${colors.gray000};
    content: '';
    display: inline-block;
    height: 4px;
    left: 0;
    position: absolute;
    top: -16px;
    width: 64px;

    @media (min-width: 768px) {
      left: -160px;
      top: 26px;
      width: 120px;
    }
  }
`

const Description = styled.div`
  color: ${colors.gray300};
  
  @media (min-width: 768px) {
    ${Schmedium}
  }
`

const MainSectionTitle = (props) => {

  return (
    <VizSensor>
      <Container>
        <div
          css={`
            margin: 0 auto;
            max-width: 860px;
            padding-top: 24px;

            @media (min-width: 768px) {
              padding-top: 0;
              padding-left: 160px;
            }
          `}
        >
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </div>
      </Container>
    </VizSensor>
  )
}

export default MainSectionTitle
