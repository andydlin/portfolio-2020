import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link";
import styled from 'styled-components'

import { Container } from '../styles/global'
import { layout } from '../styles/spacing'
import ProjectThumbnail from './projectThumbnail'
import VizSensor from "./visibilitySensor"

const ThumbnailWrapper = styled.div`
  margin-bottom: ${layout.l400};

  @media (min-width: 1024px) {
    margin-bottom: ${layout.l600};
  }
`

const ProjectsList = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioCard {
        nodes {
          image {
            childImageSharp {
              fluid(maxWidth: 2880, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          client
          link
          description
          title
          hex
        }
      }
    }
  `);

  return (
    <Container
      css={`
        max-width: 2000px;
      `}
    >
      {data.allPortfolioCard.nodes.map((card, index, arr) => {
        return (
          <ThumbnailWrapper key={card.title}>
            <VizSensor>
              <Link
                to={card.link}
                exit={{
                  length: 1.9,
                }}
                entry={{
                  delay: 1.9,
                }}
                css={`
                  text-decoration: none;
                `}
              >
                <ProjectThumbnail card={card} />
              </Link>
            </VizSensor>
          </ThumbnailWrapper>
        )
      })}
    </Container>
  )
}

export default ProjectsList
