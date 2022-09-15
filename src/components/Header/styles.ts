import styled from "styled-components";

import bg from '../../assets/bg.svg';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
`;

export const HeaderContent = styled.div`
  padding: 0 10rem;
`;

export const HeaderSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  padding-right: 3rem;

  .left-text-container {
    h1 {
      font-size: 4rem;
      font-weight: 600;
      color: ${props => props.theme.colors.white};
    }

    p.subtitle {
      color: ${props => props.theme.colors.white};
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }
`;