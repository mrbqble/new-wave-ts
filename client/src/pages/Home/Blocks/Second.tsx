import { Autoplay } from "swiper"
import styled from "styled-components"
import data from '../../shared/variables.json'
import { Swiper, SwiperSlide } from "swiper/react"
import NumberAnimated from "../../shared/NumberAnimated"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 20px;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

  const Title = styled.p`
  font-size: 50px;
  font-weight: bold;
`

const Subtitle = styled.p`
  font-size: 30px;
  margin: 40px 0px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 60px;
`

const Stat = styled.div`
  width: 26vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Text = styled.p`
  font-size: 22px;
  margin-bottom: 20px;
`

const Number = styled.div`
  font-size: 50px;
  color: #0013BC;
  font-weight: bolder;
`

const SubText = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`

const Box = styled.div`
  width: 13vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`

function Second() {

  const { titles, stats } = data.second

  return (
    <MainContainer id="about">
      <Header>
        <Title>We save the</Title>
        <Swiper
          initialSlide={1}
          slidesPerView={3}
          modules={[Autoplay]}
          centeredSlides={true}
          loop={true}
          direction={"vertical"}
          style={{
            zIndex: "-1",
            height: "19vh",
            width: '11em',
            overflow: 'hidden'
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {titles.map((item, index) =>
            <SwiperSlide key={index}>
              {({ isActive }) => 
                <Title style={{color: isActive ? "#0013BC" : "#D0D5FF"}}>{item}.</Title>}
            </SwiperSlide>
          )}
        </Swiper>
      </Header>
      <Title style={{marginTop: -59}}>Together.</Title>
      <Subtitle>How do we tackle with environmental issues?</Subtitle>
      <Content>
        {stats.map((item, index) =>
          <Stat key={index}>
            <Text>{item.text}</Text>
            <Box>
              <Number><NumberAnimated num={item.number}/></Number>
              <SubText>{item.subtext}</SubText>
            </Box>
          </Stat>
        )}
      </Content>
    </MainContainer>
  )
}

export default Second