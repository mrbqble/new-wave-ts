import styled from 'styled-components';
import { ArrowIcon } from '../../assets/icons/ArrowIcon';
import founder from '../../assets/images/1.png';
import Link from '../../shared/Link';

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-evenly;
  padding: 5rem 2rem;
`;

const Title = styled.p`
  font-size: 5rem;
  max-width: 25vw;
  font-weight: 700;
`;

const Navigate = styled(Link)`
  font-size: 2rem;
`;

const FounderInfo = styled.div`
  gap: 0.5rem;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const FounderImage = styled.img``;

const Text = styled.p`
  font-size: 0.1.6rem;
  font-weight: 500;
`;

const FounderName = styled(Text)`
  text-transform: uppercase;
`;

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

function Third() {
  return (
    <MainContainer>
      <Quote>
        <Title>
          "A person who has collected a bag of other people's garbage will never
          throw out his own."
        </Title>
        <Navigate>
          watch our story
          <ArrowIcon />
        </Navigate>
      </Quote>
      <FounderInfo>
        <FounderImage src={founder} height={320} />
        <Text>...ecology starts from our mind.</Text>
        <FounderName>our founder: zinaenur islam</FounderName>
      </FounderInfo>
    </MainContainer>
  );
}

export default Third;
