import styled from 'styled-components'

const Link = styled.a`
    color: black;
    text-decoration: none;
    gap: 10px;
    display: flex;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    align-items: center;
    text-transform: uppercase;
    &:hover {
        color: #0013BC;
    }

`

export default Link