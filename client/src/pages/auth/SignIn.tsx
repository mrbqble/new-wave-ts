import { useState } from 'react'
import Link from '../shared/Link'
import Input from '../shared/Input'
import Modal from '../shared/Modal'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { LOG_IN } from '../../apollo/actions'
import { useNavigate } from 'react-router-dom'
import { useContext } from '../../context/Context'
import Button, { ButtonMode } from '../shared/Button'

const MainContainer = styled.div`
  gap: 2rem;
  display: flex;
  padding: 5rem 2rem;
  align-items: center;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 5rem;
  font-weight: 500;
`

const Form = styled.div`
  gap: 3rem;
  display: flex;
  padding: 3rem 4rem;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`

const TempA = styled(Link)`
  color: grey;
  font-size: 1.6rem;
  text-transform: none;
`

const Navigate = styled(TempA)`
  align-self: center;
`

const Forgot = styled(TempA)`
  align-self: end;
  margin-top: -3rem;
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