import GlobalComponent from 'components/GlobalComponent'
import styled from 'styled-components'
import Tab from './components/Tab'
import Toggle from './components/Toggle'

const App = () => {
  const ComponentArray = [<Tab title="Tab" key="tab" />, <Toggle key="toggle" />]
  return <GlobalComponent>{ComponentArray}</GlobalComponent>
}

export default App
