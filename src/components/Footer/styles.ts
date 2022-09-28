import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 8rem 18rem;
  background-color: #DCE2F0;

  .footer-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .logo-con {
      display: flex;
      align-items: center;

      .logo-items {
        img {
          width: 5.625rem;
        }

        p {
          color: ${props => props.theme.colors.lavenderSecondary};
          line-height: 1.9rem;
        }
      }
    }

    .button-nav {
      display: flex;
      justify-content: space-between;

      li {
        padding: 2rem 0;
        color: #16194F;
      }
    }
  }
`;