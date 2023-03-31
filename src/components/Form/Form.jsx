import { useState } from 'react';
import loupe from '../../images/loupe.svg';
import PropTypes from 'prop-types';
import { Container, Form, Field, Input, Button } from './Form.styled';
import { toast } from 'react-toastify';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);

  const submitHandler = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast('Wrong query');
    }
    onSubmit(query);
    resetForm();
  };

  const resetForm = () => setQuery('');

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Field>
          <Button
            type="submit"
            style={{ backgroundImage: `url(${loupe})` }}
          ></Button>
          <Input
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            placeholder="Search"
            onChange={handleChange}
          />
        </Field>
      </Form>
    </Container>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
