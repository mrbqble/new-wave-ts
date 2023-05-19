import styled from "styled-components"
import Carousel from "../carousel/Carousel"

const MainContainer = styled.div`
  padding: 50px 20px;
`

const Title = styled.p`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`

function Fifth() {
  return (
    <MainContainer id="community">
      <Title>Upcoming events</Title>
      <Carousel/>
    </MainContainer>
  )
}

export default Fifth