import 'swiper/css'
import "swiper/css/effect-creative"
import json from '../../shared/variables.json'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'
import { useContext } from '../../../context/Context'
import { EffectCreative, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import NextButton from './Next'
import PrevButton from './Previous'
import Link from '../../shared/Link'

const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 40px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 40px 20px;
`

const Event = styled.div`
  margin-left: 12.1vw;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  width: 45em;
`

const Name = styled.p`
  font-size: 50px;
  font-weight: 700;
`

const Info = styled.div`
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Text = styled.p`
  font-size: 22px;
  font-weight: 600;
`

const SubText = styled.p`
  font-size: 22px;
`

const Date = styled.p`
  font-size: 30px;
  font-weight: 700;
`

const Navigate = styled(Link)`
  font-size: 20px;
`

const Slider = styled.div`
  display: flex;
  text-align: left;
  margin-left: 10vw;
  overflow-x: hidden;
  flex-direction: column;
`

const Image = styled.img``

const Number = styled.p`
  font-size: 48px;
  color: #D0D5FF;
  font-weight: bold;
`

const Buttons = styled.div`
	display: flex;
`

const ButtonText = styled.p`
	border: #D0D5FF solid 1px;
	padding: 15px 20px;
	cursor: pointer;
  display: flex;
  rotate: 180deg;
`

const Next = styled(ButtonText)`
  background-color: #D0D5FF;
  text-transform: uppercase;
  gap: 10px;
  rotate: 0deg;
  line-height: 18px;
`

interface EventProps {
  date: String
  title: String
  text: String
  image: string
}

const GET_ALL_EVENTS = gql`
  query {
    allEvents {
      date
      text
      title
      image
    }
  }
`

function Carousel() {
  const { loading, error, data } = useQuery(GET_ALL_EVENTS, {
    fetchPolicy: 'network-only'
  })

  let date: string[]
  let text: string[]
  const { months } = json
  const { events, setEvents } = useContext()

  if(data && !error && !loading) {
    setEvents(data.allEvents)
  }

  const renderSLides = (item: EventProps, index: number) => {
    return (
      <Container>
        <Event>
          <Name>{item.title}</Name>
          <Info>
            <Text>{text[0]}</Text>
            <SubText>{text[1]}</SubText>
            <Date>{date[2] + " " + months[parseInt(date[1]) - 1] + " " + date[0]}</Date>
          </Info>
          <Navigate>learn more<ArrowIcon/></Navigate>
        </Event>
        <Slider>
          <Number>0{index + 1}</Number>
          <Image src={item.image} height={420} width={420}/>
					<Buttons>
						<PrevButton>
              <ButtonText>
                <ArrowIcon/>
              </ButtonText>
            </PrevButton>
						<NextButton>
              <Next>
                next
                <ArrowIcon/>
              </Next>
            </NextButton>
					</Buttons>
        </Slider>
      </Container>
    )
  }

  return (
    <Swiper
      loop
      initialSlide={1}
      slidesPerView={1}
      effect={"creative"}
      creativeEffect={{
        prev: {
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[EffectCreative, Autoplay]}
    >
      {events?.length
        ? events.map((item: EventProps, index: number) => 
          <>
            {date = item.date.split('-')}
            {text = item.text.split('\n')}
            <SwiperSlide key={index}>
              {renderSLides(item, index)}
            </SwiperSlide>
          </>)
        : <Title>There are no upcoming events at the moment.</Title>
      }
    </Swiper>
  )
}

export default Carousel