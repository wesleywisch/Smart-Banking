import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 3rem 4rem;
  border-radius: 2.5rem;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

  .card-title {
    font-size: 2.5rem;
    color: #000;
    text-align: center;
    padding: 1.5rem 0;
    
    span {
      font-size: 1.5rem;
      color: red;
    }
  }

  .button-con {
    text-align: center;
    padding: 1.5rem 0;

    button {
      border: 2px solid #16194f;
      padding: .8rem 1.8rem;
      background: transparent;
      border-radius: 1.3rem;
      font-size: inherit;
      color: #16194f;
    }
  }

  .card-image-con {
    display: flex;
    justify-content: center;

    img {
      width: 70%;
    }
  }

  .plan-con {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;

    img {
      padding: 0 .3rem;
    }
  }

  .text-check {
    display: flex;
    align-items: center;
    padding: .4rem 0;

    img {
      width: 1.5rem;
      padding-right: .3rem;
    }

    &:nth-child(6) {
      color: #B7B7B7;
    }

    &:nth-child(7) {
      color: #B7B7B7;
    }

    &:nth-child(8) {
      color: #B7B7B7;
    }
  } 
`;
