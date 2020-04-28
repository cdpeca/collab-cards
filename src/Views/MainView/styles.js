import styled from 'styled-components';
import * as bootstrap from 'react-bootstrap';

export const Container = styled(bootstrap.Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: ${({color}) => color ? color : '#ccc' };
`;

export const Row = styled(bootstrap.Row)`
  height: 100vh;
`;

export const Col = styled(bootstrap.Col)`
  align-self: center;
  text-align: center;
`;
