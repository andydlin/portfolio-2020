import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";

import Layout from "../../components/layout"
import VizSensor from "../../components/visibilitySensor"
import ProjectWrapper from "../../components/projectWrapper"
import ContentNav from "../../components/contentNav"
import { Container, ProjectSection, SectionWithBgColor } from "../../styles/global"

import HeroImage from "../../components/project/heroImage"
import Summary from "../../components/project/summary"
import MainSectionTitle from "../../components/project/mainSectionTitle"
import SubSectionTitle from "../../components/project/subSectionTitle"
import ImageWithSubsectionTitle from "../../components/project/imageWithSubsectionTitle"
import ImageGrid from "../../components/project/imageGrid"
import ImageSlider from "../../components/project/imageSlider"

class ProjectDetails extends React.Component {
  constructor() {
    super();

    this.introRef = React.createRef();
  }

  render() {
    const sections = ['Intro', 'MVP', 'Iterations', 'Outcome', 'Explorations'];

    return (
      <ProjectWrapper
        mount={this.props.mount}
      >
        <ContentNav
          sections={sections}
          projectTitle={`Grammar Coach`}
          introRef={this.introRef}
        />
        <HeroImage image={this.props.data.heroImage.childImageSharp.fluid}/>
        <ProjectSection name={'intro-section'} ref={this.introRef}>
          <Summary
            subtitle={`Thesaurus.com`}
            title={`Grammar Coach`}
            role={`Product Designer`}
            category={`Education`}
            platforms={`Web`}
            timeframe={`2020`}
            summary={<div><p>Thesaurus.com steps into the education space by providing resources, services, and tools for writing. Grammar Coach is their first writing product and it offers spelling and grammar check, synonym suggestions, sentiment analysis, and tone, formality, and engagement, to help users hone their writing skills.</p><p>I was the lead designer for ideation, design, research, and launch of Grammar Coach. I worked closely with a product manager, 4 engineers, and 3 data scientists to deliver a writing tool that provides linguist-curated synonyms and customized grammar recommendations. The MVP release of Grammar Coach has an average session duration of more than 30 minutes.</p></div>}
          />
          <MainSectionTitle
            title={`Objective`}
            description={<p>Thesaurus.com is well-known for providing relevant synonyms and antonyms for your emails, messages, academic papers, and more. In order to provide more resources to help people improve their writing, we decided to explore a writing tool that leverages our existing product and capabilities. I worked closely with the product manager to brainstorm and ideate an MVP writing tool along with creating a roadmap to test, iterate, and add more features.</p>}
          />
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.overviewImage.childImageSharp.fluid,
                }
              ]}
            />
          </Container>
        </ProjectSection>
        <ProjectSection name={'mvp-section'}>
          <MainSectionTitle
            title={`Initial Research`}
            description={<div><p>We conducted research on Usertesting.com on both existing users and new users to learn more about the tools and services they use. In addition, we performed competitive analysis, sent out surveys, ran usability tests, and got direct feedback from users.</p><p>Thesaurus.com has a wide audience, anywhere from elementary students to grandparents. In order to narrow our scope, we focused on learning more about college students, writers, and professionals in our research.</p></div>}
          />
          <ImageSlider
            slides={[
              {
                image: this.props.data.discoverUserNeeds.childImageSharp.fluid
              },
              {
                image: this.props.data.discoverUserInterviews.childImageSharp.fluid
              },
              {
                image: this.props.data.discoverCompetitiveGrammarly.childImageSharp.fluid
              },
              {
                image: this.props.data.discoverCompetitiveGoogle.childImageSharp.fluid
              },
            ]}
          />
          <SectionWithBgColor>
            <Container>
              <ImageWithSubsectionTitle
                  image={this.props.data.researchV1.childImageSharp.fluid}
                  title={'Early Feedback'}
                  description={<p>We took advantage of our 70+ million monthly visitors and released a MVP v1 to start getting feedback from real users. This allowed users to enter text and find synonyms for a word by leveraging our existing products. We put this in front of real people so we can iterate quicker.</p>}
                  longImage
                />
            </Container>
          </SectionWithBgColor>
          <Container>
            <ImageWithSubsectionTitle
                image={this.props.data.researchV2.childImageSharp.fluid}
                title={'Small Iterations'}
                description={<p>We did a quick iteration: removed unnecessary text (originally used to provide more resources for writing) and used a single background color to create a more seamless interface. Users received this small update well, so we know the more simple design was the right direction.</p>}
                longImage
                imageRight
              />
          </Container>
          <Container>
            <SubSectionTitle
              title={`Spelling & Grammar Check`}
              description={<p>While we gathered more feedback from real users, I continued to create MVP designs for spelling and grammar check. The synonym swap behavior has been received well, so for this round I reused that pattern. This allowed me to move quickly and lead to quicker releases. Along with introducing spelling and grammar check, I worked on making the tool more responsive to support users on all devices.</p>}
            />
          </Container>
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.researchV3.childImageSharp.fluid,
                  caption: 'Users liked being able to use the tool on their phone, but found the experience buggy and not intuitive. In addition, they were getting confused between the synonym swap and the grammar correction.'
                }
              ]}
            />
          </Container>
        </ProjectSection>
        <ProjectSection name={'iterations-section'}>
          <Container>
            <MainSectionTitle
              title={'Layout Iterations'}
              description={<p>Concurrently, I took this opportunity to start iterating on UX and layout ideas. I utilized Usertesting.com and UsabilityHub to get first impressions on the next round of mockups and prototypes.</p>}
            />
          </Container>
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.iterationsImage.childImageSharp.fluid,
                  caption: 'A sample of iterations for both desktop and mobile views.'
                }
              ]}
            />
          </Container>
        </ProjectSection>
      </ProjectWrapper>
    )
  }
}

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "images/projects/grammar-coach-thumbnail.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2880, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      overviewImage: file(relativePath: { eq: "images/projects/grammar-coach/overview.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      discoverUserNeeds: file(relativePath: { eq: "images/projects/grammar-coach/discover-user-needs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      discoverUserInterviews: file(relativePath: { eq: "images/projects/grammar-coach/discover-user-interviews.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      discoverCompetitiveGrammarly: file(relativePath: { eq: "images/projects/grammar-coach/discover-competitive-analysis-grammarly.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      discoverCompetitiveGoogle: file(relativePath: { eq: "images/projects/grammar-coach/discover-competitive-analysis-google-docs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      researchV1: file(relativePath: { eq: "images/projects/grammar-coach/research-v1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      researchV2: file(relativePath: { eq: "images/projects/grammar-coach/research-v2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      researchV3: file(relativePath: { eq: "images/projects/grammar-coach/research-v3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      iterationsImage: file(relativePath: { eq: "images/projects/grammar-coach/iterations.png" }) {
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
            <SEO title="Project: Thesaurus.com Grammar Coach" />
            <ProjectDetails mount={mount} transitionStatus={transitionStatus} data={data}/>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default ProjectPage
