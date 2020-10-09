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
        subtitle={`Hulu`}
        title={`DevX Console`}
        role={`UX Designer`}
        category={`Productivity`}
        platforms={`Web`}
        timeframe={`Mar - Aug 2020`}
        summary={<div><p>For UCI's MHCID capstone project, we had the opportunity to work with Hulu's DevX team. They play a key role in improving the workflow and process for the engineering organization and focus on defining processes and creating tools to help engineers build amazing products.</p><p>I worked in a team of 4 (product manager, researcher, UX designers) to create Hulu's first unified web portal for the engineering organization. At the end of the project, we presented and delivered all our research, hi-fi mockups and prototypes, and detailed documentation to Hulu DevX.</p></div>}
      />
      <ProjectBody>
        <MainSectionTitle
          title={`The Challenge`}
          description={<p>Developers at Hulu have a fragmented workflow that requires them to access many resources from a lot of different sources. On average, Hulu engineers (Hulugans) multi-task and tool switch through a minimum of 8 tools per day. Throughout the entire engineering org, Hulugans use more than 50 different tools and services. Hulu lacks a unified web portal resulting in unorganized, fragmented, and sometimes irrelevant documentation.</p>}
        />
        <ImageGrid
          images={[
            [props.data.overviewImage.childImageSharp.fluid, null]
          ]}
        />
        <MainSectionTitle
          title={`Overview`}
          description={<div><p>We partnered with Hulu's DevX team to explore ways to improve the everyday workflow for Hulugans. We aimed to provide a more efficient way to switch between tools, consolidate documentation, and create an onboarding process for new hires - all in one unified web portal.</p></div>}
        />
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
      heroImage: file(relativePath: { eq: "images/projects/hulu-thumbnail.jpg" }) {
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
      overviewImage: file(relativePath: { eq: "images/projects/hulu/overview.jpg" }) {
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
