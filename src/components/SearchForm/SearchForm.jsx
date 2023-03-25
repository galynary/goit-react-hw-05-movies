import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import loupe from '../../images/loupe.svg';
import {
  SearchWrapper,
  SearchForm,
  SearchButton,
  SearchFormInput,
} from './SearchForm.styled';

export const SearchFormFilm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = evt => {
    setQuery(evt.currentTarget.value);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.warn('The request was not correct. Please try again!');
      resetForm();
      return;
    }
    onSubmit(query);
    resetForm();
  };

  const resetForm = () => setQuery('');

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmitForm}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search film..."
          value={query}
          onChange={handleChangeInput}
        />
        <SearchButton
          type="submit"
          style={{ backgroundImage: `url(${loupe})` }}
        ></SearchButton>
      </SearchForm>
    </SearchWrapper>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
