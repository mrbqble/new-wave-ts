import styled from 'styled-components';

const Link = styled.a`
  color: black;
  text-decoration: none;
  gap: 1rem;
  display: flex;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  align-items: center;
  text-transform: uppercase;
  &:hover {
    color: #0013bc;
  }
`;

export default Link;
