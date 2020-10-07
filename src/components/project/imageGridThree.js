import React from "react"
import Img from "gatsby-image"
import styled from 'styled-components'
import VizSensor from "../visibilitySensor"

import { spacing, layout } from '../../styles/spacing'
import { Grid } from "../../styles/global"

const CustomImg = styled(Img)`
  height: auto;
  margin-bottom: ${layout.s700};
  max-width: 100vw;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 50vw;
  }
`

const ImageGridThree = (props) => {

  return (
    <VizSensor>
      <Grid
        css={`
          grid-template-rows: 1fr 1fr 1fr;
          column-gap: ${spacing.s800};
        `}
      >
        <CustomImg fluid={props.image} />
        <CustomImg fluid={props.image} />
        <CustomImg fluid={props.image} />
      </Grid>
    </VizSensor>
  )
}

export default ImageGridThree
