import React from "react"
import { motion, useMotionValue, useViewportScroll } from "framer-motion"

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

class ProjectWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  trackScrollY = () => {
    const { scrollY } = useViewportScroll();
    console.log(scrollY);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScrollY);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.trackScrollY);
  }

  render() {
    return (
      <motion.div
        initial='hidden'
        variants={pageVariants}
        animate={this.props.mount ? 'visible' : 'hidden'}
      >
        {this.props.children}
        
      </motion.div>
    )
  }
}

export default ProjectWrapper
