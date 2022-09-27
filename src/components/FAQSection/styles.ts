import styled from "styled-components";

export const FAQSectionContainer = styled.section`
  padding: 8rem 0;

  .small-heading {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.purplePrimary};
    text-align: center;

    span {
      color: ${props => props.theme.colors.accentPink}
    }
  }

  p {
    color: ${props => props.theme.colors.lavenderSecondary};
    padding: 1rem 0;
    line-height: 1.9rem;
    padding: 1rem 0;
  }

  .c-para {
    width: 60%;
    text-align: center;
    margin: 0 auto;
  }

  .lines {
    width: 100%;
    position: absolute;
    left: 0;
    top: 350%;
    z-index: -1;

    img {
      width: 100%;
    }
  }

  .questions-con {
    padding-top: 4rem;
  }
`;