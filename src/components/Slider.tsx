import { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

const Slider = () => {
  const [percent, setPercent] = useState(50)
  const numberButtonArray = [0, 25, 50, 75, 100]

  const handlePercent = (e: ChangeEvent<HTMLInputElement>) => {
    setPercent(+e.currentTarget.value)
  }

  return (
    <SliderContainer>
      <RangeBar>
        <RangePercent>{percent} %</RangePercent>
      </RangeBar>

      <PercentContainer>
        <PercentBar type="range" value={percent} onChange={handlePercent} />
        {numberButtonArray.map((number, index) => {
          return (
            <PercentNumber key={index} value={number} onClick={() => setPercent(number)}>
              {number}
            </PercentNumber>
          )
        })}
      </PercentContainer>
    </SliderContainer>
  )
}

const SliderContainer = styled.div``
const RangeBar = styled.div`
  width: 300px;
  height: 50px;
  background-color: antiquewhite;
  margin-bottom: 30px;
`
const RangePercent = styled.p``
const PercentContainer = styled.div``
const PercentBar = styled.input`
  width: 300px;
`
const PercentNumber = styled.button``
export default Slider
