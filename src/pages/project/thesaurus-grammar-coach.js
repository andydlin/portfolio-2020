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
import VideoWithSubsectionTitle from "../../components/project/videoWithSubsectionTitle"

import IterationsProto1 from "../../images/projects/grammar-coach/iterations-proto1.mp4"
import IterationsProto2 from "../../images/projects/grammar-coach/iterations-proto2.mp4"
import ExplorationsProto1 from "../../images/projects/grammar-coach/explorations-proto1.mp4"
import ExplorationsProto2 from "../../images/projects/grammar-coach/explorations-proto2.mp4"
import OutcomeVideo from "../../images/projects/grammar-coach/outcome-video.mp4"

class ProjectDetails extends React.Component {
  constructor() {
    super();

    this.introRef = React.createRef();
  }

  render() {
    const sections = ['Intro', 'Research', 'Iterations', 'Delivery', 'Results', 'Reflection'];

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
        <ProjectSection name={'research-section'}>
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
            <Container>
              <ImageWithSubsectionTitle
                image={this.props.data.researchV2.childImageSharp.fluid}
                title={'Small Iterations'}
                description={<p>We did a quick iteration: removed unnecessary text (originally used to provide more resources for writing) and used a single background color to create a more seamless interface. Users received this small update well, so we know the more simple design was the right direction.</p>}
                longImage
                imageRight
              />
            </Container>
          </SectionWithBgColor>
          <VizSensor>
            <Container>
              <SubSectionTitle
                title={`Spelling & Grammar Check`}
                description={<p>While we gathered more feedback from real users, I continued to create MVP designs for spelling and grammar check. The synonym swap behavior has been received well, so for this round I reused that pattern. This allowed me to move quickly and lead to quicker releases. Along with introducing spelling and grammar check, I worked on making the tool more responsive to support users on all devices.</p>}
              />
            </Container>
          </VizSensor>
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
          <SectionWithBgColor>
            <Container>
              <VideoWithSubsectionTitle
                video={IterationsProto1}
                description={'This prototype demonstrates the flow of clicking on a word with a suggestion, opening up the assistant panel, and scrolling to the corresponding suggestion. Participants found the additional step unnecessary and we ended up removing the extra in-between step.'}
              />
            </Container>
            <Container>
              <VideoWithSubsectionTitle
                videoRight
                video={IterationsProto2}
                description={'I explored a writing/editing toggle to let users choose a mode. Participants found the toggle confusing, but liked the idea of hiding suggestions when they don\'t want to see it. Participants also liked being able to cycle through suggestions quickly.'}
              />
            </Container>
            <ImageSlider
              slides={[
                {
                  image: this.props.data.iterationsFindings1.childImageSharp.fluid
                },
                {
                  image: this.props.data.iterationsFindings2.childImageSharp.fluid
                },
                {
                  image: this.props.data.iterationsFindings3.childImageSharp.fluid
                },
                {
                  image: this.props.data.iterationsFindings4.childImageSharp.fluid
                },
              ]}
            />
          </SectionWithBgColor>
        </ProjectSection>
        <ProjectSection name={'delivery-section'}>
          <MainSectionTitle
            title={`Delivery`}
            description={<div><p>For delivery, I combined my explorations with existing style guides and addressed the findings from both qualitative and quantitative research. The latest release includes:</p><ul><li>Synonyms by relevancy</li><li>Overall writing score</li><li>Writing assistant with categories</li><li>Temporary "Check Grammar" button</li><li>Reponsive layout</li></ul></div>}
          />
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.outcome3.childImageSharp.fluid,
                  caption: 'Help menu for new users'
                },
                {
                  image: this.props.data.outcome4.childImageSharp.fluid,
                  caption: 'Empty state for first page load'
                },
              ]}
            />
          </Container>
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.outcome1.childImageSharp.fluid,
                  caption: 'Overall writing score'
                },
                {
                  image: this.props.data.outcome2.childImageSharp.fluid,
                  caption: 'Synonym swap and writing assistant'
                },
              ]}
            />
          </Container>
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.outcome5.childImageSharp.fluid,
                  caption: 'Fully responsive design that works on all devices'
                },
              ]}
            />
          </Container>
          <Container>
              <VideoWithSubsectionTitle
                video={OutcomeVideo}
                title={'CodePen Prototypes'}
                description={<p>In order to flush out animations and interations, I created prototypes in CodePen. These prototypes also helped engineers when implementing the designs. You can view these live in the <a href="https://codepen.io/collection/Akqwzo" target="_blank">CodePen Collection</a>.</p>}
              />
            </Container>
        </ProjectSection>
        <ProjectSection name={'results-section'}>
          <MainSectionTitle
            title={`Results`}
            description={<p>About a month after our latest release, our NPS score has improved along with general feedback from our users. Our updated features for grammar and spelling check, formality and engagement check, and tone detection has been received well. We are continuously iterating on both the user experience front and the backend to create a smarter writing tool.</p>}
          />
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.results.childImageSharp.fluid,
                },
              ]}
            />
          </Container>
        </ProjectSection>
        <ProjectSection name={'reflection-section'}>
          <MainSectionTitle
            title={`Reflection`}
            description={<div><p>I'm super grateful for the opportunity to design a product from the ground up for millions of people. Being able to work directly with a product manager to shape the product goals and direction was both challenging and fun and very satisfying. I'm also grateful that I have access to millions of people throughout the research phase and throughout the ideation and design phases.</p><p>Some key takeaways from the work I've done so far for Grammar Coach:</p><ul><li>Communicate early and frequently with stakeholders</li><li>Don't let feedback and data decide the product, instead, use it to make informative decisions</li><li>Prototypes will help sell complex concepts and also help clarify the idea for engineers</li><li>Creating a writing tool / word processor is no joke</li></ul></div>}
          />
          <MainSectionTitle
            title={`Explorations`}
            description={<p>I also had the opportunity to explore blue sky ideas. I explored designs that were similar to Thesaurus.com's style guide but not necessarily following the existing system. This exercise was a lot of fun and allowed me to run with my imagination.</p>}
          />
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.explorations1.childImageSharp.fluid,
                  caption: 'Grouped score and assistant to the right so they\'re closer in proximity to create a relationship between the two. Explored "pages" like in common word processors since some feedback wanted that experience.'
                },
                {
                  image: this.props.data.explorations2.childImageSharp.fluid,
                  caption: 'Always visible text markup for quick access.'
                },
                {
                  image: this.props.data.explorations3.childImageSharp.fluid,
                  caption: 'Text markup toggle to provide more space for the text.'
                }
              ]}
            />
          </Container>
          <Container>
            <VideoWithSubsectionTitle
              videoRight
              video={ExplorationsProto1}
              title={'Layout Explorations'}
              description={'The show/hide assistant toggle creates a cleaner view for people who want to focus on writing. The suggestion underlines disappear as well to remove any distractions. A simple synonym swap switch lets users toggle the feature with ease.'}
            />
          </Container>
          <Container>
            <VideoWithSubsectionTitle
              mobileVideo
              video={ExplorationsProto2}
              title={'Mobile Web Experience'}
              description={'Since about half our visitors are on their mobile phones, I focused on creating an experience that worked for both desktop and mobile devices. With the limited space of a moble phone, I separated the assistant into two steps. This solos out each suggestion to provide a distraction free experience.'}
            />
          </Container>
          <ImageGrid
            images={[
              {
                image: this.props.data.explorationsOverview.childImageSharp.fluid,
              },
            ]}
          />
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
      iterationsFindings1: file(relativePath: { eq: "images/projects/grammar-coach/iterations-findings-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      iterationsFindings2: file(relativePath: { eq: "images/projects/grammar-coach/iterations-findings-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      iterationsFindings3: file(relativePath: { eq: "images/projects/grammar-coach/iterations-findings-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      iterationsFindings4: file(relativePath: { eq: "images/projects/grammar-coach/iterations-findings-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      explorations1: file(relativePath: { eq: "images/projects/grammar-coach/explorations-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      explorations2: file(relativePath: { eq: "images/projects/grammar-coach/explorations-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      explorations3: file(relativePath: { eq: "images/projects/grammar-coach/explorations-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      explorationsOverview: file(relativePath: { eq: "images/projects/grammar-coach/explorations-overview.png" }) {
        childImageSharp {
          fluid(maxWidth: 2880, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      outcome1: file(relativePath: { eq: "images/projects/grammar-coach/outcome-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      outcome2: file(relativePath: { eq: "images/projects/grammar-coach/outcome-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      outcome3: file(relativePath: { eq: "images/projects/grammar-coach/outcome-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      outcome4: file(relativePath: { eq: "images/projects/grammar-coach/outcome-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      outcome5: file(relativePath: { eq: "images/projects/grammar-coach/outcome-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      results: file(relativePath: { eq: "images/projects/grammar-coach/results.png" }) {
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
            <SEO title="Project: Thesaurus.com Grammar Coach" />
            <ProjectDetails mount={mount} transitionStatus={transitionStatus} data={data}/>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default ProjectPage
