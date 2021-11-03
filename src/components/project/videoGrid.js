import React from "react"
import styled from 'styled-components'
import { DefaultPlayer as Video } from 'react-html5video';

import { spacing, layout } from '../../styles/spacing'
import { Grid } from "../../styles/global"
import { Regular, Small } from "../../styles/typography"
import { colors } from "../../styles/colors"

const CustomVideo = styled.div`
  margin-bottom: ${layout.l100};

  video {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 900px) {
    margin-bottom: 0;
  }
`

const Caption = styled.div`
  color: ${colors.gray200};
  ${Small}
  font-style: italic;
  margin-top: ${spacing.s100};
  text-align: center;

  @media (min-width: 768px) {
    ${Regular}
  }
`

const Videos = (props) => {
  const videoList = props.videos.map((video, index) =>
    <div
      css={`
        grid-column: span 2;

        @media (min-width: 768px) {
          grid-column: ${props.videos.length === 3 && index === 0 ? 'span 2' : 'auto'};
        }
      `}
      key={index}
    >
      <CustomVideo>
        <Video  
          autoPlay
          loop
          muted
          controls={[]}
          >
          <source src={video.video} type="video/mp4" />
        </Video>
      </CustomVideo>
      {video.caption !== null ? <Caption>{video.caption}</Caption> : null}
    </div>
  )

  return (
    <Grid
      css={`
        grid-template: ${props.videos.length === 3 ? 'auto auto auto / auto' : props.videos.length === 2 ? 'auto auto / auto' : 'auto / auto'};
        gap: ${spacing.s700};
        margin: 0 auto;

        @media (min-width: 768px) {
          grid-template: ${props.videos.length === 3 ? 'auto / 1fr 1fr' : props.videos.length === 2 ? '1fr / 1fr 1fr' : 'auto / 1fr'};
        }
      `}
      {...props}
    >
      {videoList}
    </Grid>
  )
}

const VideoGrid = (props) => {

  return (
    <div>
      <Videos
        videos={props.videos}
        {...props}
      />
    </div>
  )
}

export default VideoGrid