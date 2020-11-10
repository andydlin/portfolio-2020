import React from "react"
import styled from 'styled-components'
import VizSensor from "../visibilitySensor"
import { DefaultPlayer as Video } from 'react-html5video';

import { spacing, layout } from '../../styles/spacing'
import { Box } from "../../styles/global"
import SubSectionTitle from "./subSectionTitle"

const CustomVideo = styled.div`
  video {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 900px) {
    order: ${props => props.videoRight ? '2' : '1'};
  }
`

const VideoWithSubsectionTitle = (props) => {

  return (
    <VizSensor>
      <Box
        css={`
          flex-direction: column;
          margin: 0 auto;
          position: relative;

          @media (min-width: 900px) {
            align-items: ${props.longImage ? 'flex-start' : 'center'};
            flex-direction: row;
          }
        `}
        {...props}
      >
        <CustomVideo
          videoRight={props.videoRight}
        >
          <Video
            autoPlay
            loop
            muted
            controls={[]}
            >
            <source src={props.video} type="video/mp4" />
          </Video>
        </CustomVideo>
        <SubSectionTitle
          title={props.title}
          description={props.description}
          css={`
            order: ${props.videoRight ? '2' : '1'};
            padding: 0 ${spacing.s300};

            @media (min-width: 900px) {
              margin-left: ${props.videoRight ? 'auto' : layout.l400};
              margin-right: ${props.videoRight ? layout.l400 : '0'};
              order: ${props.videoRight ? '1' : '2'};
              padding-left ${props.videoRight ? spacing.s300 : '0'};
              padding-right ${props.videoRight ? '0' : spacing.s300};
              padding-top: ${props.longImage ? layout.l500 : '0'};
              position: ${props.longImage ? 'sticky' : 'relative'};
              top: ${props.longImage ? spacing.s800 : '0'};
              width: 50vw;
            }
          `}
        />
      </Box>
    </VizSensor>
  )
}

export default VideoWithSubsectionTitle
