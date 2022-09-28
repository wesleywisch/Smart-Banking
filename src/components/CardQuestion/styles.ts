import styled from "styled-components";

export const CardQuestionContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin: 1rem 0;
  padding: 1.4rem 1rem;
  border-radius: 2.4rem;
  transition: all .4s ease-in-out;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

  h4 {
    color: #16194F;
    font-size: 1.3rem;
    transition: all .4s ease-in-out;
  }

  p {
    transition: all .4s ease-in-out;
    color: ${props => props.theme.colors.lavenderSecondary};
    line-height: 1.9rem;
  }

  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .4s ease-in-out;

    button {
      background: transparent;
      outline: none;
      border: none;
    }
  }
`;