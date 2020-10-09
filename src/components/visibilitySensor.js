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
            this.setState({
              elemViz: isVisible,
            });
          } 
        }
        partialVisibility = {true}
        offset = {{
          bottom: '50',
          top: '50'
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
