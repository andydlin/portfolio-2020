import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import { colors } from '../styles/colors'
import { spacing, layout } from '../styles/spacing'

const CustomFooter = styled.footer`
  color: ${colors.gray200};
  font-size: 1rem;
  line-height: 1.5;
  padding: ${spacing.s800} ${layout.l500};
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
        <p>Designed with <a href="https://www.figma.com/" target="_blank">Figma</a>. Built with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>.</p>
        <p>Copyright &copy; {new Date().getFullYear()} Andy Lin</p>
      </CustomFooter>
    )
  }
}

export default Footer
