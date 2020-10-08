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
    color: ${colors.blue};
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
        <p>Made with lots of sweat and tears in Castro Valley, CA.</p>
        <p>Designed with <a href="https://www.figma.com/" target="_blank">Figma</a>. Developed with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>.</p>
      </CustomFooter>
    )
  }
}

export default Footer
