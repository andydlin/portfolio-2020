import React from "react"
import Img from "gatsby-image"
import styled from 'styled-components'

import { spacing, layout } from '../../styles/spacing'
import { Container, Box } from "../../styles/global"
import SubSectionTitle from "../../components/project/subSectionTitle"

const CustomImg = styled(Img)`
  height: auto;
  margin-bottom: ${layout.l100};
  max-width: 100vw;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 50vw;
  }
`

const ImageResponsive = (props) => {

  return (
    <div
      css={`
        margin-bottom: ${layout.l600};
      `}
    >
      <Box
        css={`
          flex-direction: column;

          @media (min-width: 768px) {
            flex-direction: row;
          }
        `}
      >
        <CustomImg fluid={props.image} />
        <SubSectionTitle
          title={props.title}
          description={props.description}
          css={`
            padding: 0 ${spacing.s300};
            

            @media (min-width: 768px) {
              margin-left: ${layout.l400};
              padding: 0 ${spacing.s300} 0 0;
              width: 50vw;
            }
          `}
        />
      </Box>
    </div>
  )
}

export default ImageResponsive
