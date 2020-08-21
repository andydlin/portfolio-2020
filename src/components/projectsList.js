import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link";
import styled from 'styled-components'

import { Container } from '../styles/global'
import { layout } from '../styles/spacing'
import { colors } from '../styles/colors'
import ProjectThumbnail from './projectThumbnail'

const ThumbnailWrapper = styled.div`
  margin-bottom: ${layout.l600};
`

const CustomLink = styled(Link)`
  
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
        }
      }
    }
  `);

  return (
    <Container>
      {data.allPortfolioCard.nodes.map((card, index, arr) => {
        return (
          <ThumbnailWrapper key={card.title}>
            <CustomLink
              to={card.link}
              exit={{
                length: 1.65,
              }}
              entry={{
                delay: 1.65,
              }}
              css={`
                text-decoration: none;
              `}
            >
              <ProjectThumbnail card={card} />
            </CustomLink>
          </ThumbnailWrapper>
        )
      })}
    </Container>
  )
}

export default ProjectsList
