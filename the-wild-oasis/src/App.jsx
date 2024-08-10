import styled from 'styled-components'
import GlboalStyles from './styles/GlobalStyles'
import BUTTON from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'






const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`
function App() {
  return (
    <>
      <GlboalStyles />
      <StyledApp>
        <Heading>The Wild Oasis</Heading>
        <BUTTON onClick={() => alert('click in')}>Check in</BUTTON>
        <BUTTON onClick={() => alert('check out')}>Check Out</BUTTON>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  )
}

export default App
