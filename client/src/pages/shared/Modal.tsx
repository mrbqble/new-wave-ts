import Button, { ButtonMode } from './Button';
import styled from 'styled-components';

interface MainContainerProps {
  visible: Boolean;
}

const MainContainer = styled.div<MainContainerProps>`
  z-index: 20;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

const Content = styled.div`
  gap: 3rem;
  padding: 4rem;
  display: flex;
  max-width: 40vw;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.h1``;

const Subtitle = styled.h2`
  font-weight: 400;
  color: #666666;
`;

interface ModalProps {
  title: String;
  subtitle: String;
  buttonTitle: String;
  isVisible: boolean;
  onPress: () => void;
}

function Modal({
  title,
  subtitle,
  buttonTitle,
  isVisible,
  onPress,
}: ModalProps) {
  return (
    <MainContainer visible={isVisible}>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button onClick={onPress} mode={ButtonMode.PRIMARY}>
          {buttonTitle}
        </Button>
      </Content>
    </MainContainer>
  );
}

export default Modal;
