import styled from "styled-components";

export const NavigationContainer = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 40%;
    display: flex;
    justify-content: space-between;
    
    li a {
      color: ${props => props.theme.colors.white};
    }
  }
`;