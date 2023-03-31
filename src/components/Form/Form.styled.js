import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 500px;
  border-radius: 15px;
`;

export const Field = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #fefefe;
  border-radius: 10px;
  color: #fff;
  padding: 17px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: #ec9706;
  }
`;

export const Button = styled.button`
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
