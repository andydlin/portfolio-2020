import React from "react"
import styled from 'styled-components'

import VizSensor from "../visibilitySensor"

import { colors } from '../../styles/colors'
import { spacing, layout } from '../../styles/spacing'
import { Container, Box } from "../../styles/global"
import { Giant, Large, Schmedium } from "../../styles/typography"

const Title = styled.h2`
  color: ${colors.gray400};
  ${Large}
  margin-bottom: ${spacing.s100};

  @media (min-width: 768px) {
    ${Giant}
    margin-bottom: ${spacing.s300};
  }
`

const Description = styled.p`
  color: ${colors.gray300};
  
  @media (min-width: 768px) {
    ${Schmedium}
  }
`

const Line = styled.span`
  background: ${colors.gray000};
  display: inline-block;
  height: 4px;
  margin-bottom: ${spacing.s200};
  width: 64px;

  @media (min-width: 768px) {
    margin-right: ${spacing.s500};
    margin-top: ${spacing.s500};
    width: 120px;
  }
`

const MainSectionTitle = (props) => {

  return (
    <VizSensor>
      <Container
        css={`
          margin-bottom: ${layout.l550};
        `}
      >
        <Box
          css={`
            align-items: flex-start;
            flex-direction: column;
            margin: 0 auto;
            max-width: 860px;

            @media (min-width: 768px) {
              flex-direction: row;
            }
          `}
        >
          <div>
            <Line/>
          </div>
          <div>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
          </div>
        </Box>
      </Container>
    </VizSensor>
  )
}

export default MainSectionTitle
