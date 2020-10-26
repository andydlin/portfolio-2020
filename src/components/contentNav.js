import React, { useEffect } from "react"
import { Link, Events } from 'react-scroll'
import { motion, useViewportScroll, useAnimation } from "framer-motion"

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
    this.state = {
      activePos: 0,
      activeWidth: 0
    }

    this.controls = useAnimation();
  }

  handleSetActive(index) {
    // this.setState({
    //   activePos: this.navRefs[index].offsetLeft,
    //   activeWidth: this.navRefs[index].offsetWidth,
    // })

    useEffect(() => {
      const sequence = async() => {
        await this.controls.start({
          x: this.navRefs[index].offsetLeft,
        });
        await this.controls.start({
          width: this.navRefs[index].offsetWidth,
        });
      }

      sequence()
    }, [this.controls]);
  }

  componentDidMount() {
    Events.scrollEvent.register('end', function(to, element) {
      //console.log('end', to, element);
    });
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
              position: relative;
              width: auto;
  
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
            <motion.div
              css={`
                background: ${colors.blue};
                bottom: -2px;
                height: 2px;
                left: 0;
                margin-right: 0;
                position: absolute;
              `}
              animate={controls}
            />
            {this.props.sections.map((section, index) => {
              return (
                <div
                  key={index}
                  ref={navRefs => this.navRefs[index] = navRefs}
                >
                  <Link
                    activeClass='active'
                    to={section.toLowerCase() + '-section'}
                    spy={true}
                    duration={1000}
                    smooth={'easeInOut'}
                    offset={-120}
                    onSetActive={() => this.handleSetActive(index)}
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
