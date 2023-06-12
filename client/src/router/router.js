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
import NewReport from '../pages/report/NewReport'
import StatusChange from '../pages/admin/StatusChange'
import AdminPage from '../pages/admin/AdminPage'
import EventInfo from '../pages/event/EventInfo'
const Divider = styled.hr`
  height: .2rem;
  border: none;
  margin-left: 3rem;
  margin-right: 3rem;
  background-color: #D0D5FF;
  border-radius: .2rem;
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
          <Route path='/newreport' element={<NewReport/>}/>
          <Route path='/financials' element={<Financials/>}/>
          <Route path='/verify' element={<CodeVerification/>}/>
          <Route path='/events' element={<EventInfo/>}/>
          <Route path='/statuschange' element={<StatusChange/>}/>
          <Route path='/fullsignupform' element={<FullSignUpForm/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
      </MainContainer>
      <Divider/>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router