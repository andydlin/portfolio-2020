import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";

import Layout from "../../components/layout"
import VizSensor from "../../components/visibilitySensor"
import ProjectWrapper from "../../components/projectWrapper"
import ContentNav from "../../components/contentNav"
import { Container, ProjectSection } from "../../styles/global"

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
    const sections = ['Intro', 'Discover', 'Define', 'Develop', 'Deliver', 'Results'];

    return (
      <ProjectWrapper
        mount={this.props.mount}
      >
        <ContentNav
          sections={sections}
          projectTitle={`Hulu DevX Console`}
          introRef={this.introRef}
        />
        <HeroImage image={this.props.data.heroImage.childImageSharp.fluid}/>
        <ProjectSection name={'intro-section'} ref={this.introRef}>
          <Summary
            subtitle={`Hulu`}
            title={`DevX Console`}
            role={`UX Designer`}
            category={`Productivity`}
            platforms={`Web`}
            timeframe={`Mar - Aug 2020`}
            summary={<div><p>For UCI's MHCID capstone project, we had the opportunity to work with Hulu's DevX team. They play a key role in improving the workflow and process for the engineering organization and focus on defining processes and creating tools to help engineers build amazing products.</p><p>I worked in a team of 4 (product manager, researcher, UX designers) to create Hulu's first unified web portal for the engineering organization. We delivered research findings, hi-fi mockups, prototypes, and detailed documentation for Hulu's DevX Console. This platform will streamline the onboarding process for their growing engineering them and establish a single source of truth for their tools, services, and documentation.</p></div>}
          />
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
                image: this.props.data.overviewImage.childImageSharp.fluid
              }
            ]}
          />
          <MainSectionTitle
            title={`Our Process`}
            description={<p>We established a timeline and roadmap with our stakeholders to ensure that everyone is on the same page on expectations and deliverables. This built accountability for both parties and lead to a strong partnership.</p>}
          />
          <Container>
            <ImageWithSubsectionTitle
              image={this.props.data.doubleDiamondImage.childImageSharp.fluid}
              description={<div><p>The double diamond method allowed for a synchronized workflow for our team and provided a structured process for stakeholders to follow. This method is broken down into 4 phases: discover, define, develop, and deliver.</p></div>}
              css={`
                max-width: 1440px;
              `}
            />
          </Container>
        </ProjectSection>
        <ProjectSection name={'discover-section'}>
          <MainSectionTitle
            title={`Discover`}
            description={<p>In the discover phase, our researchers prepared survey questions and interview protocols while I worked with the other designer to create an organization map, analyzed widely used internal tools, and performed a comparative analysis.</p>}
          />
          <ImageSlider
            slides={[
              {
                image: this.props.data.discoverWorkflowOverview.childImageSharp.fluid,
                caption: 'We spoke with the engineer manager to get a better understanding of their workflow.'
              },
              {
                image: this.props.data.discoverOrgChart.childImageSharp.fluid,
                caption: 'A top level overview of the engineering organization teams.'
              },
              {
                image: this.props.data.discoverBubbleChart.childImageSharp.fluid,
                caption: 'Mapped out the 50+ tools to see frequency and overlap between teams.'
              },
              {
                image: this.props.data.discoverInternalToolsAnalysis.childImageSharp.fluid,
                caption: 'Analyzed internal tools to develop a stronger understanding of the tools the engineers use everyday.'
              },
              {
                image: this.props.data.discoverComparativeAnalysis.childImageSharp.fluid,
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
                  image: this.props.data.surveyFindings1.childImageSharp.fluid,
                },
                {
                  image: this.props.data.surveyFindings2.childImageSharp.fluid,
                }
              ]}
              css={`
                max-width: 1680px;
              `}
            />
          </Container>
          <Container>
            <ImageWithSubsectionTitle
              imageRight
              image={this.props.data.virtualShadowingKeyInsights.childImageSharp.fluid}
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
                image: this.props.data.virtualShadowingInsights1.childImageSharp.fluid,
                caption: 'Each virtual shadowing session was 1 hour long over Zoom.'
              },
              {
                image: this.props.data.virtualShadowingInsights2.childImageSharp.fluid,
                caption: 'Participants immediately turned to Slack or documentation when seeking help.'
              },
              {
                image: this.props.data.virtualShadowingInsights3.childImageSharp.fluid,
                caption: 'A lot of diversity in the ways participants organized and managed their workflow.'
              },
              {
                image: this.props.data.virtualShadowingInsights4.childImageSharp.fluid,
                caption: 'Participants switched between a minimum of 8 differen tools and services.'
              },
            ]}
          />
          <Container>
            <ImageWithSubsectionTitle
              imageRight
              image={this.props.data.interviewsKeyInsights.childImageSharp.fluid}
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
                image: this.props.data.interviewsInsights1.childImageSharp.fluid,
                caption: 'Each interview session was 1 hour long over Zoom.'
              },
              {
                image: this.props.data.interviewsInsights2.childImageSharp.fluid,
                caption: 'Referrencing some commonly used tools, participants felt that the tools lacked navigation, feedback, felt old, and lacked ownership.'
              },
              {
                image: this.props.data.interviewsInsights3.childImageSharp.fluid,
                caption: 'Participants appreciate Hulu Wiki, but felt that the lack of ownership and management created outdated and irrelevant information.'
              },
              {
                image: this.props.data.interviewsInsights4.childImageSharp.fluid,
                caption: 'Knowing that most, if not all, Hulu engineers used Apple devices meant that we can use Apple best practices to our advantage.'
              },
            ]}
          />
          <ImageGrid
            images={[
              {
                image: this.props.data.defineMuralScreenshot.childImageSharp.fluid
              }
            ]}
          />
        </ProjectSection>
        <ProjectSection name={'define-section'}>
          <MainSectionTitle
            title={`Define`}
            description={<p>After synthesizing our initial findings, we utilized a Mural to figure out what features specifically would be most important to our users. After this check-in, we started translating our research into user personas and user journey maps to help contextualize our end user and their context.</p>}
          />
          <Container>
            <ImageWithSubsectionTitle
              image={this.props.data.personasMural.childImageSharp.fluid}
              title={'User Personas'}
              description={<p>We took our research and created 3 personas: Nulugan, Seasoned Dev, and Seasoned Manager. These personas represented the interviewees and the demographic of the engineering teams. For each persona we focused on defining their tenure, team, goals, personality, needs, pain points, and tools. The goal of these personas was to help create an image of our end user and to help us further empathize with them.</p>}
              css={`
                max-width: 1440px;
              `}
            />
          </Container>
          <ImageSlider
            slides={[
              {
                image: this.props.data.personaSeasonedManager.childImageSharp.fluid,
                caption: 'The senior manager values strong documentation and resources as they seeks to stay up-to-date and support his team.'
              },
              {
                image: this.props.data.personaSeasonedDev.childImageSharp.fluid,
                caption: 'The mid-senior level developer supports other Hulu developers and switches between many tools; they often seek more efficiency.'
              },
              {
                image: this.props.data.personaNulugan.childImageSharp.fluid,
                caption: 'The Nulugan - a software developer who has just joined Hulu - is highly motivated but overwhelmed by the number of internal tools that they have never previously heard of.'
              },
            ]}
          />
          <VizSensor>
            <Container>
              <SubSectionTitle
                description={<p>With these three personas in mind, we developed tool insights, ideal features list, impact/effort matrix, user journey maps, userflows, sitemaps, and "How Might We" questions. We paid special attention to our user flows and leveraged feedback from our partner that we should utilize user flows to ensure there aren’t any dead ends in our product.</p>}
              />
            </Container>
          </VizSensor>
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.toolInsights1.childImageSharp.fluid,
                },
                {
                  image: this.props.data.toolInsights2.childImageSharp.fluid,
                },
              ]}
            />
          </Container>
          <ImageSlider
            slides={[
              {
                image: this.props.data.userFlow1.childImageSharp.fluid,
              },
              {
                image: this.props.data.userFlow2.childImageSharp.fluid,
              },
              {
                image: this.props.data.userFlow3.childImageSharp.fluid,
              },
              {
                image: this.props.data.toolInsights3.childImageSharp.fluid,
              },
              {
                image: this.props.data.toolInsights4.childImageSharp.fluid,
              },
              {
                image: this.props.data.toolInsights5.childImageSharp.fluid,
              },
              {
                image: this.props.data.toolInsights6.childImageSharp.fluid,
              },
            ]}
          />
          <VizSensor>
            <Container>
              <SubSectionTitle
                description={<p>We created user journey maps to visualize each persona's userflow through a specific task. This helped us better understand what their expectations, actions, emotions, and opportunities for improvement.</p>}
              />
            </Container>
          </VizSensor>
          <ImageSlider
            slides={[
              {
                image: this.props.data.journeyMap1.childImageSharp.fluid,
              },
              {
                image: this.props.data.journeyMap2.childImageSharp.fluid,
              },
              {
                image: this.props.data.journeyMap3.childImageSharp.fluid,
              },
            ]}
          />
          <ImageGrid
            images={[
              {
                image: this.props.data.developOverview.childImageSharp.fluid
              }
            ]}
          />
        </ProjectSection>
        <ProjectSection name={'develop-section'}>
          <MainSectionTitle
            title={`Develop`}
            description={<p>After we defined our user personas, journey maps, and "How Might We" questions, we took our findings to create wireframes, hi-fi mockups, and prototypes. We took an iterative approach by running multiple usability tests before developing final designs.</p>}
          />
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.onboardingOverviewWireframe.childImageSharp.fluid,
                  caption: 'Wireframes for onboarding screens'
                },
                {
                  image: this.props.data.homeOverviewWireframe.childImageSharp.fluid,
                  caption: 'Wireframes for home and documentation pages'
                },
                {
                  image: this.props.data.menuOverviewWireframe.childImageSharp.fluid,
                  caption: 'Wireframes for the service dropdown menu'
                },
              ]}
            />
          </Container>
          <VizSensor>
            <Container>
              <SubSectionTitle
                title={`Usability Testing: Round 1`}
                description={<p>We initially focused on 5 key features: onboarding, the homepage, documentation, the navigational dropdown, and tool shortcuts. For this first round, we were able to find 9 participants from Hulu's engineer teams.</p>}
              />
            </Container>
          </VizSensor>
          <ImageSlider
            slides={[
              {
                image: this.props.data.usabilityTest1KeyInsights.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest1Quotes.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest1OnboardingFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest1HomePageFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest1ServiceDropdownFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest1DocumentationFeedback.childImageSharp.fluid,
              },
            ]}
          />
          <VizSensor>
            <Container>
              <SubSectionTitle
                title={`Usability Testing: Round 2`}
                description={<p>In addition to the first usability testing, we asked our stakeholders for feedback as well. We incorporated all the feedback, iterated on our prototype, and ran a second usability test.</p>}
              />
            </Container>
          </VizSensor>
          <ImageSlider
            slides={[
              {
                image: this.props.data.usabilityTest2KeyInsights.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest2Quotes.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest2OnboardingFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest2HomePageFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest2ServiceDropdownFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest2ToolShortcutsFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest2DocumentationFeedback.childImageSharp.fluid,
              },
            ]}
          />
          <VizSensor>
            <Container>
              <SubSectionTitle
                title={`Usability Testing: Round 3`}
                description={<p>Next, we moved towards a hi-fidelity mockup by using their design system as a starting point. This round we tested all the key features and user flows of DevX. We ran our third and final round of usability testing with five Hulu DevX developers.</p>}
              />
            </Container>
          </VizSensor>
          <ImageSlider
            slides={[
              {
                image: this.props.data.usabilityTest3KeyInsights.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest3Quotes.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest3OnboardingFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest3HomePageFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest3ServiceDropdownFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest3ToolShortcutsFeedback.childImageSharp.fluid,
              },
              {
                image: this.props.data.usabilityTest3SearchFeedback.childImageSharp.fluid,
              },
            ]}
          />
        </ProjectSection>
        <ProjectSection name={'deliver-section'}>
          <MainSectionTitle
            title={`Deliver`}
            description={<p>After gathering insights from our usability tests and stakeolder feedback, we iterated on hi-fi mockups and prototypes to flush out the user experience throughout the entire DevX Console. We segmented our final mockups into 4 main user flows: onboarding for new users, searching for specific key terms, finding documentation & guides from the service dropdown, and accessing pinned tools from the navbar.</p>}
          />
          <ImageWithSubsectionTitle
            longImage
            image={this.props.data.onboardingScreens.childImageSharp.fluid}
            title={`Onboarding Nulugans`}
            description={<div><p>The onboarding screens focused on welcoming Nulugans and informing them about the different tools within their team. This includes an introduction to the DevX console, asking them about their specialties, and showcasing the “Pinned Tools” feature for efficient tool switching.</p><p>Stakeholders loved the idea of tags and how Hulugans can share what skills and areas they're confident in. We also inclued a Tool Mapping screen to show the relationship of their team's to help ease them into their teams.</p></div>}
          />
          <ImageWithSubsectionTitle
            longImage
            imageRight
            image={this.props.data.homeScreen.childImageSharp.fluid}
            title={`A Central Hub`}
            description={<div><p>The homepage is structured with the intent of allowing users to discover content while giving them direct access to search, tool switching, and their bookmarks. Participants loved the sleek, minimalist design along with the ability to customize the content on this page.</p><p>Quick links allowed Nulugans to get started, Hulugans to find the right documentation, and others to find the right engineer to contact. The customizable Tools Bar provides a shortcut to their frequently used tools.</p></div>}
          />
          <ImageWithSubsectionTitle
            longImage
            image={this.props.data.searchScreen.childImageSharp.fluid}
            title={`Customized Search`}
            description={<p>We streamlined the search experience so that it’s accessible on every screen. Search autocomplete is categorized by your tools, suggestions related to your tools, by documentation, and by guides. On the search results page, users can filter by tags to narrow down their search results. In addition to documentation and guides, team members with relevant specialties are also shown. Many participants found this feature helpful because they can reach out to team members with an expertise in that related tag or search.</p>}
          />
          <ImageWithSubsectionTitle
            longImage
            imageRight
            image={this.props.data.navigationScreen.childImageSharp.fluid}
            title={`Intuitive Navigation`}
            description={<div><p>The service dropdown was the next most important feature in this console. Almost all participants in our surveys, interviews, and user testing rounds stated that they expect to see some form of menu that lists all the tools. The service dropdown is our proposed solution.</p><p>Users can open the service dropdown from every page. Once they open the service dropdown, they can quickly navigate to guides, documentation, org chart, tool mapping, and developer environments. For documentation, users can browse by tool, by team, or browse specific dev frameworks that are frequently used. Users also mentioned that they liked how this is similar to the menu on AWS, it was new but familiar.</p></div>}
          />
          <ImageWithSubsectionTitle
            longImage
            image={this.props.data.docsGuidesScreen.childImageSharp.fluid}
            title={`Relevant Documentation & Guides`}
            description={<div><p>Currently, developers have to sift through thousands of documentation in Hulu Wiki. Developers have a hard time finding relevant and updated content.</p><p>With that feedback in mind, we designed these pages to include the date when the documentation or guide was last updated and the author who created the documentation or guide. Users found this detail extremely helpful. In addition to authors and last updated dates, we included the feature to provide inline comments and overall feedback ratings for documentation and guides. Users love this option and think this will help keep content relevant and up to date.</p></div>}
          />
          <ImageWithSubsectionTitle
            longImage
            imageRight
            image={this.props.data.orgChartScreen.childImageSharp.fluid}
            title={`Find the Right Person`}
            description={<p>Other requirements from this project included an organization chart and tool mapping. The org chart lists all the team members for each team along with their tags, email, and link to message them on Slack. This allows developers to quickly find specific team members by narrowing down through teams and tags.There was also a need for a clear relationship between tools. The tool mapping shows how tools interact with each other for a specific flow. Users felt that this will be super helpful especially when debugging and error.</p>}
          />
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.moreRecommendations.childImageSharp.fluid
                }
              ]}
            />
          </Container>
        </ProjectSection>
        <ProjectSection name={'results-section'}>
          <MainSectionTitle
            title={`Results`}
            description={<p>Capping off our last design sprint, we presented our final prototypes to our stakeholders at Hulu during our last week on the project. We handed off mockups, descriptions, and prototypes for onboarding, home page, search flow, documentation and guides, service dropdown, bookmark flow, org chart, and tool mapping. Each flow accommodates research and data explaining every decision we made.</p>}
          />
          <Container>
            <ImageGrid
              images={[
                {
                  image: this.props.data.userQuotes.childImageSharp.fluid
                }
              ]}
            />
          </Container>
          <MainSectionTitle
            title={`Reflection`}
            description={<div><p>I was lucky enough to have an amazing team to work with along with great partners from Hulu. Having a dedicated product manager, researcher, and multiple designers on one project allowed us to really get to know the problem and our stakeholders.</p><p>Frequent and open communication, in-depth user research, extensive usability testing, and user-centered design were some of the key factors that allowed us to create a user-centered solution.</p></div>}
          />
        </ProjectSection>
      </ProjectWrapper>
    )
  }
}

