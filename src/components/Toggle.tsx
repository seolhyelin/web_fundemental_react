import { useState } from 'react'
import styled from 'styled-components'

const Toggle = () => {
  const [toggle, setToggle] = useState(0)
  const content = ['토실', '실토']

  const handleToggle = (index: number) => {
    setToggle(index)
  }

  return (
    <ToggleWrapper>
      <ActiveTab toggle={toggle} />
      {content.map((toggleItem, index) => {
        return (
          <ToggleContent onClick={() => handleToggle(index)} key={index} isSelect={index === toggle}>
            {toggleItem}
          </ToggleContent>
        )
      })}
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  border: 1px solid gray;
  border-radius: 15px;
`

const ToggleContent = styled.button<{ isSelect: boolean }>`
  width: 50%;
  padding: 15px;
  border: none;
  background: none;
  font-size: 30px;
  color: ${({ isSelect }) => (isSelect ? '#000' : 'gray')};
  cursor: pointer;
  z-index: 3;
`
const ActiveTab = styled.div<{ toggle: number }>`
  position: absolute;
  width: 50%;
  height: 100%;
  border-radius: 15px;
  background-color: beige;
  transform: ${({ toggle }) => `translateX(${toggle * 100}%)`};
  transition: 0.3s ease-out;
`
export default Toggle
