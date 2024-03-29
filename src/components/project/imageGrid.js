import React from "react"
import Img from "gatsby-image"
import styled from 'styled-components'

import { spacing } from '../../styles/spacing'
import { Grid } from "../../styles/global"
import { Regular, Small } from "../../styles/typography"
import { colors } from "../../styles/colors"

const ImgCaption = styled.div`
  color: ${colors.gray200};
  ${Small}
  font-style: italic;
  margin-top: ${spacing.s100};
  text-align: center;

  @media (min-width: 768px) {
    ${Regular}
  }
`

const CustomImg = styled(Img)`
  height: auto;
  width: 100%;
`

const Images = (props) => {
  const imageList = props.images.map((image, index) => 
    <div
      css={`
        grid-column: span 2;

        @media (min-width: 768px) {
          grid-column: ${props.images.length === 3 && index === 0 ? 'span 2' : 'auto'};
        }
      `}
      key={index}
    >
      <CustomImg fluid={image.image} />
      {image.caption !== null ? <ImgCaption>{image.caption}</ImgCaption> : null}
    </div>
  );

  return (
    <Grid
      css={`
        grid-template: ${props.images.length === 3 ? 'auto auto auto / auto' : props.images.length === 2 ? 'auto auto / auto' : 'auto / auto'};
        gap: ${spacing.s700};
        margin: 0 auto;

        @media (min-width: 768px) {
          grid-template: ${props.images.length === 3 ? 'auto / 1fr 1fr' : props.images.length === 2 ? '1fr / 1fr 1fr' : 'auto / 1fr'};
        }
      `}
      {...props}
    >
      {imageList}
    </Grid>
  );
}

const ImageGrid = (props) => {

  return (
    <div>
      <Images
        images={props.images}
        {...props}
      />
    </div>
  )
}

export default ImageGrid
