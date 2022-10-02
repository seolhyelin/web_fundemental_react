import styled from 'styled-components'

const Toggle = () => {
  const content = ['토실', '실토']

  return (
    <ToggleContainer>
      <ToggleWrapper>
        {content.map((toggleItem, i) => {
          return <ToggleContent key={i}>{toggleItem}</ToggleContent>
        })}
      </ToggleWrapper>

      <ActiveTab />
    </ToggleContainer>
  )
}

const ToggleContainer = styled.div`
  width: 300px;
  border: 1px solid gray;
  border-radius: 10px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ToggleContent = styled.button`
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #fff;
  font-size: 50px;
`
const ActiveTab = styled.div``
export default Toggle
