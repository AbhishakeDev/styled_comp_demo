import styled, { css, keyframes } from 'styled-components';
import React from 'react';

export const Wrapper = styled.section`
  padding: 30px;
  margin-top: 2rem;
  background-color: paleturquoise;
`;

export const FadeIn = keyframes`

0%{
    opacity:0;
}
100%{
    opacity:1;
}
`;
