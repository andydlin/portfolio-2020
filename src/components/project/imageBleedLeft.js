import React from "react"
import Img from "gatsby-image"

import { layout } from '../../styles/spacing'
import { Container, Box } from "../../styles/global"
import SubSectionTitle from "../../components/project/subSectionTitle"

const ImageResponsive = (props) => {

  return (
    <div
      css={`
        margin-bottom: ${layout.l600};
      `}
    >
      <Box>
        <Img
          fluid={props.image}
          css={`
            height: auto;
            width: 50vw;
          `}
        />
        <SubSectionTitle
          title={props.title}
          description={props.description}
        />
      </Box>
    </div>
  )
}

export default ImageResponsive