const ProjectPage = () => {
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
      defineMuralScreenshot: file(relativePath: { eq: "images/projects/hulu/define-mural-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 2880, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      personasMural: file(relativePath: { eq: "images/projects/hulu/personas-mural.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      personaSeasonedManager: file(relativePath: { eq: "images/projects/hulu/persona-seasoned-manager.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      personaNulugan: file(relativePath: { eq: "images/projects/hulu/persona-nulugan.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      personaSeasonedDev: file(relativePath: { eq: "images/projects/hulu/persona-seasoned-dev.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      toolInsights1: file(relativePath: { eq: "images/projects/hulu/tool-insights-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      toolInsights2: file(relativePath: { eq: "images/projects/hulu/tool-insights-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      toolInsights3: file(relativePath: { eq: "images/projects/hulu/tool-insights-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      toolInsights4: file(relativePath: { eq: "images/projects/hulu/tool-insights-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      toolInsights5: file(relativePath: { eq: "images/projects/hulu/tool-insights-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      toolInsights6: file(relativePath: { eq: "images/projects/hulu/tool-insights-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      journeyMap1: file(relativePath: { eq: "images/projects/hulu/journey-map-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      journeyMap2: file(relativePath: { eq: "images/projects/hulu/journey-map-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      journeyMap3: file(relativePath: { eq: "images/projects/hulu/journey-map-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      developOverview: file(relativePath: { eq: "images/projects/hulu/develop-overview.png" }) {
        childImageSharp {
          fluid(maxWidth: 2880, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      userFlow1: file(relativePath: { eq: "images/projects/hulu/user-flow-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      userFlow2: file(relativePath: { eq: "images/projects/hulu/user-flow-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      userFlow3: file(relativePath: { eq: "images/projects/hulu/user-flow-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      onboardingOverviewWireframe: file(relativePath: { eq: "images/projects/hulu/onboarding-overview-wireframe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      homeOverviewWireframe: file(relativePath: { eq: "images/projects/hulu/home-overview-wireframe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1240, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      menuOverviewWireframe: file(relativePath: { eq: "images/projects/hulu/menu-overview-wireframe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1240, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest1KeyInsights: file(relativePath: { eq: "images/projects/hulu/usability-test-1-key-insights.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest1Quotes: file(relativePath: { eq: "images/projects/hulu/usability-test-1-quotes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest1OnboardingFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-1-onboarding-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest1HomePageFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-1-homepage-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest1ServiceDropdownFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-1-service-dropdown-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest1DocumentationFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-1-documentation-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest2KeyInsights: file(relativePath: { eq: "images/projects/hulu/usability-test-2-key-insights.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest2Quotes: file(relativePath: { eq: "images/projects/hulu/usability-test-2-quotes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest2OnboardingFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-2-onboarding-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest2HomePageFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-2-homepage-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest2ServiceDropdownFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-2-service-dropdown-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest2DocumentationFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-2-documentation-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest2ToolShortcutsFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-2-tool-shortcuts-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest3KeyInsights: file(relativePath: { eq: "images/projects/hulu/usability-test-3-key-insights.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest3Quotes: file(relativePath: { eq: "images/projects/hulu/usability-test-3-quotes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest3OnboardingFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-3-onboarding-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest3HomePageFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-3-homepage-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest3ServiceDropdownFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-3-service-dropdown-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest3SearchFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-3-search-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      usabilityTest3ToolShortcutsFeedback: file(relativePath: { eq: "images/projects/hulu/usability-test-3-tool-shortcuts-feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      onboardingFlow: file(relativePath: { eq: "images/projects/hulu/onboarding-flow.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      onboardingScreens: file(relativePath: { eq: "images/projects/hulu/onboarding-screens.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      homeScreen: file(relativePath: { eq: "images/projects/hulu/home-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      searchScreen: file(relativePath: { eq: "images/projects/hulu/search-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      navigationScreen: file(relativePath: { eq: "images/projects/hulu/navigation-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      docsGuidesScreen: file(relativePath: { eq: "images/projects/hulu/docs-guides-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      orgChartScreen: file(relativePath: { eq: "images/projects/hulu/org-chart-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      moreRecommendations: file(relativePath: { eq: "images/projects/hulu/more-recommendations.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      userQuotes: file(relativePath: { eq: "images/projects/hulu/user-quotes.png" }) {
        childImageSharp {
          fluid(maxWidth: 1680, quality: 100) {
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
