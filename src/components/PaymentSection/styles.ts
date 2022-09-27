import styled from "styled-components";

export const PaymentSectionContainer = styled.section`
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
    text-align: center;
  }
`;

export const CardCon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding-top: 7.5rem;
`;