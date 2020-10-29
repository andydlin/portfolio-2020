import React from "react"
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
      currWidth: 0,
      isNavClick: false
    }
    this.updatePos = this.updatePos.bind(this);
  }

  updatePos(newPos, newWidth) {
    this.setState({
      currPos: newPos,
      currWidth: newWidth
    });
  }
  
  async handleSetActive(currPos, currWidth, index, navRefs, controls, updatePos, isNavClick) {
    if(!isNavClick) {
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
  }

  render() {
    return (
      <Box
        css={`
          flex-wrap: nowrap;
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
                  this.handleSetActive(this.state.currPos, this.state.currWidth, index, this.navRefs, this.props.controls, this.updatePos, this.state.isNavClick);
                }}
                onClick={() => {
                  Events.scrollEvent.register('begin', () => {
                    this.setState({
                      isNavClick: true
                    });
                    Events.scrollEvent.remove('begin');
                  });

                  Events.scrollEvent.register('end', () => {
                    this.setState({
                      isNavClick: false
                    });

                    this.handleSetActive(this.state.currPos, this.state.currWidth, index, this.navRefs, this.props.controls, this.updatePos, this.state.isNavClick);

                    Events.scrollEvent.remove('end');
                  });
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
        margin-left ${spacing.s500};
        padding-right: ${spacing.s500};
        position: relative; 

        @media (min-width: 768px) {
          margin-left: 0;
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
      <NavLinks
        controls={controls}
        sections={props.sections}
      />
    </div>
  )
}

class ContentNav extends React.Component {
  constructor(props) {
    super();

    this.state = {
      navStatus: 'hidden'
    }

    this.handleScroll = this.handleScroll.bind(this);
  }
 
  navVariants = {
    hidden: () => ({
      opacity: 0,
      x: `-50%`,
      y: `${window.innerWidth > 768 ? `calc(-100% - ${spacing.s300})` : `calc(100% + ${spacing.s300})`}`,
      transition: {
        duration: 0.5,
        ease: [0,-0.5,.25,1.25],
      }
    }),
    visible: {
      opacity: 1,
      x: `-50%`,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [1,-0.5,.25,1.25],
      }
    }
  }

  handleScroll() {
    if(window.scrollY >= (this.props.introRef.current.offsetTop - 128)) {
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
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <motion.div
        css={`
          background: #fff;
          border-radius: 4px;
          box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
          bottom: ${spacing.s100};
          left: 50%;
          max-width: 800px;
          position: fixed;
          transform: translate(-50%, calc(100% + ${spacing.s600}));
          top: auto;
          width: calc(100vw - ${spacing.s300});
          z-index: 999;

          @media (min-width: 768px) {
            bottom: auto;
            transform: translate(-50%, calc(-100% - ${spacing.s600}));
            top: ${spacing.s100};
          }
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
            padding: 0 0 ${spacing.s300};
            -webkit-overflow-scrolling: touch;
            overflow-x: auto;
          `}
        >
          <div
            css={`
              color: ${colors.gray200};
              display: none;
              margin-right: ${spacing.s300};
              padding: 0 0 0 ${spacing.s500};
              white-space: nowrap;
              width: 100%;

              @media (min-width: 768px) {
                display: inline-block;
              }
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
