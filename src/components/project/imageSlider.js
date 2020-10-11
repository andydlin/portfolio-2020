import React from "react"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import styled from 'styled-components'
import VizSensor from "../visibilitySensor"

import { Container } from "../../styles/global"
import { spacing } from '../../styles/spacing'
import { Grid } from "../../styles/global"
import { Regular, Small } from "../../styles/typography"
import { colors } from "../../styles/colors"

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    };
  }
};

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = {
      xPos: 0
    }
  }

  componentDidMount() {
    console.log(this.imageRef.current.offsetWidth);
    console.log(window.innerWidth);
    console.log((window.innerWidth/2) - (this.imageRef.current.offsetWidth/2));
    this.setState({
      xPos: (window.innerWidth/2) - (this.imageRef.current.offsetWidth/2)
    });
  }

  render() {

    return (
      <VizSensor>
        <div>
          <motion.div
            animate={{ x: this.state.xPos}}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, {offset, velocity}) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                this.setState({
                  xPos: (this.state.xPos - 100)
                });
              } else if (swipe > swipeConfidenceThreshold) {
                this.setState({
                  xPos: (this.state.xPos + 100)
                });
              }
            }}
            css={`
              display: flex;
              flex-direction: row;

              > * {
                flex-grow: 1;
                min-width: 40vw;
              }
            `}
          >
            <motion.div
              ref={this.imageRef}
            >
              <Img
                fluid={this.props.slides[0][0]}
                draggable={false}
              />
            </motion.div>
            <motion.div>
              <Img
                fluid={this.props.slides[1][0]}
                draggable={false}
              />
            </motion.div>
            <motion.div>
              <Img
                fluid={this.props.slides[2][0]}
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </VizSensor>
    )
  }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};


export default ImageSlider