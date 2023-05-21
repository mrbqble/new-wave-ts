import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../pages/shared/Footer'
import styled from 'styled-components'
import Navbar from '../pages/shared/Navbar'
import Home from '../pages/Home/Home'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import FullRegistrationForm from '../pages/auth/FullRegistrationForm'

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
                    <Route path='/fullregistrationform' element={<FullRegistrationForm/>}/>
                </Routes>
            </MainContainer>
            <Divider/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router