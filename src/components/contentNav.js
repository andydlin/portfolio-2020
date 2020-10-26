import React from "react"
import * as Scroll from 'react-scroll';
import { Link, Eleme, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { motion, useViewportScroll } from "framer-motion"

import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { Small } from "../styles/typography"
import { Box } from "../styles/global"

export const ProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0 0"
      }}
      css={`
        background: ${colors.blue};
        height: 4px;
        margin-bottom: ${spacing.s300};
        width: 100%;
      `}
    />
  )
} 

class ContentNav extends React.Component {
  constructor(props) {
    super(props);

    this.navRefs = [];
  }

  render() {

    return (
      <motion.div
        css={`
          background: #fff;
          border-radius: 4px;
          box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
          left: 50%;
          max-width: 800px;
          position: fixed;
          transform: translate(-50%, 0);
          top: ${spacing.s300};
          width: 100%;
          z-index: 999;
        `}
      >
        <div
          css={`
            border-radius: 4px 4px 0 0;
            overflow: hidden;
            width: 100%;
          `}
        >
          <ProgressBar/>
        </div>
        <Box
          css={`
            ${Small}
            padding: 0 ${spacing.s500} ${spacing.s300};
          `}
        >
          <div
            css={`
              color: ${colors.gray200};
              width: 100%;
            `}
          >
            {this.props.projectTitle}
          </div>
          <Box
            css={`
              justify-content: flex-end;
              list-style: none;
              margin: 0;
              padding: 0;
  
              > * {
                flex-grow: 0;
              }
  
              > div {
                margin-right: 16px;
  
                &:last-of-type {
                  margin-right: 0;
                }
              }
            `}
          >
            {this.props.sections.map((section, index) => {
              return (
                <div key={index}>
                  <Link
                    activeClass='active'
                    to={section.toLowerCase() + '-section'}
                    spy={true}
                    duration={1000}
                    smooth={'easeInOut'}
                    offset={-48}
                    ref={navRefs => this.navRefs[index] = navRefs}
                    css={`
                      color: ${colors.gray200};
                      cursor: pointer;
                      font-weight: 500;
                      transition: all 0.25s;
  
                      &.active {
                        color: ${colors.gray400};
                      }
                    `}
                  >
                    {section}
                  </Link>
                </div>
              )
            })}
          </Box>
        </Box>
      </motion.div>
    )
  }
}

export default ContentNav
