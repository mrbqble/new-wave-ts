import React, { useState } from 'react'
import styled from 'styled-components'
import validator from "validator"
import HideIcon from '../assets/icons/HideIcon'
import ShowIcon from '../assets/icons/ShowIcon'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
`

const Field = styled.input`
  width: max(20em, 100%);
  font-size: 1.8rem;
  padding: 1.5rem 2rem;
  border-radius: 0rem;
  border: .1rem solid grey;
  cursor: text;
`

const Message = styled.p`
  color: red;
  font-size: 1.6rem;
  font-weight: 400;
`

const FieldBox = styled.div`
  display: flex;
  align-items: end;
  position: relative;
`

const ShowHideIcons = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  /* margin-bottom: 2rem;
  margin-left: -4rem; */
`

const Must = styled(Title)`
  color: red;
`

interface Props {
  type?: string
  title: string
  value: string | number | undefined
  placeholder?: string
  onChange: (value: string) => void
  onSelect ?: () => void
  onBlur?: () => boolean
  must?: boolean
}

function Input({
  type = 'text',
  title,
  value,
  onChange,
  placeholder,
  onSelect,
  onBlur,
  must = true
}: Props) {

  const [message, setMessage] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [timeOutID, setTimeOutID] = useState<NodeJS.Timeout>()

  const InputCheck = (event: React.KeyboardEvent) => {
    if (/[а-яё]+/i.test(event.key)) {
      event.preventDefault()
      clearTimeout(timeOutID)
      setMessage("Latin letters only.")
      setTimeOutID(setTimeout(() => setMessage(''), 5000))
    } else if (event.key === " ") {
      event.preventDefault()
    }
  }

  const Password = () => {
    setShowPassword(!showPassword)
  }

  const valueType = type === 'password'
    ? showPassword
      ? 'text'
      : type
    : type
  
  const renderShowHidePasswordIcon = () => {
    if (type === 'password')
      return (
        <ShowHideIcons onClick={Password}>
          {showPassword
            ? <HideIcon/>
            : <ShowIcon/>}
        </ShowHideIcons>
      )
  }

  const isValidEmail = () => {
    return validator.isEmail(value ? value.toString() : '')
  }

  const onBlurField = () => {
    clearTimeout(timeOutID)
    if(type === 'email') {
      if (!isValidEmail()) {
        setMessage('Enter a valid email.')
      } else if (onBlur && onBlur()) {
        setMessage('This email is already taken.')
      } else {
        setMessage('')
      }
    }
    if ((!value || (value && value.toString().length < 2)) && must) {
      setMessage('Mandatory field!')
    }
    setTimeOutID(setTimeout(() => setMessage(''), 5000))
  }

  return (
    <MainContainer>
      {title.length > 0 && <Title>
        {title}:
        {must && <Must>*</Must>}
      </Title>}
      <FieldBox>
        <Field
          type={valueType}
          value={value}
          placeholder={placeholder}
          onKeyDown={(e) => InputCheck(e)}
          onChange={(e) => onChange(e.target.value)}
          onSelect={onSelect}
          onBlur={onBlurField}
        />
        {renderShowHidePasswordIcon()}
      </FieldBox>
      {message && type !== 'date' && <Message>{message}</Message>}
    </MainContainer>
  )
}

export default Input