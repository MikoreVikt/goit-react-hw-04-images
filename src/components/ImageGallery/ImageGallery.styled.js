import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  max-width: calc(100vw - 100px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  padding: 0;
  list-style: none;
  margin: 40px auto;
`;
