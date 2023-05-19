import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../shared/Footer'
import styled from 'styled-components'
import Navbar from '../shared/Navbar'
import Home from '../pages/Home/Home'

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
                </Routes>
            </MainContainer>
            <Divider/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router