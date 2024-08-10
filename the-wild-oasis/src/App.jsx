import styled from 'styled-components'


const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`

const BUTTON = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight:  500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
`
const Input = styled.button`
  border : 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`
const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`
function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <BUTTON onClick={() => alert('click in')}>Check in</BUTTON>
      <BUTTON onClick={() => alert('check out')}>Check Out</BUTTON>
      <Input type='number' placeholder="Number of guests" />
      <Input type='number' placeholder="Number of guests" />
    </StyledApp>

  )
}

export default App
