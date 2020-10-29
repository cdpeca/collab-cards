import React, { useState } from 'react';

import Arrow from '../../components/Arrow';
import { OctopusCards } from '../../model/cards';
import { PaletteModel, getPalette } from '../../model/palettes';

import { Container, Row, Col } from './styles';
import OctopusCard from '../../components/OctopusCard';

function OctopusView() {
  const [current, setCurrent] = useState(0);
  const [curPalette, setCurPalette] = useState<PaletteModel | undefined>(getPalette());

  let card = OctopusCards[current];
  
  const max = OctopusCards.length - 1;

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
          <OctopusCard 
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

export default OctopusView;
