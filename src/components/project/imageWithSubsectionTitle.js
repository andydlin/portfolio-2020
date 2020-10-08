import React from "react"
import Img from "gatsby-image"
import styled from 'styled-components'
import VizSensor from "../visibilitySensor"

import { spacing, layout } from '../../styles/spacing'
import { Box } from "../../styles/global"
import SubSectionTitle from "./subSectionTitle"

const CustomImg = styled(Img)`
  height: auto;
  margin-bottom: ${layout.l100};
  max-width: 100vw;
  order: 1;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 50vw;
    order: ${props => props.imageRight ? '2' : '1'};
  }
`

const ImageWithSubsectionTitle = (props) => {

  return (
    <VizSensor>
      <Box
        css={`
          flex-direction: column;

          @media (min-width: 768px) {
            flex-direction: row;
          }
        `}
      >
        <CustomImg
          fluid={props.image}
          imageRight={props.imageRight}
        />
        <SubSectionTitle
          title={props.title}
          description={props.description}
          css={`
            order: ${props => props.imageRight ? '2' : '1'};
            padding: 0 ${spacing.s300};

            @media (min-width: 768px) {
              margin-left: ${props.imageRight ? 'auto' : layout.l400};
              margin-right: ${props.imageRight ? layout.l400 : '0'};
              order: ${props => props.imageRight ? '2' : '1'};
              padding-left ${props.imageRight ? spacing.s300 : '0'};
              padding-right ${props.imageRight ? '0' : spacing.s300};
              width: 50vw;
            }
          `}
        />
      </Box>
    </VizSensor>
  )
}

export default ImageWithSubsectionTitle
