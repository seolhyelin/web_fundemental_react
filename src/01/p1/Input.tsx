import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

import { Heart, Broken } from '../../images'

const Input = () => {
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const EmailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

    setIsValidEmail(EmailRegex.test(e.currentTarget.value))
  }

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <InputContainer>
      <p>이메일</p>
      <InputWrapper>
        <EmailInput type="email" onChange={checkEmail} />
        <Heart style={{ fill: `${isValidEmail ? '#ff0000' : '#000'}` }} />
      </InputWrapper>

      <p>비밀번호</p>
      <InputWrapper>
        <PasswordInput type={showPassword ? 'text' : 'password'} />
        <Broken onClick={handlePassword} style={{ fill: `${showPassword ? '#ff0000' : '#000'}` }} />
      </InputWrapper>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  p {
    font-size: 30px;
  }
`
const InputWrapper = styled.div``

const EmailInput = styled.input`
  width: 250px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`

const PasswordInput = styled.input`
  width: 250px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`

export default Input
