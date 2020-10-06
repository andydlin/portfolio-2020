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
  order: 1;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 50vw;
    order: 2;
  }
`

const ImageBleedRight = (props) => {

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
        <SubSectionTitle
          title={props.title}
          description={props.description}
          css={`
            order: 2;
            padding: 0 ${spacing.s300};

            @media (min-width: 768px) {
              margin-right: ${layout.l400};
              order: 1;
              padding: 0 0 0 ${spacing.s300};
              width: 50vw;
            }
          `}
        />
        <CustomImg fluid={props.image} />
      </Box>
    </div>
  )
}

export default ImageBleedRight
