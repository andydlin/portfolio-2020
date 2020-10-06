import React from "react"
import Img from "gatsby-image"

const ImageResponsive = (props) => {

  return (
    <Img
      fluid={props.image}
      css={`
        height: auto;
        width: 100%;
      `}
    />
  )
}

export default ImageResponsive
