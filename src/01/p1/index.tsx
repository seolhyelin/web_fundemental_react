import styled from 'styled-components'
import Input from './Input'
import Tab from './Tab'
import Toggle from './Toggle'

export default function Problem01() {
  return (
    <div>
      <TabWrapper>
        <Tab title="Tab" />
      </TabWrapper>
      <TabWrapper>
        <Toggle key="Toggle" />
      </TabWrapper>
      <TabWrapper>
        <Input key="input" />
      </TabWrapper>
    </div>
  )
}

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;

  > div {
    margin-bottom: 50px;

    :last-child {
      margin-bottom: 0;
    }
  }
`
