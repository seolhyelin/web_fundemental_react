import styled from 'styled-components'

interface GlobalProps {
  title?: string
  children: React.ReactNode
}

const GlobalComponent = ({ title, children }: GlobalProps) => {
  return (
    <GlobalContainer>
      {/* <Title>{title}</Title> */}
      {children}
    </GlobalContainer>
  )
}

const GlobalContainer = styled.div`
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

const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
`

export default GlobalComponent
