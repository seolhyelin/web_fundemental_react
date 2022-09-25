import styled from 'styled-components'
import Tab from './components/Tab'

const App = () => {
  return (
    <Container>
      <Tab />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export default App
