import styled from "styled-components"
import Carousel from "../Carousel/Carousel"

const MainContainer = styled.div`
  padding: 5rem 2rem;
`

const Title = styled.p`
  font-size: 5rem;
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