import { Link } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
import { Title, Container } from './Error.styled';

const Error = () => {
  return (
    <Container>
      <Title>Error, something went wrong</Title>
      <Link to={PAGE_NAMES.homePage} style={{ color: 'tomato' }}>
        Go to home page
      </Link>
    </Container>
  );
};

export default Error;
