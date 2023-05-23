import styled from "styled-components"
import sea from '../../assets/images/3.png'
import bottles from '../../assets/images/4.png'
import beach from '../../assets/images/2.png'
import data from '../../shared/variables.json'
import Button, { ButtonMode } from "../../shared/Button"

const MainContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
`

const Header = styled.p`
  font-size: 50px;
  font-weight: bold;
`

const Subheader = styled.p`
  font-size: 30px;
  margin: 40px 0px;
  font-weight: 600;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`

const Facts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
`

const CardInfo = styled.div`
  width: 30vw;
  text-align: left;
`

const Text = styled.p`
  font-size: 22px;
`

interface ImageProps {
  index: number
}

const CardImage = styled.img<ImageProps>`
  margin-${(props) => props.index % 2 === 0 ? 'right' : 'left'}: 40px;
`

function Fourth() {

  const img = [sea, bottles, beach]
  const { fourth } = data

  return (
    <MainContainer id="takeaction">
      <Header>Why ecology matters?</Header>
      <Subheader>
        You probably are concerned about your health.
        <br/>We are concerned about it too.
      </Subheader>
      <Title>According to the World Wildlife Fund (WWF), from 5 to 12 million tons of plastic ends up in the oceans annually.</Title>
      <Facts>
        {fourth.map((item, index) => 
          <Card key={index}>
            {index % 2 === 0 && <CardImage src={img[index]} index={index} height={350}/>}
            <CardInfo>
              <Title>{item.title}</Title>
              {index !== 2
                ? <Text>{item.text}</Text>
                : <Button onClick={() => {}} mode={ButtonMode.PRIMARY}>{item.text}</Button>
              }
            </CardInfo>
            {index % 2 !== 0 && <CardImage src={img[index]} index={index} height={350}/>}
          </Card>
        )}
      </Facts>
    </MainContainer>
  )
}

export default Fourth