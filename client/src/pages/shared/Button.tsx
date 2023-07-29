import styled from 'styled-components';

export enum ButtonMode {
  PRIMARY,
  SECONDARY,
  DEFAULT,
}

interface ButtonProps {
  mode?: ButtonMode;
  isUppercase?: boolean;
  padding?: string;
}

const Button = styled.a<ButtonProps>`
  color: white;
  display: flex;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 500;
  padding: ${(props) => props.padding || '1.4rem 1.9rem'};
  text-decoration: none;
  justify-content: center;
  border: 0.1rem solid #0013bc;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.mode !== ButtonMode.PRIMARY ? 'white' : '#0013BC'};
  color: ${(props) =>
    props.mode === ButtonMode.SECONDARY
      ? '#0013BC'
      : props.mode === ButtonMode.DEFAULT
      ? 'black'
      : 'white'};
  border-color: ${(props) => props.mode === ButtonMode.DEFAULT && 'black'};
  &:hover {
    color: #0013bc;
    background-color: white;
    border-color: ${(props) =>
      props.mode === ButtonMode.SECONDARY
        ? '#D0D5FF'
        : props.mode === ButtonMode.DEFAULT && '#0013BC'};
  }
`;

export default Button;
