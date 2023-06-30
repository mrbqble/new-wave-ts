import 'swiper/css'
import "swiper/css/effect-creative"
import json from '../../shared/variables.json'
import styled from 'styled-components'
import { useContext } from '../../../context/Context'
import { EffectCreative, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import Link from '../../shared/Link'
import NextButton from './Next'
import PrevButton from './Previous'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Title = styled.p`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-top: 4rem;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 4rem 2rem;
`

const Event = styled.div`
  margin-left: 12.1vw;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
  width: 75em;
`

const Name = styled.p`
  font-size: 5rem;
  font-weight: 700;
`

const Info = styled.div`
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const Text = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
`

const SubText = styled.p`
  font-size: 2.2rem;
`

const Date = styled.p`
  font-size: 3rem;
  font-weight: 700;
`

const Navigate = styled(Link)`
  font-size: 2rem;
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
  font-size: 4.8rem;
  color: #D0D5FF;
  font-weight: bold;
`

const Buttons = styled.div`
	display: flex;
`

const ButtonText = styled.p`
	border: #D0D5FF solid .1rem;
	padding: 1.5rem 2rem;
	cursor: pointer;
  display: flex;
  rotate: 180deg;
`

const Next = styled(ButtonText)`
  background-color: #D0D5FF;
  text-transform: uppercase;
  gap: 1rem;
  rotate: 0deg;
  line-height: 1.8rem;
`

export interface EventProps {
  date: string
  title: string
  text: string
  image: string
  city: string,
  number: string
}

function Carousel() {
  let date: string[];
  let text: string[];
  const { months } = json;
  const { events } = useContext();
  const { user, refetchUser, isLoggedIn } = useContext();
  const navigate = useNavigate();

  useEffect(() => {
    refetchUser()
  }, [])
  const navigate = useNavigate()

  const renderSLides = (item: EventProps, index: number) => {
    date = item.date.split('-')
    text = item.text.split('\n')
    return (
      <Container>
        <Event>
          <Name>{item.title}</Name>
          <Info>
            <Text>{text[0]}</Text>
            <SubText>{text[1]}</SubText>
            <Date>{date[2] + " " + months[parseInt(date[1]) - 1] + " " + date[0]}</Date>
          </Info>
          <Navigate onClick={() => navigate(`event/${item.number}`)} >learn more<ArrowIcon/></Navigate>
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
        ? events.map((item: EventProps, index: number) => {
          if(isLoggedIn){
            if(user?.city===item.city){
              return <SwiperSlide key={index}> 
                {renderSLides(item, index)}
              </SwiperSlide>
            }
            return <></>;
          }
          return <SwiperSlide key={index}> 
          {renderSLides(item, index)}
        </SwiperSlide>
        }
        )
        : <Title>There are no upcoming events at the moment.</Title>
      }
    </Swiper>
  )
}

export default Carousel