import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.isTextFirst ? '40% 60%' : '60% 40%'};

  height: 54rem;
`;
