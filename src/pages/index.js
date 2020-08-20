import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled, { keyframes } from 'styled-components'
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion"
import Link from "gatsby-plugin-transition-link";

import Layout from "../components/layout"
import { colors } from '../styles/colors'
import { Box, Container } from '../styles/global'
import { spacing } from '../styles/spacing'
import { Large, Medium } from "../styles/typography"
import ProjectList from "../components/projectsList.js"

const GreetingMessage = styled.h1`
  color: ${colors.gray200};
  ${Medium}

  @media (min-width: 1024px) {
    font-size: 2.35vw;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`

const WelcomeMessage = styled.h2`
  color: ${colors.gray400};
  ${Large}
  margin: ${spacing.s000} 0 ${spacing.s100} 0;

  @media (min-width: 1024px) {
    font-size: 3.15vw;
  }

  @media (min-width: 1440px) {
    font-size: 2.85rem;
  }
`

const CurrentMessage = styled.p`
  color: ${colors.gray200};
  font-style: italic;

  span {
    color: #266BBD;
    font-weight: 500;
  }
`

const CartoonProfile = styled.div`
  margin-left: ${spacing.s800};
  min-width: 120px;

  @media (max-width: 600px) {
    order: 1;
    margin: 0 0 ${spacing.s300} 0;
    min-width: 80px;
  }
`

const waveAnimation = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
`

const WaveIcon = styled(motion.div)`
  left: -${spacing.s600};
  position: absolute;
  top: -${spacing.s100};
  transform-origin: 70% 70%;
  width: 24px;

  &.wave-animation {
    animation-name: ${waveAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: 4;
  }

  @media (max-width: 900px) {
    display: inline-block;
    left: 0;
    margin-right: ${spacing.s100};
    position: relative;
    top: 0;
  }
`

const pageVariants = {
  entered: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.75,
      duration: 1.5,
      ease: [0.09, 0.8, 0.44, 1],
    }
  },
  exiting: {
    opacity: 0,
    scale: 0.9,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.09, 0.8, 0.44, 1],
    }
  },
  hidden: {
    opacity: 0,
    scale: 1.15,
    y: -50,
    transition: {
      duration: 0.75,
      ease: [0.09, 0.8, 0.44, 1],
    }
  }
}

const listVariants = {
  entered: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.25,
      duration: 1,
      ease: [0.09, 0.8, 0.44, 1],
    }
  },
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
      ease: [0.09, 0.8, 0.44, 1],
    }
  }
}

const waveVariants = {
  entered: {
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: [1,-0.5,.25,1.25],
    }
  },
  hidden: {
    scale: 0,
    transition: {
      duration: 0.25,
      ease: [1,-0.5,.25,1.25],
    }
  }
}

const IndexPage = (props) => {

  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "images/profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      waveImage: file(relativePath: { eq: "images/wave.png" }) {
        childImageSharp {
          fluid(maxWidth: 48) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      allPortfolioCard {
        nodes {
          image {
            childImageSharp {
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          client
          description
          title
        }
      }
    }
  `);

  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        return (
          <Layout
            path="work"
            mount={mount}
            transitionStatus={transitionStatus}
          >
            <motion.div
              initial={'hidden'}
              variants={pageVariants}
              animate={transitionStatus}
            >
              <Container>
                <SEO title="Home" />
                <Box css={`
                  margin: 0 auto;
                  max-width: 800px;
                  padding: calc(50vh - 350px) 0 30vh 0;

                  @media (max-width: 1200px) {
                    padding: calc(50vh - 350px) 0 20vh 0;
                  }

                  @media (min-width: 1024px) {
                    max-width: 860px;
                    width: 60vw;
                  }

                  @media (max-width: 600px) {
                    align-items: flex-start;
                    flex-direction: column;
                    padding: 20vh 0;
                  }
                `}>
                  <div css={`
                    position: relative;

                    @media (max-width: 600px) {
                      order: 2;
                    }
                  `}>
                    <GreetingMessage>
                      <WaveIcon
                        initial={'hidden'}
                        variants={waveVariants}
                        animate={transitionStatus}
                        className={transitionStatus === 'entered' ? 'wave-animation' : ''}
                      >
                        <Img fluid={data.waveImage.childImageSharp.fluid}/>
                      </WaveIcon>
                      Hi, my name is Andy.
                    </GreetingMessage>
                    <WelcomeMessage>I’m a product designer that gets excited about interaction design and design ops.</WelcomeMessage>
                    <CurrentMessage>Currently a Product Designer at <span>Dictionary.com</span></CurrentMessage>
                  </div>
                  <CartoonProfile>
                    <Img fluid={data.profileImage.childImageSharp.fluid}/>
                  </CartoonProfile>
                </Box>
              </Container>
            </motion.div>
            <motion.div
              initial={'hidden'}
              variants={listVariants}
              animate={transitionStatus}
            >
              <ProjectList/>
            </motion.div>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default IndexPage
