import React from "react"
import styled from 'styled-components'
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion"

import { colors } from '../../styles/colors'
import { spacing, layout } from '../../styles/spacing'
import { Container, Box } from "../../styles/global"
import { Giant, Large, Schmedium, Regular, Small } from "../../styles/typography"

const Label = styled.div`
  color: ${colors.gray200};
  ${Small}

  @media (min-width: 768px) {
    ${Regular}
  }
`

const Detail = styled.div`
  color: ${colors.gray400};

  @media (min-width: 768px) {
    ${Schmedium}
  }
`

const SummaryDetail = styled.div`
  margin-bottom: ${spacing.s500};
  width: calc(50% - 16px);

  &:nth-of-type(1),
  &:nth-of-type(3) {
    margin-right: ${spacing.s300};
  }

  @media (min-width: 768px) {
    width: calc(25% - 16px);
  }

  @media (min-width: 1024px) {
    margin-right: 0;
    width: 100%;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const SummaryText = styled.div`
  color: ${colors.gray300};

  p {
    margin-bottom: ${spacing.s300};

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    ${Schmedium}

    p {
      margin-bottom: ${spacing.s500};
    }
  }
`

const Card = styled(motion.div)`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 64px rgba(0, 0, 0, 0.1);
  padding: ${layout.l300} ${layout.l200};
  position: relative;

  &:after {
    bottom: 0;
    box-shadow: 0px 4px 200px rgba(0, 0, 0, 0.2);
    content: '';
    height: 50px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: calc(100% - 400px);
    z-index: -1;
  }

  @media (min-width: 480px) {
    padding: ${layout.l300};
  }

  @media (min-width: 1024px) {
    padding: ${layout.l500};
  }
`

const Title = styled.h1`
  color: ${colors.gray400};
  ${Large}

  @media (min-width: 768px) {
    ${Giant}
  }
`

const Subtitle = styled.div`
  color: ${colors.gray200};

  @media (min-width: 768px) {
    ${Schmedium}
  }
`

const variants = {
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
      delay: 0.5,
      duration: 0.5,
      ease: [0.1, 0.75, 0.5, 1]
    }
  }
}

const Summary = (props) => {

  return (
    <TransitionState>
      {({mount}) => {
        return (
          <Container
            css={`
              margin-bottom: ${layout.l200};
              position: relative;
              top: -${layout.l500};

              @media (min-width: 768px) {
                margin-bottom: ${layout.l500};
              }
            `}  
          >
            <Card
              initial='hidden'
              variants={variants}
              animate={mount ? 'visible' : 'hidden'}
            >
              <div
                css={`
                  margin-bottom: ${spacing.s600};

                  @media (min-width: 1024px) {
                    margin-bottom: ${spacing.s800};
                  }
                `}
              >
                <Subtitle>Dictionary.com</Subtitle>
                <Title>Mobile App Redesign</Title>
              </div>
              <Box
                css={`
                  align-items: flex-start;
                  flex-direction: column;

                  @media (min-width: 1024px) {
                    flex-direction: row;
                  }
                `}
              >
                <Box
                  css={`
                    align-items: flex-start;
                    flex-direction: row;
                    flex-wrap: wrap;

                    @media (min-width: 1024px) {
                      flex-direction: column;
                      margin-right: ${layout.l400};
                      max-width: 200px;
                    }
                  `}
                >
                  <SummaryDetail>
                    <Label>Role</Label>
                    <Detail>{props.role}</Detail>
                  </SummaryDetail>
                  <SummaryDetail>
                    <Label>Category</Label>
                    <Detail>{props.category}</Detail>
                  </SummaryDetail>
                  <SummaryDetail>
                    <Label>Platforms</Label>
                    <Detail>{props.platforms}</Detail>
                  </SummaryDetail>
                  <SummaryDetail>
                    <Label>Timeframe</Label>
                    <Detail>{props.timeframe}</Detail>
                  </SummaryDetail>
                </Box>
                <SummaryText>
                  {props.summary}
                </SummaryText>
              </Box>
            </Card>
          </Container>
        )
      }}
    </TransitionState>
  )
}

export default Summary
