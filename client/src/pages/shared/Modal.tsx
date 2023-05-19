import Button from './Button'
import { useState } from 'react'
import styled from 'styled-components'

interface MainContainerProps {
    visible: Boolean
}

const MainContainer = styled.div<MainContainerProps>`
    z-index: 20;
    width: 100%;
    height: 100%;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    display: ${(props) => props.visible ? 'flex' : 'none'};
`

const Content = styled.div`
    gap: 30px;
    padding: 40px;
    display: flex;
    max-width: 40vw;
    flex-direction: column;
    background-color: white;
`

const Title = styled.h1``

const Subtitle = styled.h2`
    font-weight: 400;
    color: #666666;
`

interface ModalProps {
    title: String
    subtitle: String
    buttonTitle: String
}

function Modal({ title, subtitle, buttonTitle}: ModalProps) {

    const [visible, setVisible] = useState(true)

    const onPress = () => {
        setVisible(false)
    }

    return (
        <MainContainer visible={visible}>
            <Content>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Button onClick={onPress}>{buttonTitle}</Button>
            </Content>
        </MainContainer>
    )
}

export default Modal