import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";

import Layout from "../../components/layout"
import VizSensor from "../../components/visibilitySensor"
import ProjectWrapper from "../../components/projectWrapper"
import { Container, ProjectBody } from "../../styles/global"
import { layout } from '../../styles/spacing'

import HeroImage from "../../components/project/heroImage"
import Summary from "../../components/project/summary"
import MainSectionTitle from "../../components/project/mainSectionTitle"
import SubSectionTitle from "../../components/project/subSectionTitle"
import ImageWithSubsectionTitle from "../../components/project/imageWithSubsectionTitle"
import ImageGrid from "../../components/project/imageGrid"

const ProjectDetails = (props) => {
  const { mount } = props;

  return (
    <ProjectWrapper
      mount={mount}
    >
      <HeroImage image={props.data.heroImage.childImageSharp.fluid}/>
      <Summary
        subtitle={`Dictionary.com`}
        title={`Mobile App`}
        role={`UI & UX`}
        category={`Education`}
        platforms={`iOS`}
        timeframe={`Jan - Mar 2020`}
        summary={<div><p>I was challenged with creating a cohesive design throughout the site and setting up the infrastructure for the marketing and store pages. The brand uses e-commerce as the face of the company and community stories as the support content.</p><p>In order to provide a seamless experience between both fronts, I worked closely with Victor (founder and designer). We ended up using Wordpress to allow for full customization of our community stories and Shopify as the storefront. I wrote custom code with HTML, CSS, jQuery, and Twig.</p></div>}
      />
      <ProjectBody>
        <MainSectionTitle
          title={`Section Title`}
          description={`Doggo ipsum very jealous pupper yapper doge pats aqua doggo big ol pupper, thicc woofer shoob. Wrinkler borkf doing me a frighten vvv heckin angery woofer fat boi heckin angery woofer, borkdrive fat boi boofers ruff. Doggorino the neighborhood pupper extremely cuuuuuute aqua doggo floofs, fluffer dat tungg tho you are doin me a concern doing me a frighten shoob, floofs wrinkler many pats.`}
        />
        <Container>
          <ImageGrid
            images={[
              [props.data.testImageResponsive.childImageSharp.fluid, null]
            ]}
          />
        </Container>
        <ImageWithSubsectionTitle
          image={props.data.testImageResponsive.childImageSharp.fluid}
          title={`Sub Section Title`}
          description={`Doggo ipsum very jealous pupper yapper doge pats aqua doggo big ol pupper, thicc woofer shoob. Wrinkler borkf doing me a frighten vvv heckin angery woofer fat boi heckin angery woofer, borkdrive fat boi boofers ruff.`}
        />
        <ImageWithSubsectionTitle
          image={props.data.testImageResponsive.childImageSharp.fluid}
          title={`Sub Section Title`}
          description={`Doggo ipsum very jealous pupper yapper doge pats aqua doggo big ol pupper, thicc woofer shoob. Wrinkler borkf doing me a frighten vvv heckin angery woofer fat boi heckin angery woofer, borkdrive fat boi boofers ruff.`}
          imageRight={true}
        />
        <ImageGrid
          images={[
            [props.data.testImageResponsive.childImageSharp.fluid, null]
          ]}
        />
        <Container>
          <ImageWithSubsectionTitle
            image={props.data.testImageResponsive.childImageSharp.fluid}
            title={`Sub Section Title`}
            description={`Doggo ipsum very jealous pupper yapper doge pats aqua doggo big ol pupper, thicc woofer shoob. Wrinkler borkf doing me a frighten vvv heckin angery woofer fat boi heckin angery woofer, borkdrive fat boi boofers ruff.`}
          />
        </Container>
        <Container>
          <ImageGrid
            images={[
              [props.data.testImageResponsive.childImageSharp.fluid, 'This is an image caption'],
              [props.data.testImageResponsive.childImageSharp.fluid, null],
              [props.data.testImageResponsive.childImageSharp.fluid, null]
            ]}
          />
        </Container>
        <Container>
          <ImageGrid
            images={[
              [props.data.testImageResponsive.childImageSharp.fluid, null],
              [props.data.testImageResponsive.childImageSharp.fluid, null]
            ]}
          />
        </Container>
      </ProjectBody>
    </ProjectWrapper>
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
            <ProjectDetails mount={mount} transitionStatus={transitionStatus} data={data}/>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default ProjectPage
