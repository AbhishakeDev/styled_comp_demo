import React from 'react';
import styled, { css } from 'styled-components';
import { Wrapper } from './styled/index';
import { FadeIn } from './styled/index';
//import {Link} from 'react-router-dom;

//then how would you style this :
//const StyledLink = styled(Link)``;

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.light};
  outline: ${({ outline }) => outline || '10px solid black'};
  border: none;
  background-color: ${(props) => props.theme.colors.dark};
  margin-bottom: 1rem;
  animation: 2s ${FadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    color: #000;
    background-color: #fff;
  }
  //   some child inside the Button with this "someClass"

  //   these both are same way, u can use anyway
  .someClass {
    color: blue;
  }
  & .someClass {
    color: blue;
  }
`;

const OuterWrapper = styled.div`
  width: 100%;
  background-color: purple;
  margin-top: 2rem;
  padding: 3rem;

  &:hover ${StyledButton} {
    color: yellow;
  }
  @media ${({ theme }) => theme.mediaQueries['below-768']} {
    background-color: red;
  }
`;

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;

const Button = ({ children, primary, outline }) => {
  return (
    <OuterWrapper>
      <StyledButton outline={outline} primary={primary}>
        {children}
      </StyledButton>
      {/* <SuperButton outline={outline}>Hello</SuperButton> */}
    </OuterWrapper>
  );
};

export default Button;
