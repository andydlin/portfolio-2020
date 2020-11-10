import styled from 'styled-components'
import { colors } from './colors'
import { spacing, layout } from './spacing'

export const Box = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  > * {
    flex-grow: 1;
  }
`

export const Grid = styled.div`
  display: grid;
  width: 100%;
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${spacing.s300};

  @media (min-width: 768px) {
    padding: 0 ${spacing.s500};
  }

  @media (min-width: 1024px) {
    padding: 0 ${spacing.s800};
  }

  @media (min-width: 1200px) {
    padding: 0 ${layout.l500};
  }

  @media (min-width: 1440px) {
    padding: 0 ${layout.l600};
  }

  @media (min-width: 1680px) {
    max-width: 90vw;
  }
`

export const ProjectSection = styled.div`
  > * {
    margin-bottom: ${layout.l300};

    @media (min-width: 768px) {
      margin-bottom: ${layout.l600};
    }
  }

  p {
    margin-bottom: ${spacing.s300};

    @media (min-width: 768px) {
      margin-bottom: ${spacing.s500};
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
export const SectionWithBgColor = styled.div`
  background: ${colors.bgBlue};
  padding: ${layout.l300} 0;

  @media (min-width: 768px) {
    padding: ${layout.l600} 0;
  }

  > * {
    margin-bottom: ${layout.l300};

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      margin-bottom: ${layout.l600};
    }
  }
`