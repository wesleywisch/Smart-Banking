import styled from "styled-components";

export const CardSectionContainer = styled.section`
  padding: 8rem 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CardLeft = styled.div`
  h2.secondary-heading {
    font-size: 3rem;
    color: ${props => props.theme.colors.purplePrimary};
  }
  
  p {
    color: ${props => props.theme.colors.lavenderSecondary};
    padding: 1rem 0;
    line-height: 1.9rem;
  }
`;

export const CardRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;