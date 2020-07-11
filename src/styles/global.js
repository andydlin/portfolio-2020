import styled from 'styled-components'
import { spacing, layout } from './spacing'

export const Box = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  > * {
    flex-grow: 1;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${layout.l500};

  @media (max-width: 1200px) {
    padding: 0 ${spacing.s500};
  }
`