import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";

import Layout from "../../components/layout"
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

class ProjectDetails extends React.Component {
  constructor() {
    super();

    this.introRef = React.createRef();
  }

  render() {
    const sections = ['Intro', 'Redesign', 'Word Puzzle', 'Results', 'Reflection'];

    return (
      <ProjectWrapper
        mount={this.props.mount}
      >
        <ContentNav
          sections={sections}
          projectTitle={`Dictionary.com iOS App`}
          introRef={this.introRef}
        />
        <HeroImage image={this.props.data.heroImage.childImageSharp.fluid}/>
        <ProjectSection name={'intro-section'} ref={this.introRef}>
          <Summary
            subtitle={`Dictionary.com`}
            title={`iOS Redesign & Word Puzzle`}
            role={`UI & UX`}
            category={`Education`}
            platforms={`iOS`}
            timeframe={`Apr - Aug 2019`}
            summary={<div><p>Dictionary.com's native app was primarily used for looking up definitions or learning new words through the Word of the Day. Overall app usage was pretty static, so my team seeked out ways to increase app usage. The Word Puzzle game increased time spent in our app by appealing to users' needs for new and more engaging content.</p><p>I was the lead designer for ideation, design, prototyping, research, and launch of the Word Puzzle game on iOS. I worked closely with an iOS engineer team, a product manager, and another designer to deliver a game where users can test their vocabulary and build upon it. The MVP release of the Word Puzzle game increased our iOS app usage by 150%.</p></div>}
          />
          <MainSectionTitle
            title={`Improving the Mobile Experience`}
            description={`Dictionary.com's iOS app had been untouched for many years, leaving users with an experience that just works. Overall impression and reviews in the app store mentioned that the app felt dated. We noticed that app usage was fairly low: most sessions involved doing a quick lookup of a word or checking out the Word of the Day. I worked on integrating our new branding along with launching a new game to attract existing and new users to the app.`}
          />
          <ImageGrid
            images={[
              {
                image: this.props.data.overviewImage.childImageSharp.fluid,
              }
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
      heroImage: file(relativePath: { eq: "images/projects/dcom-ios-app-thumbnail.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2880, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      overviewImage: file(relativePath: { eq: "images/projects/dcom-ios-app/overview.png" }) {
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
            <SEO title="Project: Dictionary.com iOS Redesign & Word Puzzle" />
            <ProjectDetails mount={mount} transitionStatus={transitionStatus} data={data}/>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default ProjectPage
