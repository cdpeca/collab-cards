import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: bolder;
  font-size: ${({number}) => number ? '10em' : '4em' };
  padding-bottom: 40px;
  color: ${({color}) => color ? color : '#000'};
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 15%);
`;

export const Subtitle = styled.h1`
  font-size: 2em;
  padding-top: 60px;
`;

export const Image = styled.img`
    max-width: 20rem;
    transform: translate(-50%, -50%);
    top: 50%;
    position: absolute;
    left: 50%;
    box-shadow: 0 8px 50px -6px black;
    -webkit-box-shadow: 0 8px 25px -6px black;
`;
