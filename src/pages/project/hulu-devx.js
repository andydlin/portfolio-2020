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
import ImageSlider from "../../components/project/imageSlider"

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
        summary={<div><p>For UCI's MHCID capstone project, we had the opportunity to work with Hulu's DevX team. They play a key role in improving the workflow and process for the engineering organization and focus on defining processes and creating tools to help engineers build amazing products.</p><p>I worked in a team of 4 (product manager, researcher, UX designers) to create Hulu's first unified web portal for the engineering organization. We delivered research findings, hi-fi mockups, prototypes, and detailed documentation for Hulu's DevX Console. This platform will streamline the onboarding process for their growing engineering them and establish a single source of truth for their tools, services, and documentation.</p></div>}
      />
      <ProjectBody>
        <MainSectionTitle
          title={`Our Challenge`}
          description={<div><p>Developers at Hulu have a fragmented workflow that requires them to access many resources from a lot of different sources. On average, Hulu engineers (Hulugans) multi-task and tool switch through a minimum of 8 tools per day. Throughout the entire engineering org, Hulugans use more than 50 different tools and services. Hulu lacks a unified web portal resulting in unorganized, fragmented, and sometimes irrelevant documentation.</p><p>How might we offer them a place to see their work, track their progress, keep up to date on best practices and easily find all the tools they need?</p></div>}
        />
        <MainSectionTitle
          title={`Our Goal`}
          description={<p>We had to opportunity to partner with Hulu's product designer, engineering manager, and lead engineer to explore ways to improve the everyday workflow for Hulugans. We sought to provide a more efficient way to switch between tools, consolidate documentation, and create an onboarding process for new hires - all in one unified web portal.</p>}
        />
        <ImageGrid
          images={[
            [props.data.overviewImage.childImageSharp.fluid, null]
          ]}
        />
        <MainSectionTitle
          title={`Our Process`}
          description={<p>We established a timeline and roadmap with our stakeholders to ensure that everyone is on the same page on expectations and deliverables. This built accountability for both parties and lead to a strong partnership.</p>}
        />
        <Container>
          <ImageWithSubsectionTitle
            image={props.data.doubleDiamondImage.childImageSharp.fluid}
            title={`The Double Diamond`}
            description={<div><p>The double diamond method allowed for a synchronized workflow for our team and provided a structured process for stakeholders to follow. This method is broken down into 4 phases: discover, define, develop, and deliver.</p></div>}
          />
        </Container>
        <Container>
          <ImageGrid
            images={[
              [props.data.orgMapScreenshotImage.childImageSharp.fluid,'Screenshot of Hulu\'s engineering organization chart']
            ]}
          />
        </Container>
        <VizSensor>
          <Container>
            <SubSectionTitle
              title={`Learning more about Hulu DevX and Engineering`}
              description={<p>As our researchers prepared survey questions and interview protocols, the other designer and I created an organization map, analyzed widely used internal tools, and performed a comparative analysis.</p>}
            />
          </Container>
        </VizSensor>
        <ImageSlider
          slides={[
            {
              image: props.data.discoverOrgChart.childImageSharp.fluid,
              caption: 'This is the caption for this image'
            },
            {
              image: props.data.discoverOrgChart.childImageSharp.fluid,
              caption: 'This is the caption for this image'
            },
            {
              image: props.data.discoverOrgChart.childImageSharp.fluid,
              caption: 'This is the caption for this image'
            },
            {
              image: props.data.discoverOrgChart.childImageSharp.fluid,
              caption: 'This is the caption for this image'
            },
          ]}
        />
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
      doubleDiamondImage: file(relativePath: { eq: "images/projects/hulu/double-diamond.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      orgMapScreenshotImage: file(relativePath: { eq: "images/projects/hulu/org-map-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      discoverOrgChart: file(relativePath: { eq: "images/projects/hulu/discover-org-chart.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
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
