import { useSpring, animated } from 'react-spring';

interface Props {
  num: number;
}

function NumberAnimated({ num }: Props) {
  const { number } = useSpring({
    from: { number: 0 },
    number: num,
    delay: 500,
    config: {
      mass: 1,
      tension: 20,
      friction: 10,
    },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export default NumberAnimated;
