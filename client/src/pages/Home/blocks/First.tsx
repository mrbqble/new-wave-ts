import styled from 'styled-components';
import back from '../../assets/images/back.png';
import Button, { ButtonMode } from '../../shared/Button';

const MainContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 99.1vw;
  height: 100vh;
  top: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: auto;
`;

const Title = styled.p`
  color: white;
  font-size: 15rem;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
`;

const Subtitle = styled.p`
  margin-top: auto;
  margin-left: auto;
  font-weight: 500;
  font-size: 2.2rem;
  background-color: white;
  padding: 0.1.6rem 10vw 0.1.6rem 2rem;
`;

function First() {
  return (
    <MainContainer>
      <BackgroundImage src={back} />
      <Content>
        <Title>
          think eco
          <br />
          logically
        </Title>
        <Button onClick={() => {}} mode={ButtonMode.PRIMARY}>
          join our community
        </Button>
      </Content>
      <Subtitle>Take a small step to save our Planet with us.</Subtitle>
    </MainContainer>
  );
}

export default First;
