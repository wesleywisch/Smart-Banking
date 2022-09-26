import styled from "styled-components";

export const MessagingContainer = styled.section`
  padding: 8rem 0;

  .message-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .left-items {
      position: relative;
      padding-right: 2rem;

      h2.secondary-heading {
        font-size: 3rem;
        color: ${props => props.theme.colors.purplePrimary};
      }

      p {
        color: ${props => props.theme.colors.lavenderSecondary};
        padding: 1rem 0;
        line-height: 1.9rem;
        padding: 1rem 0;
      }

      .images-con {
        display: flex;
        align-items: center;

        .image-2, .image-3, .image-4, .image-5 {
          margin-left: -1.45rem;
        }
      }

      .bgCircle {
        position: absolute;
        top: -7%;
        left: -10%;
        z-index: -1;
      }
    }

    .right-items {
      position: relative;

      img {
        padding-left: 2rem;
      }

      .bgCircle {
        position: absolute;
        bottom: -7%;
        right: 0;
        z-index: -1;
      }
    }
  }
`;