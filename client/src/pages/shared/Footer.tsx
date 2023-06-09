import styled from 'styled-components';
import data from './variables.json'
import TiktokIcon from '../assets/icons/TiktokIcon';
import InstagramIcons from '../assets/icons/InstagramIcon';
import YoutubeIcon from '../assets/icons/YoutubeIcon';
import Link from './Link';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem 0rem 4rem 0rem;
  justify-content: space-evenly;
`

const List = styled.ul`
  list-style-type: none;
`

const Li = styled.li`
  margin-top: 1.2rem;
  font-size: 1.8rem;
  display: flex;
  gap: 1rem;
`

const Title = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`

const Navigate = styled(Link)`
  text-transform: none;
  font-size: 1.8rem;
  font-weight: 400;
`

function Footer() {

  const message = 'made with love <3';

  return (
    <MainContainer>
      {data.footer.map((item, index) => 
        <List key={index}>
          <Li>
            <Title>{item.title}</Title>
          </Li>
          {item.links.map((item, index) => 
            <Li key={index}>
              <Navigate href={item.href}>{item.title}</Navigate>
            </Li>
          )}
        </List>
      )}
      <List>
        <Li style={{ textTransform: 'uppercase' }}>
					<Title>new wave</Title>
        </Li>
        <Li>© {new Date().getFullYear()}</Li>
        <Li>{message}</Li>
        <Li>
          <Link
            target='_blank'
            href='https://www.tiktok.com/'
          >
            <TiktokIcon size={45}/>
          </Link>
          <Link
            target='_blank'
            href='https://www.instagram.com/newwave_club'
          >
            <InstagramIcons size={45}/>
          </Link>
          <Link
            target='_blank'
            href='https://youtube.com'
          >
            <YoutubeIcon size={45}/>
          </Link>
        </Li>
      </List>
    </MainContainer>
  )
}

export default Footer