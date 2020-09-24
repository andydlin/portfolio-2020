import React from "react"
import Img from "gatsby-image"

const HeroImage = (props) => {

  return (
    <Img
      fluid={props.image}
      css={`
        height: calc(100vh - 124px);
        width: 100vw;
      `}
    />
  )
}

export default HeroImage
