import React from "react"
import Img from "gatsby-image"

import { layout } from '../../styles/spacing'
import { Container } from "../../styles/global"

const ImageResponsive = (props) => {

  return (
    <Container
      css={`
        margin-bottom: ${layout.l600};
      `}
    >
      <Img
        fluid={props.image}
        css={`
          height: auto;
          width: 100%;
        `}
      />
    </Container>
  )
}

export default ImageResponsive
