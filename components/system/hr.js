import styled from 'styled-components/macro'
import { theme } from './theme'

const HR = styled.hr`
  height: 1px;
  background: ${theme.light.lightBlue2};
  border: 0;
  margin: 2em 0;
`

export { HR }