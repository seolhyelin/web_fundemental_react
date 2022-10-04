import GlobalComponent from 'components/GlobalComponent'
import Input from 'components/Input'
import styled from 'styled-components'
import Tab from './components/Tab'
import Toggle from './components/Toggle'

const App = () => {
  const ComponentArray = [<Tab title="Tab" key="tab" />, <Toggle key="toggle" />, <Input key="input" />]
  return <GlobalComponent>{ComponentArray}</GlobalComponent>
}

export default App
