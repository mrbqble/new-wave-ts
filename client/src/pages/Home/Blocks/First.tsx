import styled from 'styled-components'
import back from '../../../assets/back.png'
import Button from '../../../shared/Button'

const MainContainer = styled.div`
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BackgroundImage = styled.img`
    position: absolute;
    z-index: -1;
    width: 99.1vw;
    height: 92vh;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: auto;
`

const Title = styled.p`
    color: white;
    font-size: 150px;
    font-weight: bolder;
    text-transform: uppercase;
    text-align: center;
`

const Subtitle = styled.p`
    margin-top: auto;
    margin-left: auto;
    font-weight: 500;
    font-size: 22px;
    background-color: white;
    padding: 16px 10vw 16px 20px;
`

function First() {
    return (
        <MainContainer>
            <BackgroundImage src={back}/>
            <Content>
                <Title>think eco<br/>logically</Title>
                <Button onClick={() => {}}>join our community</Button>
            </Content>
            <Subtitle>Take a small step to save our Planet with us.</Subtitle>
        </MainContainer>
    )
}

export default First