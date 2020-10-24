import PropTypes from "prop-types"
import React from "react"
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

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  render() {

    return (
      <CustomFooter>
        <p>Made with lots of sweat and tears San Francisco, Bay Area.</p>
        <p><a href="https://github.com/andydlin/portfolio-2020" target="_blank">Handcrafted</a> with <a href="https://www.figma.com/" target="_blank">Figma</a>, <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>, & <a href="https://www.netlify.com/" target="_blank">Netlify</a>.</p>
      </CustomFooter>
    )
  }
}

export default Footer
