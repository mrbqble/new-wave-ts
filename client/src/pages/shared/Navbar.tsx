import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Button, { ButtonMode } from './Button';
import { useContext } from '../../context/Context';
import Link from './Link';
import { useNavigate } from 'react-router-dom';

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
  border-bottom: 0.2rem solid #0013bc;
`;

const Logo = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
`;

const LinksContainer = styled.div`
  gap: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, setUser, setToken, setIsLoggedIn } = useContext();

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }  
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const NavBarLink = () => navigate('/');

  const LogOut = () => {
    setUser({});
    setToken('');
    navigate('/');
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    windowSize.innerWidth >640 ?
    <MainContainer>
      <Logo onClick={NavBarLink}>new wave</Logo>
      <LinksContainer>
        <Link href="#about" onClick={NavBarLink}>
          about us
        </Link>
        <Link href="#takeaction" onClick={NavBarLink}>
          take action!
        </Link>
        <Link href="#community" onClick={NavBarLink}>
          community
        </Link>
        <Link onClick={NavBarLink} style={{ color: '#0013BC' }}>
          our projects
        </Link>
      </LinksContainer>
      <LinksContainer>
        {isLoggedIn ? (
          <>
            <Link onClick={() => navigate('/profile')}>profile</Link>
            <Link onClick={LogOut}>log out</Link>
          </>
        ) : (
          <>
            <Link onClick={() => navigate('/signin')}>sign in</Link>
            <Link onClick={() => navigate('/signup')}>sign up</Link>
          </>
        )}
        <Button onClick={() => {}} mode={ButtonMode.PRIMARY}>
          donate
        </Button>
      </LinksContainer>
    </MainContainer> :
    <header className='header'>
    <div className='f-insta-small'>
    <Logo onClick={NavBarLink} className='insta-span' >new wave</Logo>
              </div>
<input type="checkbox" id="openSideMenu" className="openSideMenu" />
<label htmlFor="openSideMenu" className="menuIconToggle">
  <div className="hamb-line dia p-1"></div>
  <div className="hamb-line hor"></div>
  <div className="hamb-line dia p-2"></div>
</label>
<nav className='nav'>
  <ol>
    <li><Link >about us</Link></li>
    <li><Link >take action!</Link></li>
    <li><Link >community</Link></li>
    <li><Link >our projects</Link></li>
    <li><Link >sign up</Link></li>
  </ol>
</nav></header>
  );
}

export default Navbar;
