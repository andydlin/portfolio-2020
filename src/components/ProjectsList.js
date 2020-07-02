import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { motion } from "framer-motion"
import Link from "gatsby-plugin-transition-link";

import { Logo } from "./logo"
import { colors } from '../styles/colors'
import { spacing, layout } from '../styles/spacing'
import { Container } from '../styles/global'

const ProjectsList = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioCard {
        nodes {
          image {
            childImageSharp {
              fluid(maxWidth: 1440) {
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
    <Container
      css={`
        padding: 0 10rem;
      `}
    >
      {data.allPortfolioCard.nodes.map((card, index, arr) => {
        return (
          <div key={card.title}>
            <Link
              to={card.link}
              exit={{
                length: 1.65,
              }}
              entry={{
                delay: 1.65,
              }}
            >
              <Img alt={card.alt} fluid={card.image.childImageSharp.fluid}/>
              <h3>{card.client}</h3>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

export default ProjectsList
