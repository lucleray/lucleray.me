import styled from 'styled-components/macro'
import { theme } from './theme'

const H1 = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: ${theme.light.blue};
  margin-bottom: 0.7em;

  body.dark & {
    color: ${theme.dark.blue};
  }
`

const H2 = styled.h2`
  margin-top: 6em;
  font-size: 1.8em;
  text-align: center;
  color: ${theme.light.blue};
  margin-bottom: 0.7em;

  body.dark & {
    color: ${theme.dark.blue};
  }
`

const H3 = styled.h3`
  text-align: center;
  color: ${theme.light.blue};
  opacity: 0.4;
  margin-top: 0.7em;
  margin-bottom: 4em;

  body.dark & {
    color: ${theme.dark.blue};
  }
`

const Card = styled.div`
  margin: 0 0 0.4em 0;
  background: ${p => (p.highlight ? theme.light.blue : theme.light.bg)};
  border-radius: 10px;
  padding: 0.4em 2em;
  color: ${p => (p.highlight ? theme.light.bg : theme.light.fg)};
  transform: rotate(${p => Math.floor(Math.random() * 6 - 3) + 'deg'});
  border: ${p => (p.highlight ? '0px' : '1px')} solid ${theme.light.border};
  transition: transform 0.2s ease 0.1s;

  body.dark & {
    background: ${p => (p.highlight ? theme.dark.blue : theme.dark.bg)};
    color: ${p => (p.highlight ? theme.dark.bg : theme.dark.fg)};
    border: ${p => (p.highlight ? '0px' : '1px')} solid ${theme.dark.border};
  }

  &:hover {
    transform: translateX(20px)
      rotate(${p => Math.floor(Math.random() * 6 - 3) + 'deg'});
  }
`

export { H1, H2, H3, Card }
