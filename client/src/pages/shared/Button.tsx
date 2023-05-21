import styled from 'styled-components'

const Button = styled.a`
    color: white;
    display: flex;
    padding: 15px 20px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    justify-content: center;
    background-color: #0013BC;
    text-transform: uppercase;
    &:hover {
        padding: 14px 19px;
        color: #0013BC;
        border: 1px solid;
        background-color: white;
    }
`

export default Button