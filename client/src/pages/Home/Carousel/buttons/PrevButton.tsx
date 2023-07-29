import React from 'react';
import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

interface Props {
  children: React.ReactNode;
}

const Button = styled.a`
  font-size: 2rem;
  font-weight: 500;
`;

const PrevButton = ({ children }: Props) => {
  const swiper = useSwiper();
  return <Button onClick={() => swiper.slidePrev()}>{children}</Button>;
};

export default PrevButton;
