import { useState } from 'react'
import Link from '../shared/Link'
import Input from '../shared/Input'
import Button, { ButtonMode } from '../shared/Button'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import Modal from '../shared/Modal'
import { useContext } from '../../context/Context'

const MainContainer = styled.div`
  gap: 20px;
  display: flex;
  padding: 50px 20px;
  align-items: center;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 50px;
  font-weight: 500;
`

const Form = styled.div`
  gap: 30px;
  display: flex;
  padding: 30px 40px;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`

const TempA = styled(Link)`
  color: grey;
  font-size: 16px;
  text-transform: none;
`

const Navigate = styled(TempA)`
  align-self: center;
`

const Forgot = styled(TempA)`
  align-self: end;
  margin-top: -30px;
`

const LOG_IN = gql`
  query($logInInput: LogInInput!) {
    logIn(input: $logInInput) {
      token
      success
    }
  }
`

function SignIn() {
  
  const navigate = useNavigate()
  const { setIsLoggedIn, setToken } = useContext()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false)
  
  const { data, error, loading, refetch } = useQuery(LOG_IN, {
    variables: {
      logInInput: {email: email, password: password}
    }
  })

  const onPressNavigate = () => navigate('/signup')

  const onPressButton = () => {
    refetch()
    if (error && !loading) {
      alert('apollo server error')
    }
    if (!error && !loading && data) {
      if (data.logIn.success) {
        navigate('/')
        setIsLoggedIn(true)
        setToken(data.logIn.token)
        localStorage.setItem('token', data.logIn.token)
      } else {
        setModal(true)
      }
    }
  }

  const onModalPress = () => {
    setModal(false)
  }

  return (
    <MainContainer>
      <Modal
        title='Oops!'
        subtitle='Your email or password is incorrect. Please, try again.'
        buttonTitle='okay'
        isVisible={modal}
        onPress={onModalPress}
      />
      <Title>Sign in</Title>
      <Form>
        <Input
          must={false}
          type='email'
          value={email}
          title='E-mail'
          onChange={setEmail}
          placeholder='example@mail.com'
        />
        <Input
          must={false}
          type='password'
          value={password}
          title='Password'
          onChange={setPassword}
          placeholder='Enter your password'
        />
        <Forgot>Forgot password?</Forgot>
        <Button onClick={onPressButton} mode={ButtonMode.PRIMARY}>sign in</Button>
        <Navigate onClick={onPressNavigate}>Don't have an account? Sign up</Navigate>
      </Form>
    </MainContainer>
  )
}

export default SignIn