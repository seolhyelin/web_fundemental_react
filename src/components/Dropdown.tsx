import { ArrowDown } from 'images'
import { useState, MouseEvent } from 'react'
import styled from 'styled-components'

const Dropdown = () => {
  const wordArray = ['설혜린', '이진석', '이관석', '설토실', '한우석', '토실이', '설레임', '한그루', '토레타']
  const [isOpen, setIsOpen] = useState(false)
  const [searchWord, setSearchWord] = useState<string>('')
  const [currentWord, setCurrentWord] = useState<string>('all')

  const handleDropDown = () => {
    setIsOpen(!isOpen)
  }

  const choiceCurrentWord = (e: MouseEvent<HTMLLIElement>) => {
    setCurrentWord(e.currentTarget.id)
    setIsOpen(false)
  }

  return (
    <DropdownContainer>
      <KeywordButton onClick={handleDropDown}>
        {currentWord}
        <ArrowDown />
      </KeywordButton>

      {isOpen && (
        <DropBoxWrapper>
          <SearchInput placeholder="search" onChange={(e) => setSearchWord(e.currentTarget.value)} />
          <ResultBox>
            {wordArray
              // eslint-disable-next-line consistent-return
              .filter((val) => {
                if (searchWord == '') {
                  return val
                }
                if (val.includes(searchWord as string)) {
                  return val
                }
              })
              .map((word, index) => {
                return (
                  <li onClick={choiceCurrentWord} role="presentation" id={word} key={index}>
                    {word}
                  </li>
                )
              })}
          </ResultBox>
        </DropBoxWrapper>
      )}
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div``
const KeywordButton = styled.button`
  width: 225px;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: #fff;
  font-size: 17px;
  text-align: left;
  cursor: pointer;
`
const DropBoxWrapper = styled.div``
const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  font-size: 17px;
  border: 1px solid lightgray;

  &:focus {
    outline: none;
  }
`
const ResultBox = styled.ul`
  width: 200px;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: #fff;
  font-size: 17px;

  li {
    list-style: none;
    margin-bottom: 5px;
    cursor: pointer;

    :last-child {
      margin-bottom: 0;
    }
  }
`

export default Dropdown
