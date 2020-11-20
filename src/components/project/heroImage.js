import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  height: calc(100vh - 124px);
  width: 100vw;
`

const HeroImage = ({ image }) => <StyledImg fluid={image} />

export default HeroImage
