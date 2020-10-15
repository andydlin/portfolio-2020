import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";

import Layout from "../../components/layout"
import VizSensor from "../../components/visibilitySensor"
import ProjectWrapper from "../../components/projectWrapper"
import { Container, ProjectBody } from "../../styles/global"

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
            {
              image: props.data.overviewImage.childImageSharp.fluid
            }
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
        <MainSectionTitle
          title={`Discover`}
          description={<p>In the discover phase, our researchers prepared survey questions and interview protocols while I worked with the other designer to create an organization map, analyzed widely used internal tools, and performed a comparative analysis.</p>}
        />
        <ImageSlider
          slides={[
            {
              image: props.data.discoverWorkflowOverview.childImageSharp.fluid,
              caption: 'We spoke with the engineer manager to get a better understanding of their workflow.'
            },
            {
              image: props.data.discoverOrgChart.childImageSharp.fluid,
              caption: 'A top level overview of the engineering organization teams.'
            },
            {
              image: props.data.discoverBubbleChart.childImageSharp.fluid,
              caption: 'Mapped out the 50+ tools to see frequency and overlap between teams.'
            },
            {
              image: props.data.discoverInternalToolsAnalysis.childImageSharp.fluid,
              caption: 'Analyzed internal tools to develop a stronger understanding of the tools the engineers use everyday.'
            },
            {
              image: props.data.discoverComparativeAnalysis.childImageSharp.fluid,
              caption: 'Worked with our researcher to perform a comparative analysis on similar platforms.'
            },
          ]}
        />
        <VizSensor>
          <Container>
            <SubSectionTitle
              description={<p>We sent out surveys, conducted user interviews, and shadowed engineers virtually due to shelter-in-place. We made sure our participants represented different teams, responsibilities, and tenure at Hulu.</p>}
            />
          </Container>
        </VizSensor>
        <Container>
          <ImageGrid
            images={[
              {
                image: props.data.surveyFindings1.childImageSharp.fluid,
              },
              {
                image: props.data.surveyFindings2.childImageSharp.fluid,
              }
            ]}
          />
        </Container>
        <Container>
          <ImageWithSubsectionTitle
            imageRight
            image={props.data.virtualShadowingKeyInsights.childImageSharp.fluid}
            title={'Virtual Shadowing'}
            description={<p>We shadowed 3 participants, each from a different team with different responsibilities. During the 1 hour shadowing session, we asked participants to think out loud to provide insight into their daily tasks.</p>}
            css={`
              max-width: 1440px;
            `}
          />
        </Container>
        <ImageSlider
          slides={[
            {
              image: props.data.virtualShadowingInsights1.childImageSharp.fluid,
              caption: 'Each virtual shadowing session was 1 hour long over Zoom.'
            },
            {
              image: props.data.virtualShadowingInsights2.childImageSharp.fluid,
              caption: 'Participants immediately turned to Slack or documentation when seeking help.'
            },
            {
              image: props.data.virtualShadowingInsights3.childImageSharp.fluid,
              caption: 'A lot of diversity in the ways participants organized and managed their workflow.'
            },
            {
              image: props.data.virtualShadowingInsights4.childImageSharp.fluid,
              caption: 'Participants switched between a minimum of 8 differen tools and services.'
            },
          ]}
        />
        <Container>
          <ImageWithSubsectionTitle
            imageRight
            image={props.data.interviewsKeyInsights.childImageSharp.fluid}
            title={'User Interviews'}
            description={<p>Interviews allowed us to dig deeper after the virtual shadowing. We were able to ask questions and develop a better understanding of the what engineers like, what they dislike, what they think can be improved, and overall thoughts about their workflow and process.</p>}
            css={`
              max-width: 1440px;
            `}
          />
        </Container>
        <ImageSlider
          slides={[
            {
              image: props.data.interviewsInsights1.childImageSharp.fluid,
              caption: 'Each interview session was 1 hour long over Zoom.'
            },
            {
              image: props.data.interviewsInsights2.childImageSharp.fluid,
              caption: 'Referrencing some commonly used tools, participants felt that the tools lacked navigation, feedback, felt old, and lacked ownership.'
            },
            {
              image: props.data.interviewsInsights3.childImageSharp.fluid,
              caption: 'Participants appreciate Hulu Wiki, but felt that the lack of ownership and management created outdated and irrelevant information.'
            },
            {
              image: props.data.interviewsInsights4.childImageSharp.fluid,
              caption: 'Knowing that most, if not all, Hulu engineers used Apple devices meant that we can use Apple best practices to our advantage.'
            },
          ]}
        />
        <MainSectionTitle
          title={`Define`}
          description={<p>After synthesizing our initial findings, we utilized a card sort to figure out what features specifically would be most important to our users. After this check-in, we started translating our research into user personas and user journey maps to help contextualize our end user and their context.</p>}
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
      currentDevxScreenshot: file(relativePath: { eq: "images/projects/hulu/current-devx-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      discoverWorkflowOverview: file(relativePath: { eq: "images/projects/hulu/discover-workflow-overview.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
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
      discoverInternalToolsAnalysis: file(relativePath: { eq: "images/projects/hulu/discover-internal-tools-analysis.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      discoverComparativeAnalysis: file(relativePath: { eq: "images/projects/hulu/discover-comparative-analysis.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      discoverBubbleChart: file(relativePath: { eq: "images/projects/hulu/discover-bubble-chart.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      surveyFindings1: file(relativePath: { eq: "images/projects/hulu/survey-findings-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      surveyFindings2: file(relativePath: { eq: "images/projects/hulu/survey-findings-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      virtualShadowingKeyInsights: file(relativePath: { eq: "images/projects/hulu/virtual-shadowing-key-insights.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      virtualShadowingInsights1: file(relativePath: { eq: "images/projects/hulu/virtual-shadowing-insights-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      virtualShadowingInsights2: file(relativePath: { eq: "images/projects/hulu/virtual-shadowing-insights-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      virtualShadowingInsights3: file(relativePath: { eq: "images/projects/hulu/virtual-shadowing-insights-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      virtualShadowingInsights4: file(relativePath: { eq: "images/projects/hulu/virtual-shadowing-insights-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      interviewsKeyInsights: file(relativePath: { eq: "images/projects/hulu/interviews-key-insights.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      interviewsInsights1: file(relativePath: { eq: "images/projects/hulu/interviews-insights-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      interviewsInsights2: file(relativePath: { eq: "images/projects/hulu/interviews-insights-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      interviewsInsights3: file(relativePath: { eq: "images/projects/hulu/interviews-insights-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      interviewsInsights4: file(relativePath: { eq: "images/projects/hulu/interviews-insights-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
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
