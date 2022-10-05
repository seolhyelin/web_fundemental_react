import GlobalComponent from 'components/GlobalComponent'
import Dropdown from 'components/Dropdown'
import Input from 'components/Input'
import Slider from 'components/Slider'
import Tab from './components/Tab'
import Toggle from './components/Toggle'

const App = () => {
  const ComponentArray = [
    <Dropdown key="dropdown" />,
    <Tab title="Tab" key="tab" />,
    <Toggle key="toggle" />,
    <Input key="input" />,
    <Slider key="slider" />,
  ]
  return <GlobalComponent>{ComponentArray}</GlobalComponent>
}

export default App
