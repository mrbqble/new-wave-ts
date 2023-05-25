import { useState } from 'react'
import Link from '../../shared/Link'
import styled from 'styled-components'
import Input from '../../shared/Input'
import { useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { CHECK_EMAIL } from '../../../apollo/actions'
import Button, { ButtonMode } from '../../shared/Button'

const MainContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Title = styled.p`
  font-size: 50px;
  font-weight: 500;
`

const Form = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  background-color: rgba(208, 213, 255, 0.5);
`

const Navigate = styled(Link)`
  text-transform: none;
  font-size: 16px;
  color: grey;
  align-self: center;
`

const PasswordValidation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface CheckProps {
  check: boolean
}

const Check = styled.p<CheckProps>`
font-size: 16px;
color: ${(props) => props.check ? 'green' : 'red'};
`

function SignIn() {
  
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showValidation, setShowValidation] = useState<boolean>(false)
  
  const { loading, error, data, refetch } = useQuery(CHECK_EMAIL, {
    fetchPolicy: 'network-only',
    variables: {input: email}
  })

  const onSelect = () => setShowValidation(true)

  const doesContainNumber = () => {
    return /(?=.*[0-9])/.test(password)
  }

  const doesContainCharacter = () => {
    return /(?=.*[^\w\s])/.test(password)
  }

  const doesContainLowerLetter = () => {
    return /(?=.*[a-z])/.test(password)
  }

  const doesContainUpperLetter = () => {
    return /(?=.*[A-Z])/.test(password)
  }

  const checkLength = () => {
    return /[0-9a-zA-Z^\w\s].{8,}/.test(password)
  }

  const checkPassword = () => {
    return doesContainNumber()
    && doesContainCharacter()
      && doesContainLowerLetter()
      && doesContainUpperLetter()
      && checkLength()
  }

  const onPressButton = () => {
    checkPassword() && !data.checkEmail && navigate('/fullregistrationform', {state: {email, password, edit: false}})
  }

  const OnBlur = () => {
    refetch()
    if (error && !loading) {
      alert('apollo server error')
    }
    if (!error && !loading && data) {
      return data.checkEmail
    }
  }

  const onPressNavigate = () => navigate('/signin')

  return (
    <MainContainer>
      <Title>Sign up</Title>
      <Form>
        <Input
          must={false}
          type='email'
          title='E-mail'
          value={email}
          onChange={setEmail}
          onBlur={OnBlur}
          placeholder='example@mail.com'
        />
        <Input
          must={false}
          type='password'
          title='Password'
          value={password}
          onChange={setPassword}
          placeholder='Enter your password'
          onSelect={onSelect}
        />
        {showValidation &&
          <PasswordValidation>
            <Check check={doesContainNumber()}>1 number</Check>
            <Check check={doesContainUpperLetter()}>1 big letter</Check>
            <Check check={doesContainLowerLetter()}>1 small letter</Check>
            <Check check={doesContainCharacter()}>1 special character (example: !@.,#$%^&*"')</Check>
            <Check check={checkLength()}>Minimum 8 characters</Check>
          </PasswordValidation>
        }
        <Button onClick={onPressButton} mode={ButtonMode.PRIMARY}>sign up</Button>
        <Navigate onClick={onPressNavigate}>Already have an account? Sign in</Navigate>
      </Form>
    </MainContainer>
  )
}

export default SignIn