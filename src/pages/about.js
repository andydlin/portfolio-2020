import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion"

import { Container, Box } from "../styles/global"

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

const AboutPage = (props) => {
  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        return (
          <Layout
            path="about"
            mount={mount}
            transitionStatus={transitionStatus}
          >
            <SEO title="Andy Lin - About" />
            <motion.div
              initial={'hidden'}
              variants={pageVariants}
              animate={transitionStatus}
            >
              <Container>
                <div
                  css={`
                    padding: calc((100vh - 400px)/2) 0;
                    text-align: center;
                  `}
                >
                  <h1
                    css={`
                      margin-bottom: 24px;
                    `}
                  ><span role="img" title="Under construction sign emoji">🚧</span> Currently work in progress, I will be updating this soon.</h1>
                  <h2
                    css={`
                      margin-bottom: 16px;
                    `}
                  >In the meantime, you can find me on:</h2>
                  <Box
                    css={`
                      margin: 0 auto;
                      max-width: 500px;
                    `}
                  >
                    <a href="https://www.linkedin.com/in/andydlin/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://dribbble.com/andydlin" target="_blank" rel="noreferrer">Dribbble</a>
                    <a href="https://codepen.io/ND44" target="_blank" rel="noreferrer">Codepen</a>
                    <a href="https://github.com/andydlin" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://twitter.com/andydlin" target="_blank" rel="noreferrer">Twitter</a>
                  </Box>
                </div>
              </Container>
            </motion.div>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default AboutPage
