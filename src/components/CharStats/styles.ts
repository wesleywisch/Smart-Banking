import styled from "styled-components";

export const ChartStatsContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 3.125rem;
  border: 1px solid ${props => props.theme.colors.borderColor};
  height: 10rem;
  padding: 2rem;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  
  h5 {
    font-size: 3rem;
    color: ${props => props.theme.colors.purplePrimary};
  }

  p {
    color: black;
  }
`;