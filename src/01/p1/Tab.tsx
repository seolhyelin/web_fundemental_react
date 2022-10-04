import { useState } from 'react'
import styled from 'styled-components'

interface TabProps {
  title: string
}

const Tab = ({ title }: TabProps) => {
  const tabTitle = ['설혜린', '이진석', '이관석']
  const [activeItem, setActiveItem] = useState(0)

  const handleActiveItem = (index: number) => {
    setActiveItem(index)
  }

  return (
    <TabContainer title={title}>
      {tabTitle.map((tabItem, index) => {
        return (
          <TabName
            key={tabItem}
            onClick={() => handleActiveItem(index)}
            className={index === activeItem ? 'focused' : ''}
          >
            {tabItem}
          </TabName>
        )
      })}
      <ActiveBar activeItem={activeItem} />
    </TabContainer>
  )
}

const TabContainer = styled.div`
  display: flex;
  position: relative;
  border-bottom: 7px solid gray;
`

const TabName = styled.button`
  width: 200px;
  margin-bottom: 10px;
  padding: 0px 30px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 30px;
  font-weight: 200;
  list-style: none;
  text-align: center;
  cursor: pointer;

  &.focused {
    color: red;
    font-weight: 700;
    transition: 0.3s ease-out;
  }
`

const ActiveBar = styled.div<{ activeItem: number }>`
  width: 200px;
  height: 7px;
  position: absolute;
  bottom: -7px;
  background-color: red;
  transform: ${({ activeItem }) => `translateX(${activeItem * 100}%)`};
  transition: 0.3s ease-out;
`

export default Tab
