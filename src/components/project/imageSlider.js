import React from "react"
import Img from "gatsby-image"
import { motion } from "framer-motion";
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
      padding: 0,
      dragStatus: false
    }
    this.containerRef = React.createRef();
  }

  handleSliderPosition = (newIndex = this.state.slideIndex) => {
    if(window.innerWidth > 768) {
      var indexDiff = Math.abs(newIndex - this.state.slideIndex);

      // check to see if there's any slides before or after and is new slide
      if(this.state.slideIndex !== newIndex && newIndex > -1 && newIndex < this.slidesLength) {
        var position = 0;
        if(newIndex > this.state.slideIndex) {
          position = this.state.xPos - (indexDiff * this.slidesReferences[this.state.slideIndex].offsetWidth) - 40;
        } else if(newIndex < this.state.slideIndex) {
          position = this.state.xPos + (indexDiff * this.slidesReferences[this.state.slideIndex].offsetWidth) + 40;
        }

        this.setState({
          xPos: position,
          slideIndex: newIndex
        });
      }
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
    this.setState({
      dragStatus: window.innerWidth > 768 ? 'x' : false
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleSliderPosition);
    window.removeEventListener('resize', this.setPadding);
  }

  render() {

    return (
      <VizSensor
        css={`
          overflow-x: hidden;
        `}
      >
        <div
          ref={this.containerRef}
          css={`
            @media (max-width:768px) {
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
            }
          `}
        >
          <motion.div
            animate={{ x: this.state.xPos}}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 }
            }}
            drag={this.state.dragStatus}
            dragConstraints={this.containerRef}
            dragElastic={1}
            onDragStart={() => { 
              this.setState({
                isDragging: true
              });
            }}
            onDragEnd={(e, {offset, velocity}) => {
              const swipe = swipePower(offset.x, velocity.x);

              if(swipe < -swipeConfidenceThreshold) {
                this.handleSliderPosition(this.state.slideIndex + 1);
              } else if(swipe > swipeConfidenceThreshold) {
                this.handleSliderPosition(this.state.slideIndex - 1);
              } else {
                if(Math.abs(offset.x) > 50) {
                  if(offset.x < 0) {
                    this.handleSliderPosition(this.state.slideIndex + 1);
                  } else if(offset.x > 0) {
                    this.handleSliderPosition(this.state.slideIndex - 1);
                  }
                }
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

const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};


export default ImageSlider