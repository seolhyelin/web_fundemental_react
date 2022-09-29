import styled from 'styled-components'

interface GlobalProps {
  title?: string
  children: React.ReactNode
}
const GlobalComponent = ({ title, children }: GlobalProps) => {
  return (
    <GlobalContainer>
      <Title>{title}</Title>
      {children}
    </GlobalContainer>
  )
}

const GlobalContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
`

export default GlobalComponent
