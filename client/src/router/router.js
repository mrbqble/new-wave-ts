import Home from '../pages/Home/Home'
import styled from 'styled-components'
import SignIn from '../pages/auth/SignIn'
import Footer from '../pages/shared/Footer'
import Navbar from '../pages/shared/Navbar'
import Profile from '../pages/auth/Profile'
import SignUp from '../pages/auth/SignUp/SignUp'
import Financials from '../pages/other/Financials'
import CodeVerification from '../pages/other/CodeVerification'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullSignUpForm from '../pages/auth/SignUp/FullSignUpForm'
import NewEvent from '../pages/event/NewEvent'

const Divider = styled.hr`
  height: 2px;
  border: none;
  margin-left: 30px;
  margin-right: 30px;
  background-color: #D0D5FF;
  border-radius: 2px;
`

const MainContainer = styled.div`
  padding-top: 8vh;
`

function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <MainContainer>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/newevent' element={<NewEvent/>}/>
          <Route path='/financials' element={<Financials/>}/>
          <Route path='/verify' element={<CodeVerification/>}/>
          <Route path='/fullsignupform' element={<FullSignUpForm/>}/>
        </Routes>
      </MainContainer>
      <Divider/>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router