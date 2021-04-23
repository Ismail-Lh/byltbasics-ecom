import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.isTextFirst ? '40% 60%' : '60% 40%'};
  height: 54rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 60rem 50rem;
    height: auto;

    div:first-of-type {
      order: 2;
    }
  }

  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 50rem);
  }

  @media (max-width: 425px) {
    grid-template-rows: 25rem 50rem;
  }

  @media (max-width: 320px) {
    grid-template-rows: 20rem 50rem;
  }
`;
