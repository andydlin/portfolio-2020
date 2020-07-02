import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion"

const pageVariants = {
  entered: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.75,
      duration: 0.5,
      ease: [0.09, 0.8, 0.44, 1],
    }
  },
  exiting: {
    opacity: 0,
    scale: 0.9,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.09, 0.8, 0.44, 1],
    }
  },
  hidden: {
    opacity: 0,
    scale: 1.15,
    y: -50,
    transition: {
      duration: 0.75,
      ease: [0.09, 0.8, 0.44, 1],
    }
  }
}

const AboutPage = (props) => {
  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        return (
          <Layout
            path="about"
            mount={mount}
            transitionStatus={transitionStatus}
          >
            <motion.div
              initial={'hidden'}
              variants={pageVariants}
              animate={transitionStatus}
            >
              <SEO title="Home" />
              <h1>Hi this about me.</h1>
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
              <Link to="/page-2/">Go to page 2</Link> <br />
              <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
              <p>Doggo ipsum snoot maximum borkdrive shooberino fluffer long woofer, super chub heckin good boys. big ol pupper tungg clouds.  Clouds heckin good boys noodle horse super chub long woofer h*ck, shoober pats I am bekom fat long doggo long woofer extremely cuuuuuute, wow such tempt corgo big ol borkdrive. Heckin good boys waggy wags heckin good boys and girls what a nice floof floofs, shoob long doggo shoob. Sub woofer you are doin me a concern blop maximum borkdrive boofers. Wow such tempt such treat extremely cuuuuuute smol very hand that feed shibe, heckin good boys and girls heck. Wow very biscit snoot wow very biscit blop, heckin good boys and girls big ol pupper much ruin diet long bois, length boy pats. What a nice floof vvv I am bekom fat doggo porgo very jealous pupper, pupper blep blop.

                I am bekom fat noodle horse doge you are doin me a concern noodle horse boof, noodle horse very good spot noodle horse. H*ck smol big ol pupper long doggo tungg, puggo fat boi. Big ol pupper fat boi big ol pupper pats, bork. Dat tungg tho doing me a frighten adorable doggo snoot, shoob super chub. You are doing me a frighten floofs extremely cuuuuuute, doggorino.

                Length boy shoob boof big ol doggorino you are doing me the shock, doggorino heckin angery woofer such treat. Boofers boof many pats dat tungg tho, doge bork long woofer, much ruin diet tungg. Wow very biscit sub woofer puggorino borkf, very hand that feed shibe fat boi.  Very hand that feed shibe fat boi big ol pupper boofers stop it fren, he made many woofs puggorino.  puggorino long bois lotsa pats. Heckin good boys and girls borkdrive floofs fat boi borkdrive h*ck long woofer, pupperino you are doing me a frighten woofer borkf snoot, aqua doggo pats clouds borkf waggy wags. Long woofer wow such tempt snoot long bois, wow such tempt you are doing me a frighten you are doing me the shock mlem, doge doing me a frighten. Tungg you are doin me a concern boof he made many woofs smol, shoober most angery pupper I have ever seen. Sub woofer pats pupper snoot fat boi borking doggo I am bekom fat, wrinkler doing me a frighten I am bekom fat the neighborhood pupper he made many woofs.

                Doggo ipsum snoot maximum borkdrive shooberino fluffer long woofer, super chub heckin good boys. big ol pupper tungg clouds.  Clouds heckin good boys noodle horse super chub long woofer h*ck, shoober pats I am bekom fat long doggo long woofer extremely cuuuuuute, wow such tempt corgo big ol borkdrive. Heckin good boys waggy wags heckin good boys and girls what a nice floof floofs, shoob long doggo shoob. Sub woofer you are doin me a concern blop maximum borkdrive boofers. Wow such tempt such treat extremely cuuuuuute smol very hand that feed shibe, heckin good boys and girls heck. Wow very biscit snoot wow very biscit blop, heckin good boys and girls big ol pupper much ruin diet long bois, length boy pats. What a nice floof vvv I am bekom fat doggo porgo very jealous pupper, pupper blep blop.

                I am bekom fat noodle horse doge you are doin me a concern noodle horse boof, noodle horse very good spot noodle horse. H*ck smol big ol pupper long doggo tungg, puggo fat boi. Big ol pupper fat boi big ol pupper pats, bork. Dat tungg tho doing me a frighten adorable doggo snoot, shoob super chub. You are doing me a frighten floofs extremely cuuuuuute, doggorino.

                Length boy shoob boof big ol doggorino you are doing me the shock, doggorino heckin angery woofer such treat. Boofers boof many pats dat tungg tho, doge bork long woofer, much ruin diet tungg. Wow very biscit sub woofer puggorino borkf, very hand that feed shibe fat boi.  Very hand that feed shibe fat boi big ol pupper boofers stop it fren, he made many woofs puggorino.  puggorino long bois lotsa pats. Heckin good boys and girls borkdrive floofs fat boi borkdrive h*ck long woofer, pupperino you are doing me a frighten woofer borkf snoot, aqua doggo pats clouds borkf waggy wags. Long woofer wow such tempt snoot long bois, wow such tempt you are doing me a frighten you are doing me the shock mlem, doge doing me a frighten. Tungg you are doin me a concern boof he made many woofs smol, shoober most angery pupper I have ever seen. Sub woofer pats pupper snoot fat boi borking doggo I am bekom fat, wrinkler doing me a frighten I am bekom fat the neighborhood pupper he made many woofs.
                Doggo ipsum snoot maximum borkdrive shooberino fluffer long woofer, super chub heckin good boys. big ol pupper tungg clouds.  Clouds heckin good boys noodle horse super chub long woofer h*ck, shoober pats I am bekom fat long doggo long woofer extremely cuuuuuute, wow such tempt corgo big ol borkdrive. Heckin good boys waggy wags heckin good boys and girls what a nice floof floofs, shoob long doggo shoob. Sub woofer you are doin me a concern blop maximum borkdrive boofers. Wow such tempt such treat extremely cuuuuuute smol very hand that feed shibe, heckin good boys and girls heck. Wow very biscit snoot wow very biscit blop, heckin good boys and girls big ol pupper much ruin diet long bois, length boy pats. What a nice floof vvv I am bekom fat doggo porgo very jealous pupper, pupper blep blop.

                I am bekom fat noodle horse doge you are doin me a concern noodle horse boof, noodle horse very good spot noodle horse. H*ck smol big ol pupper long doggo tungg, puggo fat boi. Big ol pupper fat boi big ol pupper pats, bork. Dat tungg tho doing me a frighten adorable doggo snoot, shoob super chub. You are doing me a frighten floofs extremely cuuuuuute, doggorino.

                Length boy shoob boof big ol doggorino you are doing me the shock, doggorino heckin angery woofer such treat. Boofers boof many pats dat tungg tho, doge bork long woofer, much ruin diet tungg. Wow very biscit sub woofer puggorino borkf, very hand that feed shibe fat boi.  Very hand that feed shibe fat boi big ol pupper boofers stop it fren, he made many woofs puggorino.  puggorino long bois lotsa pats. Heckin good boys and girls borkdrive floofs fat boi borkdrive h*ck long woofer, pupperino you are doing me a frighten woofer borkf snoot, aqua doggo pats clouds borkf waggy wags. Long woofer wow such tempt snoot long bois, wow such tempt you are doing me a frighten you are doing me the shock mlem, doge doing me a frighten. Tungg you are doin me a concern boof he made many woofs smol, shoober most angery pupper I have ever seen. Sub woofer pats pupper snoot fat boi borking doggo I am bekom fat, wrinkler doing me a frighten I am bekom fat the neighborhood pupper he made many woofs.

                Doggo ipsum snoot maximum borkdrive shooberino fluffer long woofer, super chub heckin good boys. big ol pupper tungg clouds.  Clouds heckin good boys noodle horse super chub long woofer h*ck, shoober pats I am bekom fat long doggo long woofer extremely cuuuuuute, wow such tempt corgo big ol borkdrive. Heckin good boys waggy wags heckin good boys and girls what a nice floof floofs, shoob long doggo shoob. Sub woofer you are doin me a concern blop maximum borkdrive boofers. Wow such tempt such treat extremely cuuuuuute smol very hand that feed shibe, heckin good boys and girls heck. Wow very biscit snoot wow very biscit blop, heckin good boys and girls big ol pupper much ruin diet long bois, length boy pats. What a nice floof vvv I am bekom fat doggo porgo very jealous pupper, pupper blep blop.

                I am bekom fat noodle horse doge you are doin me a concern noodle horse boof, noodle horse very good spot noodle horse. H*ck smol big ol pupper long doggo tungg, puggo fat boi. Big ol pupper fat boi big ol pupper pats, bork. Dat tungg tho doing me a frighten adorable doggo snoot, shoob super chub. You are doing me a frighten floofs extremely cuuuuuute, doggorino.

                Length boy shoob boof big ol doggorino you are doing me the shock, doggorino heckin angery woofer such treat. Boofers boof many pats dat tungg tho, doge bork long woofer, much ruin diet tungg. Wow very biscit sub woofer puggorino borkf, very hand that feed shibe fat boi.  Very hand that feed shibe fat boi big ol pupper boofers stop it fren, he made many woofs puggorino.  puggorino long bois lotsa pats. Heckin good boys and girls borkdrive floofs fat boi borkdrive h*ck long woofer, pupperino you are doing me a frighten woofer borkf snoot, aqua doggo pats clouds borkf waggy wags. Long woofer wow such tempt snoot long bois, wow such tempt you are doing me a frighten you are doing me the shock mlem, doge doing me a frighten. Tungg you are doin me a concern boof he made many woofs smol, shoober most angery pupper I have ever seen. Sub woofer pats pupper snoot fat boi borking doggo I am bekom fat, wrinkler doing me a frighten I am bekom fat the neighborhood pupper he made many woofs.

              </p>
            </motion.div>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default AboutPage
