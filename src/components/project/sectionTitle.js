import React from "react"
import styled from 'styled-components'
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion"

import { colors } from '../../styles/colors'
import { spacing, layout } from '../../styles/spacing'
import { Container, Box } from "../../styles/global"
import { Giant, Schmedium } from "../../styles/typography"


const SectionTitle = (props) => {

  return (
    <Container>
      <h1>Section title</h1>
    </Container>
  )
}

export default SectionTitle
