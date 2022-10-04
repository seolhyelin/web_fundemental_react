import React, { ChangeEventHandler, useState } from 'react'
import styled from 'styled-components'

const Slider = () => {
  const [percent, setPercent] = useState(50)
  const [numberButton, setNumberButton] = useState<number>()
  const numberButtonArray = [1, 25, 50, 75, 100]

  const handleRange = (e: ChangeEventHandler<HTMLInputElement>) => {
    // const currentPercent =
    // setPercent(currentPercent)
  }
  const changeRangeNumber = () => {}

  return (
    <SliderContainer>
      <RangeBar>
        <RangePercent>{percent} %</RangePercent>
      </RangeBar>

      <PercentContainer>
        {/* <PercentBar type="range" min={1} max={100} onChange={handleRange} /> */}
        {numberButtonArray.map((number, index) => {
          return <PercentNumber key={index}>{number}</PercentNumber>
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
