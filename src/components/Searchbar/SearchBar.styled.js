import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  color: #fff;
  background-color: #3f51b5;
  z-index: 900;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0 10px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 48px;
  padding: 0;
  border: 0;
  cursor: pointer;

  svg {
    width: 26px;
    height: 26px;
    transition: transform 100ms linear;
  }

  &:hover svg {
    fill: #3f51b5;
    transform: scale(1.3);
    transition: transform 100ms linear;
  }
`;
