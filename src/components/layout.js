import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./Header"
import "../css/base.scss"

class Layout extends React.Component {

  render() {
    const { children, path, mount, transitionStatus } = this.props;

    return(
      <StaticQuery
        query={
          graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `
        }
        render={data => (
          <div>
            <Header siteTitle={data.site.siteMetadata.title} path={path} mount={mount} transitionStatus={transitionStatus}/>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
            <Helmet>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&amp;display=swap" rel="stylesheet"/>
              <link rel="stylesheet" href="https://use.typekit.net/nsk0omo.css"/>
            </Helmet>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
