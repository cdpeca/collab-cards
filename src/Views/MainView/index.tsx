import React, { useState } from 'react';

import Card from '../../components/Card';
import Arrow from '../../components/Arrow';
import { Cards } from '../../model/cards';
import { PaletteModel, getPalette } from '../../model/palettes';

import { Container, Row, Col } from './styles';

function MainView() {
  const [current, setCurrent] = useState(0);
  const [curPalette, setCurPalette] = useState<PaletteModel | undefined>(getPalette());

  let card = Cards[current];
  
  const max = Cards.length - 1;

  const moveLeft = () => {
    const next = current - 1;
    const value = next < 0 ? max : next;

    setCurPalette(getPalette());
    setCurrent(value);
  }

  const moveRight = () => {
    const next = current + 1;
    const value = next > max ? 0 : next;
  
    setCurrent(value);
    setCurPalette(getPalette());
  }

  return (
    <Container fluid color={curPalette?.background}>
      <Row>
        <Col>
          <Arrow palette={curPalette} direction="left" onClick={moveLeft}/>
        </Col>
        
        <Col xs={6}>
          <Card 
            palette={curPalette}
            model={card}
          />
        </Col>
        
        <Col>
          <Arrow palette={curPalette} direction="right" onClick={moveRight}/>
        </Col>
      </Row>
    </Container>
  );
}

export default MainView;
