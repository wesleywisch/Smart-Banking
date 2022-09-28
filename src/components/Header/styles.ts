import styled from "styled-components";

import bg from '../../assets/bg.svg';

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
`;

export const HeaderContent = styled.div`
  padding: 0 18rem;

  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }

  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }

  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }
`;

export const HeaderSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
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

      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }

    p.subtitle {
      color: ${props => props.theme.colors.white};
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }
`;

export const RightContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .phone {
    width: 80%;
  }

  .ring1 {
    position: absolute;
    bottom: 10%;
    right: 0;
    left: auto;

    animation: move2 10s infinite;
    transition: all .4s ease-in-out;
  }

  .message1 {
    position: absolute;
    top: 0;
    right: 0;
    left: auto;
    
    animation: move 5s infinite;
    transition: all .4s ease-in-out;
  }

  .message2 {
    position: absolute;
    bottom: 15%;
    left: -6%;

    animation: move 8s infinite;
    transition: all .4s ease-in-out;
  }

  @keyframes move {
    0% {
      transform: translateY(0) rotate(0) scale(1) translateX(0);
    }
    50% {
      transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
    }
    100% {
      transform: translateY(0) rotate(0) scale(1) translateX(0);
    }
  }

  @keyframes move2 {
    0% {
      transform: translateY(0) rotate(0) scale(1) translateX(0);
    }
    50% {
      transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
    }
    100% {
      transform: translateY(0) rotate(0) scale(1) translateX(0);
    }
  }
`;