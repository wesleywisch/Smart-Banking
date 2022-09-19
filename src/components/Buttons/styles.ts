import styled, { css } from "styled-components";

const ButtonDefaultCss = css`
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: inherit;
  border-radius: 1.25rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ButtonPrimary = styled.button`
  ${ButtonDefaultCss}
  background-color: ${props => props.theme.colors.accentPink};
  color: ${props => props.theme.colors.white};
`;

export const ButtonSecondary = styled.button`
  ${ButtonDefaultCss}
  background-color: ${props => props.theme.colors.darkPrimary};
  color: ${props => props.theme.colors.white};

  display:flex;
  align-items: center;
  
  img {
    padding-left: .9rem
  }
`;

export const ButtonAnimated = styled.button`
  ${ButtonDefaultCss}
  background-color: ${props => props.theme.colors.darkPrimary};
  color: ${props => props.theme.colors.white};

  display:flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  transition: all .4s ease-in-out;

  img {
    padding-left: .9rem;
    transition: all .4s ease-in-out;
  }

  .blob1, .blob2 {
    transition: all .4s ease-in-out;
    position: absolute;
    pointer-events: none;
  }

  .blob1 {
    top: 0;
    right: 0;
  }

  .blob2 {
    bottom: 0;
    left: 0;
  }

  &:hover {
    transition: all .4s ease-in-out;
    color: ${props => props.theme.colors.accentPink};

    .blob1 {
      transition: all .4s ease-in-out;
      transform: translateX(-90px);
    }

    .blob2 {
      transition: all .4s ease-in-out;
      transform: translateX(90px);
    }

    img {
      padding-left: 1.4rem;
    }
  }
`;