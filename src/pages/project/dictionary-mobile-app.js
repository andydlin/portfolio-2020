import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion"
import styled from 'styled-components'

import { spacing, layout } from '../../styles/spacing'
import Layout from "../../components/layout"
import { Container, Box } from "../../styles/global"
import HeroImage from "../../components/project/heroImage"
import Summary from "../../components/project/summary"
import MainSectionTitle from "../../components/project/mainSectionTitle"
import SubSectionTitle from "../../components/project/subSectionTitle"
import ImageResponsive from "../../components/project/ImageResponsive"
import ImageBleedLeft from "../../components/project/ImageBleedLeft"

const pageVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
      ease: 'easeInOut',
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}

const DictionaryProject = (props) => {
  const { mount, transitionStatus } = props;

  return (
    <motion.div
      initial='hidden'
      variants={pageVariants}
      animate={mount ? 'visible' : 'hidden'}
    >
      <HeroImage image={props.data.heroImage.childImageSharp.fluid}/>
      <Summary
        role={`UI & UX`}
        category={`Education`}
        platforms={`iOS`}
        timeframe={`Jan - Mar 2020`}
        summary={<div><p>I was challenged with creating a cohesive design throughout the site and setting up the infrastructure for the marketing and store pages. The brand uses e-commerce as the face of the company and community stories as the support content.</p><p>In order to provide a seamless experience between both fronts, I worked closely with Victor (founder and designer). We ended up using Wordpress to allow for full customization of our community stories and Shopify as the storefront. I wrote custom code with HTML, CSS, jQuery, and Twig.</p></div>}
      />
      <MainSectionTitle
        title={`Section Title`}
        description={`Doggo ipsum very jealous pupper yapper doge pats aqua doggo big ol pupper, thicc woofer shoob. Wrinkler borkf doing me a frighten vvv heckin angery woofer fat boi heckin angery woofer, borkdrive fat boi boofers ruff. Doggorino the neighborhood pupper extremely cuuuuuute aqua doggo floofs, fluffer dat tungg tho you are doin me a concern doing me a frighten shoob, floofs wrinkler many pats.`}
      />
      <ImageResponsive image={props.data.testImageResponsive.childImageSharp.fluid}/>
      <Container>
        <SubSectionTitle
          title={`Sub Section Title`}
          description={`Doggo ipsum very jealous pupper yapper doge pats aqua doggo big ol pupper, thicc woofer shoob. Wrinkler borkf doing me a frighten vvv heckin angery woofer fat boi heckin angery woofer, borkdrive fat boi boofers ruff.`}
        />
      </Container>
      <ImageBleedLeft
        image={props.data.testImageResponsive.childImageSharp.fluid}
        title={`Sub Section Title`}
        description={`Doggo ipsum very jealous pupper yapper doge pats aqua doggo big ol pupper, thicc woofer shoob. Wrinkler borkf doing me a frighten vvv heckin angery woofer fat boi heckin angery woofer, borkdrive fat boi boofers ruff.`}
      />
    </motion.div>
  )
}

const ProjectPage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "images/projects/dcom/thumbnail.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2880, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      testImageResponsive: file(relativePath: { eq: "images/projects/testImage_responsive.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2880, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  console.log(data);

  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        return (
          <Layout
            path="work"
            mount={mount}
            transitionStatus={transitionStatus}
          >
            <SEO title="Project: Dictionary.com Mobile App" />
            <DictionaryProject mount={mount} transitionStatus={transitionStatus} data={data}/>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default ProjectPage
