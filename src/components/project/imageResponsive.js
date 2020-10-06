import React from "react"
import Img from "gatsby-image"
import VizSensor from "../visibilitySensor"

const ImageResponsive = (props) => {

  return (
    <VizSensor>
      <Img
        fluid={props.image}
        css={`
          height: auto;
          width: 100%;
        `}
      />
    </VizSensor>
  )
}

export default ImageResponsive
