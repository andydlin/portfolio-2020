import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from 'styled-components'
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion"
import Link from "gatsby-plugin-transition-link";

import Layout from "../components/layout"
import { colors } from '../styles/colors'
import { Box, Container } from '../styles/global'
import { spacing } from '../styles/spacing'
import { H1, H2, H3, H4 } from "../styles/typography"
import ProjectThumbnail from "../components/ProjectThumbnail"

const GreetingMessage = styled.h1`
  color: ${colors.gray200};
  ${H4}
`

const WelcomeMessage = styled.h2`
  color: ${colors.gray400};
  ${H3}
  margin: ${spacing.s000} 0 ${spacing.s100} 0;
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
  }
`

const WaveIcon = styled.div`
  left: -${spacing.s600};
  position: absolute;
  top: -${spacing.s100};
  width: 24px;

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
      duration: 0.5,
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
      delay: 1,
      duration: 0.5,
      ease: [0.09, 0.8, 0.44, 1],
    }
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: [0.09, 0.8, 0.44, 1],
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
                  padding: calc(50vh - 250px) 0 40vh 0;

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
                      <WaveIcon>
                        <Img fluid={data.waveImage.childImageSharp.fluid}/>
                      </WaveIcon>
                      Hi, my name is Andy.
                    </GreetingMessage>
                    <WelcomeMessage>I’m a multidisciplinary designer with a focus on interaction design from San Francisco, CA.</WelcomeMessage>
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
              <Container
                css={`
                    padding: 0 10rem;
                `}
              >
                {data.allPortfolioCard.nodes.map((card, index, arr) => {
                  return (
                    <div key={card.title}>
                      <Img alt={card.alt} fluid={card.image.childImageSharp.fluid}/>
                      <h3>{card.client}</h3>
                    </div>
                  )
                })}
                <Link
                  to='/project/dictionary-mobile-app'
                  exit={{
                    length: 1.65,
                  }}
                  entry={{
                    delay: 1.65,
                  }}
                >
                  <ProjectThumbnail/>
                </Link>
              </Container>
            </motion.div>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default IndexPage
