import styled from 'styled-components'

export enum ButtonMode {
  PRIMARY,
  SECONDARY,
  DEFAULT
}

interface ButtonProps {
  mode?: ButtonMode
}

const Button = styled.a<ButtonProps>`
  color: white;
  display: flex;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  padding: 14px 19px;
  text-decoration: none;
  justify-content: center;
  border: 1px solid #0013BC;
  text-transform: uppercase;
  background-color: ${(props) => 
    props.mode !== ButtonMode.PRIMARY
      ? 'white'
      : '#0013BC'};
  color: ${(props) => 
    props.mode === ButtonMode.SECONDARY
      ? '#0013BC'
      : props.mode === ButtonMode.DEFAULT
        ? 'black'
        : 'white'};
  border-color: ${(props) => props.mode === ButtonMode.DEFAULT && 'black'};
  &:hover {
    color: #0013BC;
    background-color: white;
    border-color: ${(props) =>
      props.mode === ButtonMode.SECONDARY
        ? '#D0D5FF'
        : props.mode === ButtonMode.DEFAULT && '#0013BC'
      };
  }
`

export default Button