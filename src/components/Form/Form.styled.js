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
  border: 1px solid #ff72b6;
  border-radius: 10px;
  color: #272020;
  padding: 17px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: #ab135c;
  }
`;

export const Button = styled.button`
  display: inline-block;
  position: absolute;
  height: 20px;
  width: 22px;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  right: 0px;
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;
