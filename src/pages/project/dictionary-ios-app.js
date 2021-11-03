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

import NavProto from "../../images/projects/dcom-ios-app/nav-proto.mp4"
import NewWotdCarousel from "../../images/projects/dcom-ios-app/new-wotd-carousel.mp4"
import NewSearchToggle from "../../images/projects/dcom-ios-app/new-search-toggle.mp4"
import PuzzlePiecesFloating from "../../images/projects/dcom-ios-app/puzzle-pieces-floating.mp4"

class ProjectDetails extends React.Component {
  constructor() {
    super();

    this.introRef = React.createRef();
  }

  render() {
    const sections = ['Intro', 'Redesign', 'Game', 'Results', 'Reflection'];

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
        <ProjectSection name={`navigation-section`} ref={this.redesignRef}>
          <Container>
            <SubSectionTitle
              title={`Streamlined Navigation`}
              description={`The navigation had always been hidden behind a hamburger menu, potentially hiding useful information for app users. I reimagined the navigation as a bottom tab bar so it's more accessible and familiar with other iOS apps. This gives us the opportunity to separate the content within the app for different jobs-to-be-done.`}
            />
          </Container>
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.navOld.childImageSharp.fluid,
                  caption: 'Old: The drawer hid all the links and didn\'t allow users to easily switch between tasks. Users had to navigate backwards multiple layers to see more content.'
                },
                {
                  image: this.props.data.navNew.childImageSharp.fluid,
                  caption: 'New: The bottom tab bar streamlines the navigation between different tasks by laying out the primary uses within the app.'
                },
              ]}
            />
          </Container>
          <Container>
              <VideoWithSubsectionTitle
                video={NavProto}
                description={'With the new navigation, users can easily switch between tasks: learning the new Word of the Day, doing a quick lookup for a definition or synonym, discovering new Slang words, or managing word lists.'}
              />
          </Container>
          <Container>
            <SubSectionTitle
              title={`Word & Synonym of the Day`}
              description={`Word of the Day was another main reason users used our app. Users used this to discover and learn new words. We added Synonym of the Days to appeal to the need for discovery.`}
            />
          </Container>
          <Container>
            <VideoWithSubsectionTitle
              video={NewWotdCarousel}
              description={'The carousel allows users to quickly scan previous Word of the Days or Synonym of the Days incase they missed'}
            />
            <ImageGrid
              images={[
                {
                  image: this.props.data.newSingleWotd.childImageSharp.fluid,
                },
                {
                  image: this.props.data.newSingleSotd.childImageSharp.fluid,
                },
              ]}
            />
          </Container>
          <Container>
            <SubSectionTitle
              title={`Content Discovery & Search`}
              description={`The Discover tab introduces trending searches along with more content about words and meanings. Updated the Word screen with a Common Definition for quick lookups and sticky navigation between the different groups of content.`}
            />
          </Container>
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.contentDiscovery.childImageSharp.fluid,
                },
                {
                  image: this.props.data.newSerp.childImageSharp.fluid,
                },
              ]}
            />
            <VideoWithSubsectionTitle
              videoRight
              video={NewSearchToggle}
              description={'Easily switch between searching for definitions, synonyms, or everything to see all the results.'}
            />
          </Container>
        </ProjectSection>
        <ProjectSection name={`game-section`} ref={this.puzzleRef}>
          <MainSectionTitle
            title={`Word Puzzle Game`}
            description={`With more players entering the market for definitions and synonyms, we explored new ways to increase user retention. I worked with a small team to research, ideate, and develop the Word Puzzle game.`}
          />
          <Container>
            <ImageWithSubsectionTitle
              image={this.props.data.wordPuzzleOverview.childImageSharp.fluid}
              description={<p>On the home screen of our app, we focused on balancing existing user needs (search, Word of the Day, existing games) and bringing attention to our new game.</p>}
            />
          </Container>
          <Container>
            <VideoWithSubsectionTitle
              video={PuzzlePiecesFloating}
              description={`On the home screen, users can start the game, view their current points and coins, and view last week's words.`}
            />
          </Container>
          <Container>
            <SubSectionTitle
              title={`Immersive Experience`}
              description={`We balanced the cohesive branding with a new game-like experience that still felt like Dictionary.com. I created every new element for this game: puzzle pieces, buttons, icons, and more.`}
            />
          </Container>
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.gameElements.childImageSharp.fluid,
                },
                {
                  image: this.props.data.gameScreen1.childImageSharp.fluid,
                },
                {
                  image: this.props.data.gameScreen2.childImageSharp.fluid,
                },
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
      navOld: file(relativePath: { eq: "images/projects/dcom-ios-app/nav-old.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      navNew: file(relativePath: { eq: "images/projects/dcom-ios-app/nav-new.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      newSingleWotd: file(relativePath: { eq: "images/projects/dcom-ios-app/new-single-wotd.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      newSingleSotd: file(relativePath: { eq: "images/projects/dcom-ios-app/new-single-sotd.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      contentDiscovery: file(relativePath: { eq: "images/projects/dcom-ios-app/content-discovery.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      newSerp: file(relativePath: { eq: "images/projects/dcom-ios-app/new-serp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      wordPuzzleOverview: file(relativePath: { eq: "images/projects/dcom-ios-app/word-puzzle-overview.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      gameElements: file(relativePath: { eq: "images/projects/dcom-ios-app/game-elements.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      gameScreen1: file(relativePath: { eq: "images/projects/dcom-ios-app/game-screen-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      gameScreen2: file(relativePath: { eq: "images/projects/dcom-ios-app/game-screen-2.png" }) {
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
            <SEO title="Project: Dictionary.com iOS Redesign & Word Puzzle" />
            <ProjectDetails mount={mount} transitionStatus={transitionStatus} data={data}/>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default ProjectPage
