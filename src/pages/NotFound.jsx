import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ padding: '40px', fontSize: '24px' }}>
        The request was not made correctly. Please try again!
      </h2>
      <Link to={'/'} style={{ color: 'tomato' }}>
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound;
