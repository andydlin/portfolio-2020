import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion, useCycle } from "framer-motion"

import { colors } from '../styles/colors'
import { Box } from '../styles/global'
import { layout } from '../styles/spacing'
import { H1, H2, H3, H4 } from "../styles/typography"

const CustomImg = styled(Img)`
  height: 100%;
  position: absolute;
  width: 100%;
`

const ProjectThumbnail = (props) => {
  const containerRef = useRef(null);
  var newTop = 0;
  if(containerRef.current !== undefined && containerRef.current !== null) {
    const navbar = document.querySelector('header')
    const navbarDimensions = navbar.getBoundingClientRect()
    const distanceToTop =
    containerRef.current.getBoundingClientRect().top - navbarDimensions.height
    newTop = distanceToTop * -1;
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
    },
    end: {
      x: -160,
      height: 'calc(100vh - 124px)',
      width: '100vw',
      transition: {
        delay: 0.9,
        duration: 0.25,
        ease: [0.65, 0.01, 0.5, 1],
      }
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
            onTap={() => cycleThumbStatus()}
          >
            <motion.div
              initial='start'
              variants={thumbnailVariants}
              animate={thumbnailStatus}
              css={`
                position: relative;
              `}
            >
              <CustomImg
                alt={props.card.alt}
                fluid={props.card.image.childImageSharp.fluid} 
              />
            </motion.div>
            <h3>{props.card.client}</h3>
          </motion.div>
        )
      }}
    </TransitionState>
  )
}

export default ProjectThumbnail