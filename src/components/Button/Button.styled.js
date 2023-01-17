import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto;
  font-size: 20px;
  font-weight: 700;
  font-family: inherit;
  line-height: 20px;
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #3f51b5;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #303f9f;
    transform: scale(1.1);
  }
`;
