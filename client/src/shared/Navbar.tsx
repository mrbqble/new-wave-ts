import styled from 'styled-components'
import Button from './Button'
import { useContext } from '../context/Context'
import Link from './Link'

const MainContainer = styled.div`
    height: 8vh;
    width: 100%;
    z-index: 10;
    display: flex;
    position: fixed;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    justify-content: space-evenly;
    border-bottom: 2px solid #0013BC;
`

const Logo = styled(Link)`
    font-size: 24px;
    font-weight: 700;
`

const LinksContainer = styled.div`
    gap: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

function Navbar () {

    const { isLoggedIn } = useContext()

    return (
        <MainContainer>
            <Logo>new wave</Logo>
            <LinksContainer>
                <Link>about us</Link>
                <Link>take action!</Link>
                <Link>community</Link>
                <Link>our projects</Link>
            </LinksContainer>
            <LinksContainer>
                {isLoggedIn
                ? <>
                    <Link>profile</Link>
                    <Link>log out</Link>
                </>
                : <>
                    <Link>sign in</Link>
                    <Link>sign up</Link>
                </>}
                <Button onClick={() => {}}>donate</Button>
            </LinksContainer>
        </MainContainer>
    )
}

export default Navbar