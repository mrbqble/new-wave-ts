import styled from 'styled-components'
import Button, { ButtonMode } from '../shared/Button';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from '../../context/Context';
import { EventProps } from '../Home/carousel/Carousel';
import json from '../shared/variables.json';

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
  object-fit: cover;
  width: 60rem;
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

interface EventType extends EventProps {
  location: string;
  startTime: string;
  endTime: string;
}

function EventInfo() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState<EventType>();
  const { events } = useContext();
  const { months } = json;

  useEffect(() => {
    if(events){
      if(!event){
        const ASFNADK = events.find((item: EventType) => item.number===id);
        console.log(ASFNADK)
        setEvent(ASFNADK);
      }
    }
  }, [events]);

  if(!id){
    navigate('/');
    return;
  }
  const idN: number  = +id;

  const showEvent = (item: EventType) => {
    const text = item.text.split('\n');
    const date = item.date.split('-')
    return <MainContainer>
        <EventInfoText>
          <EventTitle><Blueify>{item?.title}</Blueify> Event</EventTitle>
          <EventFDescription>{text[0]}</EventFDescription>
          <EventSDescription>{text[1]}</EventSDescription>
          <DetailsSection>
            <DetailItem>Location: <Blueify>{item?.location}</Blueify></DetailItem>
            <DetailItem>Time: <Blueify>{`from ${item.startTime} to ${item.endTime}`}</Blueify></DetailItem>
            <DetailItem>Date: <Blueify>{months[parseInt(date[1]) - 1] + " " + date[2]  + " " + date[0]}</Blueify></DetailItem>
            <DetailItem>Volunteers needed: <Blueify>50</Blueify></DetailItem>
            <DetailItem>Available places: <Blueify>46</Blueify></DetailItem>
          </DetailsSection>
          <Button style={{marginTop: "1rem"}} mode={ButtonMode.PRIMARY} isUppercase>Attend event</Button>
        </EventInfoText>
        <EventImg src={item.image} />
        </MainContainer>
  }

  return events ? showEvent(events.find((item: EventType) => {
      console.log(`${item.number} and ${typeof item.number}  -  ${idN} and ${typeof idN}`)
      return parseInt(item.number) === idN;
    })) : <p>loading</p>
}

export default EventInfo