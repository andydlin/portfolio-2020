import React from "react"
import { motion } from "framer-motion"

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

  return (
    <motion.div
      initial='hidden'
      variants={pageVariants}
      animate={mount ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export default ProjectWrapper
