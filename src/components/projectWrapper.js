import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

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

const ProjectWrapper = (props) => {
  const { children, mount } = props;
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.div
      initial='hidden'
      variants={pageVariants}
      animate={mount ? 'visible' : 'hidden'}
    >
      <div className="wrapper">
        <motion.div className="container">
          <motion.div
            className="item"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "0 0"
            }}
          />
        </motion.div>
      </div>
      {children}
    </motion.div>
  )
}

export default ProjectWrapper
