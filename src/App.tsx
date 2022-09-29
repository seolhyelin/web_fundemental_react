import GlobalComponent from 'components/GlobalComponent'
import Tab from './components/Tab'
import Toggle from './components/Toggle'

const App = () => {
  const ComponentArray = [<Tab key="tab" />, <Toggle key="toggle" />]

  return (
    <GlobalComponent>
      {ComponentArray.map((comp, index) => {
        return <div key={index}>{comp}</div>
      })}
    </GlobalComponent>
  )
}

export default App
