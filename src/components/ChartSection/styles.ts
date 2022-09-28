import styled from "styled-components";

export const ChartSectionContainer = styled.section`
  padding: 8rem 0;

  .chart-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 1347px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const ChartLeft = styled.div`
  width: 80%;

  .stats {
    img {
      box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
      border-radius: 3.875rem;
      width: 100%;
    }

    .stats-money {
      display: flex;
      padding-bottom: 1.3rem;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 1347px) {
    width: 100%;
  }
`;

export const ChartRight = styled.div`
  padding-left: 2rem;

  h2.secondary-heading {
    font-size: 3rem;
    color: ${props => props.theme.colors.purplePrimary};
  } 

  p {
    color: ${props => props.theme.colors.lavenderSecondary};
    padding: 1rem 0;
    line-height: 1.9rem;
    padding: 1.3rem 0;
  }
`;