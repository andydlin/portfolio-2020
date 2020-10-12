import React from "react"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components'
import VizSensor from "../visibilitySensor"

import { spacing } from '../../styles/spacing'
import { Regular, Small } from "../../styles/typography"
import { colors } from "../../styles/colors"

const Slide = styled(motion.div)`
  flex-grow: 1;
  margin-right: ${spacing.s700};
  min-width: 300px;

  @media (min-width: 480px) {
    min-width: 60vw;
  }

  @media (min-width: 900px) {
    min-width: 800px;
  }

  @media (hover: hover) {
    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }
  }
`

const ImgCaption = styled.div`
  color: ${colors.gray200};
  ${Small}
  font-style: italic;
  margin-top: ${spacing.s100};

  @media (min-width: 768px) {
    ${Regular}
  }
`

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.slidesReferences = [];
    this.slidesLength = props.slides.length;
    this.state = {
      xPos: 0,
      slideIndex: 0,
      isDraggin: false,
      padding: 0
    }
    this.containerRef = React.createRef();
  }

  handleSliderPosition = (newIndex = this.state.slideIndex) => {
    var indexDiff = Math.abs(newIndex - this.state.slideIndex);

    // check to see if there's any slides before or after and is new slide
    if(this.state.slideIndex !== newIndex && newIndex > -1 && newIndex < this.slidesLength) {
      console.log('new slide & not first nor last slide');  
      var position = 0;
      if(newIndex > this.state.slideIndex) {
        position = this.state.xPos - (indexDiff * this.slidesReferences[this.state.slideIndex].offsetWidth) - 20;
      } else if(newIndex < this.state.slideIndex) {
        position = this.state.xPos + (indexDiff * this.slidesReferences[this.state.slideIndex].offsetWidth) + 20;
      }

      this.setState({
        xPos: position,
        slideIndex: newIndex
      });
    }

    return;
  }

  setPadding = () => {
    this.setState({
      padding: (window.innerWidth/2) - (this.slidesReferences[this.state.slideIndex].offsetWidth/2) - 20
    });
  }

  componentDidMount() {
    this.setPadding();
    window.addEventListener('resize', this.handleSliderPosition);
    window.addEventListener('resize', this.setPadding);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleSliderPosition);
    window.removeEventListener('resize', this.setPadding);
  }

  render() {

    return (
      <VizSensor>
        <div ref={this.containerRef}>
          <motion.div
            animate={{ x: this.state.xPos}}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={this.containerRef}
            dragElastic={1}
            onDragEnd={(e, {offset, velocity}) => {
              console.log('dragEnd');
              const swipe = swipePower(offset.x, velocity.x);
              this.setState({
                isDragging: true
              });

              if(swipe < -swipeConfidenceThreshold) {
                console.log('hello prev');
                this.handleSliderPosition(this.state.slideIndex + 1);
              } else if(swipe > swipeConfidenceThreshold) {
                console.log('hello next');
                this.handleSliderPosition(this.state.slideIndex - 1);
              }
            }}
            css={`
              display: inline-flex;
              flex-direction: row;
              padding: 0 ${this.state.padding}px;
            `}
          >
            {this.props.slides.map((slide, index) => {
              return (
                <Slide
                  ref={slidesReferences => this.slidesReferences[index] = slidesReferences}
                  key={index}
                  onClick={() => {
                    if(!this.state.isDragging) {
                      this.handleSliderPosition(index);
                    } else {
                      this.setState({
                        isDragging: false
                      });
                    }
                  }}
                >
                  <Img
                    fluid={slide.image}
                    draggable={false}
                  />
                  {slide.caption !== null ? <ImgCaption>{slide.caption}</ImgCaption> : null}
                </Slide>
              )
            })}
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