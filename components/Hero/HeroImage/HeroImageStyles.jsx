import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: ${props => `url(/assets/${props.imgUrlDesktop})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  @media (max-width: 700px) {
    background-image: ${props =>
      props.imgUrlMobile
        ? `url(/assets/${props.imgUrlMobile})`
        : `url(/assets/${props.imgUrlDesktop})`};
  }
`;
