import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background-color: ${props => props.theme.colors.accentPink};
  padding: .7rem 2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 1.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
`;

export const ButtonSecondary = styled.button`
  background-color: ${props => props.theme.colors.darkPrimary};
  padding: .7rem 2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 1.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.colors.white};

  display:flex;
  align-items: center;
  
  img {
    padding-left: .9rem
  }
`;