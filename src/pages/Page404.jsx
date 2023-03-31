import noImage from '../images/no-image.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Wrapper, GoHome, Title } from './Page404.styled';

export const Page404 = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <Wrapper>
      <Title>404</Title>
      <p>Sorry, we can't find this page! But don't worry, it's still great!</p>
      <GoHome>
        {' '}
        You will be relocated to Home Page in {countdown} seconds
      </GoHome>
      <img
        src={noImage}
        alt="404"
        style={{ display: 'block', margin: 'auto' }}
      />
    </Wrapper>
  );
};
