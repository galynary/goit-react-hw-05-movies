import styled from 'styled-components';
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 500px;
  border-radius: 15px;
`;

export const SearchFormInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  letter-spacing: 1.4px;
  color: #ec9706;
  background-color: transparent;
  border: 1px solid #fefefe;
  border-radius: 10px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: #ec9706;
    box-shadow: 0px 8px 12px -4px rgba(236, 151, 6, 0.32);
  }
  &:not(:focus) {
    color: #fefefe;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  padding: 0;
  color: #fefefe;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #ec9706;
  }
`;
