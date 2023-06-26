import styled from 'styled-components'
import event_img from '../assets/images/3.png'
import Button, { ButtonMode } from '../shared/Button';

const descriptionFontSize = "2rem";
const gapConstant = "2rem";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 12vh;
  padding-bottom: 12vh;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  gap: 4rem;
`;

const EventInfoText = styled.article`
  display: flex;
  flex-direction: column;
  width: 45rem;
  gap: ${gapConstant};
`
const EventImg = styled.img`
  object-fit: contain;
  width: 60rem;
  object-position: top;
`
const EventTitle = styled.h1`
  font-size: 5rem;
`
const Blueify = styled.div`
  display: inline;
  font-size: inherit;
  color: #0013BC;
  font-weight: 700;
`
const EventFDescription = styled.p`
  font-weight: 600;
  font-size: ${descriptionFontSize};
`
const EventSDescription = styled.p`
  font-size: ${descriptionFontSize};
`
const DetailsSection = styled.ul`
  list-style: none;
`;
const DetailItem = styled.li`
  font-size: ${descriptionFontSize};
  margin-top: 1rem;
`

function EventInfo() {

  return (
    <MainContainer>
      <EventInfoText>
        <EventTitle><Blueify>First</Blueify> Event</EventTitle>
        <EventFDescription>The most powerful screening about rational usage and technological progress - Join the comedy movie session ‘a hundred things and nothing more’!</EventFDescription>
        <EventSDescription>Watch movies and help us to save the nature Every bought ticket is about 2 planted trees or 6400 liters of cleaned plastic waste! The craziest thing we do is nothing :)</EventSDescription>
        <DetailsSection>
          <DetailItem>Location: <Blueify>Abay Park, Shymkent</Blueify></DetailItem>
          <DetailItem>Time: <Blueify>from 19:00 to 22:00</Blueify></DetailItem>
          <DetailItem>Date: <Blueify>August 19th 2023</Blueify></DetailItem>
          <DetailItem>Volunteers needed: <Blueify>50</Blueify></DetailItem>
          <DetailItem>Available places: <Blueify>46</Blueify></DetailItem>
        </DetailsSection>
        <Button style={{marginTop: "1rem"}} mode={ButtonMode.PRIMARY} isUppercase>Attend event</Button>
      </EventInfoText>
      <EventImg src={event_img} />
    </MainContainer>
  )
}

export default EventInfo