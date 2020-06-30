import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'
import { motion } from "framer-motion"
import Link from "gatsby-plugin-transition-link";

import { Logo } from "./logo"
import { colors } from '../styles/colors'
import { spacing, layout } from '../styles/spacing'

const HeaderNav = styled(motion.header)`
  align-items: center;
  background: rgba(255,255,255,0);
  box-shadow: 0 0 0 rgba(0,0,0,0);
  display: flex;
  left: 0;
  padding: ${spacing.s800} ${layout.l500};
  top: 0;
  transition: box-shadow 0.25s ease-in-out, padding 0.25s ease-in-out, transform 0.5s ease-in-out;
  transform: translateY(0px);
  width: 100%;
  z-index: 10;

  @media (max-width: 1200px) {
    padding: ${spacing.s500};
  }
`

const Nav = styled.div`
  display: grid;
  grid-column-gap: ${spacing.s700};
  grid-template-columns: auto auto auto;
  margin: 0 0 0 auto;
  position: relative;
`

const NavUnderline = styled(motion.div)`
  background: ${colors.blue};
  border-radius: 10px;
  bottom: -4px;
  content: ' ';
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;

  &.work-active {
    width: 37px;
  }

  &.about-active {
    left: 77px;
    width: 43px;
  }
`

const NavLink = styled(Link)`
  color: ${colors.gray200};
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  transition: color 0.25s;

  &.active {
    color: ${colors.gray400};
  }

  &:hover:not(.active) {
    color: ${colors.gray300};
  }
`

const headerVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: [0.09, 0.71, 0.73, 1]
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.09, 0.71, 0.73, 1]
    }
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  render() {
    // old, this is to animate navbar underline
    /*const NavUnderlineVariants = {
      start: {
        left: 0,
        width: 0,
      },
      workentering: {
        left: 0,
        width: 120,
      },
      workentered: {
        left: 0,
        width: 37,
      },
      aboutentering: {
        left: 0,
        width: 120,
      },
      aboutentered: {
        left: 77,
        width: 43,
      }
    }*/

    return (
      <HeaderNav
        ref={this.myRef}
        variants={headerVariants}
        initial={'hidden'}
        animate={this.props.mount ? 'visible' : 'hidden'}
      >
        <NavLink
          to='/'
          entry={{
            delay: 0.15,
            length: 0.25
          }}
          exit={{
            length: 0.5
          }}
        >
          <Logo />
        </NavLink>
        <Nav className={`${this.props.path}`}>
          <NavLink
            to='/'
            className={'link-home' + `${this.props.path === 'work' ? ' active' : ''}`}
            entry={{
              delay: 0.5,
              length: 0.35
            }}
            exit={{
              length: 0.5
            }}
          >
            Work
          </NavLink>
          <NavLink
            to='/about'
            className={'link-about' + `${this.props.path === 'about' ? ' active' : ''}`}
            entry={{
              delay: 0.5,
              length: 0.35
            }}
            exit={{
              length: 0.5,
              state: {
                nextPath: 'about'
              }
            }}
          >
            About
          </NavLink>
          <NavLink to='/'>Contact</NavLink>
          <NavUnderline
            className={`${this.props.path}` + '-active'}
          />
        </Nav>
      </HeaderNav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
