import React from "react"
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor';

const VizContainer = styled.div`
  opacity: ${props => props.isViz ? '1' : '0'};
  transform: ${props => props.isViz ? 'scale(1)' : 'scale(0.95)'};
  transition: opacity 1s, transform 1s;
`

class VizSensor extends React.Component {
  state = {
    elemViz: false,
  }

  render() {
    const { children } = this.props;

    return (
      <VisibilitySensor
        onChange = {
          (isVisible) => {
            console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        
            this.setState({
              elemViz: isVisible,
            });
          } 
        }
        partialVisibility = {true}
        offset = {{
          bottom: 100,
          top: 100
        }}
      >
        <VizContainer
          isViz = {this.state.elemViz}
        >
          {children}
        </VizContainer>
      </VisibilitySensor>
    )
  }
}

export default VizSensor
