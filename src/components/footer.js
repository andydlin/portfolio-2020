import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'

const CustomFooter = styled.footer`
  color: ${colors.gray200};
  font-size: 1rem;
  line-height: 1.5;
  padding: ${spacing.s800} ${spacing.s500};
  text-align: center;

  a {
    color: ${colors.gray400};
    transition: color 0.25s;

    &:hover {
      color: ${colors.blue};
    }
  }
`

const Footer = () => (
  <CustomFooter>
    <p>Made with lots of sweat and tears in San Francisco, Bay Area.</p>
    <p><a href="https://github.com/andydlin/portfolio-2020" target="_blank" rel="noreferrer">Handcrafted</a> with <a href="https://www.figma.com/" target="_blank" rel="noreferrer">Figma</a>, <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">Gatsby</a>, & <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>.</p>
  </CustomFooter>
)

export default Footer
