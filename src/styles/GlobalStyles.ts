import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 1.2rem 'Roboto', sans-serif;
    background-color: ${props => props.theme.colors.neutralLight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  @media (max-width: 1080px){
    html{
      font-size: 93.75%; // 15px
    }
  }
  
  @media (max-width: 720px){
    html{
      font-size: 87.5%; // 14px
    }
  }
`;