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


class NavLinks extends React.Component {
  constructor(props) {
    super(props);

    this.navRefs = [];
    this.state = {
      currPos: 0,
      currWidth: 0
    }
    this.updatePos = this.updatePos.bind(this);
  }

  updatePos(newPos, newWidth) {
    this.setState({
      currPos: newPos,
      currWidth: newWidth
    });
  }


  async handleSetActive(currPos, currWidth, index, navRefs, controls, updatePos) {
    if(navRefs[index].offsetLeft > currPos) {
      await controls.start({
        width: ((navRefs[index].offsetLeft - currPos) + navRefs[index].offsetWidth),
        transition: {
          duration: 0.1,
          ease: [0.42, 0, 0.58, 1],
        }
      });

      await controls.start({
        x: navRefs[index].offsetLeft,
        width: navRefs[index].offsetWidth,
        transition: {
          delay: 0.1,
          duration: 0.1,
          ease: [0.42, 0, 0.58, 1],
        }
      });
    } else {
      await controls.start({
        x:  navRefs[index].offsetLeft,
        width: ((currPos - navRefs[index].offsetLeft) + currWidth),
        transition: {
          duration: 0.1,
          ease: [0.42, 0, 0.58, 1],
        }
      });

      await controls.start({
        width: navRefs[index].offsetWidth,
        transition: {
          delay: 0.1,
          duration: 0.1,
          ease: [0.42, 0, 0.58, 1],
        }
      })
    }

    updatePos(navRefs[index].offsetLeft, navRefs[index].offsetWidth);
  }

  render() {
    return (
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
                onSetActive={() => {
                  this.handleSetActive(this.state.currPos, this.state.currWidth, index, this.navRefs, this.props.controls, this.updatePos);
                }}
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
    )
  }
}

export const NavLinksWrapper = (props) => {
  const controls = useAnimation();

  return (
    <div
      css={`
        position: relative; 
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
      <NavLinks
        controls={controls}
        sections={props.sections}
      />
    </div>
  )
}

class ContentNav extends React.Component {
  constructor() {
    super();

    this.state = {
      navStatus: 'hidden',
    }
  }
 
  navVariants = {
    hidden: {
      x: `-50%`,
      y: `calc(-100% - ${spacing.s600})`,
      transition: {
        duration: 0.5,
        ease: [0,-0.5,.25,1.25],
      }
    },
    visible: {
      x: `-50%`,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [1,-0.5,.25,1.25],
      }
    }
  }

  handleScroll(props) {
    if(window.scrollY >= (props.introRef.current.offsetTop - 128)) {
      this.setState({
        navStatus: 'visible'
      });
    } else {
      this.setState({
        navStatus: 'hidden'
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {this.handleScroll(this.props)});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {this.handleScroll(this.props)});
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
          top: ${spacing.s100};
          width: 100%;
          z-index: 999;
        `}
        variants={this.navVariants}
        animate={this.state.navStatus}
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
          <NavLinksWrapper
            sections={this.props.sections}
          />
        </Box>
      </motion.div>
    )
  }
}

export default ContentNav
