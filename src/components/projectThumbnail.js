import React, { useRef } from "react"
import Img from "gatsby-image"
import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components'
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion, useCycle } from "framer-motion"

import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { Giant, Large, Medium, Schmedium, Regular } from "../styles/typography"

const CustomImg = styled(Img)`
  height: 100%;
  position: absolute;
  width: 100%;
`

const ThumbnailInner = styled(motion.div)`
  border-radius: 8px;
  box-shadow: 0 0 0 ${props => props.shadowInitial};
  overflow: hidden;
  margin-bottom: ${spacing.s400};
  position: relative;
  transition: box-shadow 0.25s ease-in-out;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 16px 40px ${props => props.shadowHover};
    }
  }

  @media (min-width: 768px) {
    display: inline-block;
    margin-left: 30%;
    margin-bottom: 0;
    width: 70%;
  }

  @media (min-width: 1200px) {
    border-radius: 16px;
  }
`

const ThumbnailDetails = styled(motion.div)`
  @media (min-width: 768px) {
    display: inline-block;
    left: 0;
    padding: 0 ${spacing.s600};
    position: absolute;
    top: ${spacing.s800};
    width: 30%;
  }
`

const ProjectTitle = styled.h2`
  color: ${colors.gray300};
  ${Medium}
  font-weight: 500;
  margin-bottom: ${spacing.s100};
  text-decoration: none;
  transition: color 0.5s;

  @media (hover: hover) {
    &:hover {
      color: ${colors.blue};
    }
  }

  @media (min-width: 1024px) {
    ${Large}
    margin-bottom: ${spacing.s400};
  }
`

const ProjectClient = styled.h3`
  color: ${colors.gray200};
  ${Regular}

  @media (min-width: 1024px) {
    ${Medium}
  }
`

const ProjectDescription = styled.p`
  color: ${colors.gray200};
  ${Regular}

  @media (min-width: 1024px) {
    ${Schmedium}
  }
`

const ProjectThumbnail = (props) => {
  const containerRef = useRef(null);
  var newTop, newXPos = 0;
  if(containerRef.current !== undefined && containerRef.current !== null) {
    const navbar = document.querySelector('header')
    const navbarDimensions = navbar.getBoundingClientRect()
    const distanceToTop =
    containerRef.current.getBoundingClientRect().top - navbarDimensions.height
    newTop = distanceToTop * -1;

    if(typeof window !== 'undefined') {
      if(window.innerWidth <= 1024) {
        newXPos = -24;
      } else {
        newXPos = ((window.innerWidth - containerRef.current.getBoundingClientRect().width)/2) * -1;
      }
    }
  }

  const projectVariants = {
    exiting: (custom) => ({
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
      }
    }),
    end: (custom) => ({
      opacity: 1,
      y: custom.newTop,
      transition: {
        delay: 0.15,
        duration: 0.8,
        ease: [1,-0.5,.25,1.25],
      }
    })
  }

  const thumbnailVariants = {
    start: {
      height: 'auto',
      marginLeft: window.innerWidth <= 1024 ? '0px' : '30%',
      width: window.innerWidth <= 1024 ? '100%' : '70%'
    },
    end: (custom) => ({
      x: custom.newXPos,
      height: 'calc(100vh - 124px)',
      marginLeft: window.innerWidth <= 1024 ? '0' : ['30%', '15%', '15%', '0%'],
      borderRadius: '0px',
      width: '100vw',
      transition: {
        delay: 0.9,
        duration: 0.9,
        ease: [0.65, 0.01, 0.5, 1],
        times: [0, .3, .6, .85],
        x: {
          delay: 1.5
        },
        height: {
          delay: 1.5
        },
        borderRadius: {
          delay: 1.5
        },
        width: {
          delay: 1.5
        }
      }
    })
  }

  const thumbnailTitleVariants = {
    start: {
      opacity: 1,
    },
    end: {
      opacity: 0
    }
  }

  const [thumbnailStatus, cycleThumbStatus] = useCycle('start', 'end');

  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        return (
          <motion.div
            initial={false}
            variants={projectVariants}
            animate={thumbnailStatus === 'end' ? thumbnailStatus : transitionStatus}
            custom={{
              newTop: newTop,
            }}
            ref={containerRef}
            onClick={() => cycleThumbStatus()}
          >
            <ThumbnailInner
              initial='start'
              variants={thumbnailVariants}
              animate={transitionStatus}
              custom={{
                newXPos: newXPos,
              }}
              whileHover={{
                scale: 1.005,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 1 }}
              shadowInitial={hexToRgba(props.card.hex, '0')}
              shadowHover={hexToRgba(props.card.hex, '0.3')}
            >
              <CustomImg
                alt={props.card.alt}
                fluid={props.card.image.childImageSharp.fluid} 
              />
            </ThumbnailInner>
            <ThumbnailDetails
              variants={thumbnailTitleVariants}
              animate={thumbnailStatus}
            >
              <ProjectClient>{props.card.client}</ProjectClient>
              <ProjectTitle>{props.card.title}</ProjectTitle>
              <ProjectDescription>{props.card.description}</ProjectDescription>
            </ThumbnailDetails>
          </motion.div>
        )
      }}
    </TransitionState>
  )
}

export default ProjectThumbnail
