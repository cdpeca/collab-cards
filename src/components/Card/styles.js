import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: bolder;
  font-size: ${({number}) => number ? '10em' : '4em' };
  padding-bottom: 40px;
  color: ${({color}) => color ? color : '#000'}
`;

export const Subtitle = styled.h1`
  font-size: 2em;
  padding-top: 60px;
`;
