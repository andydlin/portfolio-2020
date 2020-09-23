import React, { useRef, useState, useEffect } from "react"
import Img from "gatsby-image"
import styled from 'styled-components'
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion, useCycle } from "framer-motion"

import { colors } from '../../styles/colors'
import { spacing, layout } from '../../styles/spacing'
import { Container, Box } from "../../styles/global"
import { Giant, Large, Schmedium, Regular } from "../../styles/typography"

const Label = styled.div`
  color: ${colors.gray200};
`

const Detail = styled.div`
  color: ${colors.gray400};
  ${Schmedium}
`

const SummaryText = styled.div`
  color: ${colors.gray400};
  ${Schmedium}

  p {
    margin-bottom: ${spacing.s500};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.1, 0.75, 0.5, 1]
    }
  }
}

const Summary = (props) => {

  const [thumbnailStatus, cycleThumbStatus] = useCycle('start', 'end');

  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        return (
          <Container
            css={`
              position: relative;
              top: -${layout.l500};
            `}  
          >
            <motion.div
              initial='hidden'
              variants={variants}
              animate={mount ? 'visible' : 'hidden'}
              css={`
                background: white;
                box-shadow: 0px 2px 64px rgba(0, 0, 0, 0.1);
                padding: ${layout.l500};
                position: relative;

                &:after {
                  bottom: 0;
                  box-shadow: 0px 4px 200px rgba(0, 0, 0, 0.2);
                  content: '';
                  height: 50px;
                  left: 50%;
                  position: absolute;
                  transform: translateX(-50%);
                  width: calc(100% - 400px);
                  z-index: -1;
                }
              `}  
            >
              <Box
                css={`
                  align-items: flex-start;
                `}
              >
                <Box
                  css={`
                    align-items: flex-start;
                    flex-direction: column;
                    margin-right: ${layout.l400};
                    max-width: 240px;
                  `}
                >
                  <div
                    css={`
                      margin-bottom: ${spacing.s500};
                    `}
                  >
                    <Label>Role</Label>
                    <Detail>{props.role}</Detail>
                  </div>
                  <div
                    css={`
                      margin-bottom: ${spacing.s500};
                    `}
                  >
                    <Label>Cateogry</Label>
                    <Detail>{props.category}</Detail>
                  </div>
                  <div
                    css={`
                      margin-bottom: ${spacing.s500};
                    `}
                  >
                    <Label>Platforms</Label>
                    <Detail>{props.platforms}</Detail>
                  </div>
                  <div>
                    <Label>Timeframe</Label>
                    <Detail>{props.timeframe}</Detail>
                  </div>
                </Box>
                <SummaryText>
                  {props.summary}
                </SummaryText>
              </Box>
            </motion.div>
          </Container>
        )
      }}
    </TransitionState>
  )
}

export default Summary
