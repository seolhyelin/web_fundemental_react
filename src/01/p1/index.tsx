import styled from 'styled-components'
import Input from './Input'
import Tab from './Tab'
import Toggle from './Toggle'

interface FeatureType {
  title: string
  component: JSX.Element
}

export default function Problem01() {
  const features: FeatureType[] = [
    {
      title: '탭이동하기',
      component: <Tab />,
    },
    {
      title: '토글',
      component: <Toggle />,
    },
    {
      title: 'Input',
      component: <Input />,
    },
  ]

  return (
    <div>
      {features.map((feature, featureIdx) => {
        return (
          <FeatureWrapper key={featureIdx}>
            <h2>{feature.title}</h2>
            {feature.component}
          </FeatureWrapper>
        )
      })}
    </div>
  )
}

const FeatureWrapper = styled.div`
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
