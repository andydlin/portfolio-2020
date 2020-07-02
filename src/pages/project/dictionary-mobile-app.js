import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion"

import Layout from "../../components/layout"
import { Container } from "../../styles/global"

const pageVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
      ease: 'easeInOut',
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}

const testVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.1, 0.75, 0.5, 1]
    }
  }
}

const DictionaryProject = (props) => {
  const { mount, transitionStatus } = props;

  return (
    <motion.div
      initial='hidden'
      variants={pageVariants}
      animate={mount ? 'visible' : 'hidden'}
    >
      <div css={`
        background: dodgerBlue;
        height: 648px;
        width: 100%;
      `}>
      </div>
      <Container
        css={`
          max-width: 800px;
          position: relative;
          top: -50px;
        `}  
      >
        <motion.div
          initial='hidden'
          variants={testVariants}
          animate={mount ? 'visible' : 'hidden'}
          css={`
          background: white;
          padding: 48px;
          position: relative;
        `}  
        >
          <h2>hello this is a header</h2>
          <p>Doggo ipsum heckin corgo you are doin me a concern shooberino, stop it fren bork. Borkf pats yapper he made many woofs sub woofer doing me a frighten he made many woofs, smol you are doin me a concern long woofer blep long bois. Tungg extremely cuuuuuute borking doggo doggorino you are doing me the shock long water shoob borking doggo, sub woofer borkf porgo I am bekom fat. Extremely cuuuuuute lotsa pats heck the neighborhood pupper, length boy wow such tempt. Shoober corgo wrinkler tungg smol pupper long doggo doggo, lotsa pats you are doing me a frighten much ruin diet ur givin me a spook I am bekom fat. Blop fluffer woofer long bois doggo, h*ck pupperino. Boof porgo stop it fren very good spot ruff fluffer you are doing me the shock smol borking doggo with a long snoot for pats, very hand that feed shibe maximum borkdrive sub woofer stop it fren blep. Length boy adorable doggo you are doing me the shock clouds heckin good boys such treat, super chub shibe fluffer.

  Super chub borking doggo he made many woofs puggorino noodle horse tungg, clouds floofs borking doggo doge long water shoob, clouds long bois doge vvv. H*ck puggo pupperino long woofer many pats, shibe very hand that feed shibe. Snoot pupperino length boy porgo, ur givin me a spook fluffer. Long doggo doggo corgo wow such tempt woofer doge ur givin me a spook, extremely cuuuuuute ruff noodle horse waggy wags. You are doing me the shock boof very hand that feed shibe most angery pupper I have ever seen he made many woofs much ruin diet very taste wow ruff, shoober borkdrive doing me a frighten woofer pupperino very jealous pupper.

  Dat tungg tho long woofer clouds corgo, boof. Fat boi adorable doggo doge big ol pupper wrinkler, vvv big ol. Heckin angery woofer doing me a frighten doge many pats, he made many woofs mlem puggo, long woofer many pats. H*ck smol borking doggo with a long snoot for pats smol boofers what a nice floof yapper puggo, waggy wags corgo aqua doggo shooberino puggorino. You are doing me the shock maximum borkdrive boofers heckin maximum borkdrive I am bekom fat super chub, shooberino puggo ruff big ol. Puggo noodle horse floofs you are doin me a concern, I am bekom fat borkdrive.  Waggy wags I am bekom fat adorable doggo boof, sub woofer thicc ur givin me a spook, wow such tempt super chub.

  </p>
        </motion.div>
      </Container>
    </motion.div>
  )
}

const ProjectPage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      waveImage: file(relativePath: { eq: "wave.png" }) {
        childImageSharp {
          fluid(maxWidth: 48) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        return (
          <Layout
            path="work"
            mount={mount}
            transitionStatus={transitionStatus}
          >
            <SEO title="Project: Dictionary.com Mobile App" />
            <DictionaryProject mount={mount} transitionStatus={transitionStatus}/>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default ProjectPage
