import React, { useState } from 'react';

import Card from '../../components/Card';
import Arrow from '../../components/Arrow';
import { Cards } from '../../model/cards';

import { Container, Row, Col } from './styles';

function MainView() {
  const [current, setCurrent] = useState(0);

  let card = Cards[current];
  
  const max = Cards.length - 1;

  const moveLeft = () => {
    const next = current - 1;
    const value = next < 0 ? max : next;

    setCurrent(value);
  }

  const moveRight = () => {
    const next = current + 1;
    const value = next > max ? 0 : next;
    
    setCurrent(value);
  }

  return (
    <Container fluid class="w-100">
      <Row>
        <Col>
          <Arrow direction="left" onClick={moveLeft}/>
        </Col>
        
        <Col xs={6}>
          <Card 
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon}
            number={card.number} />
        </Col>
        
        <Col>
          <Arrow direction="right" onClick={moveRight}/>
        </Col>
      </Row>
    </Container>
  );
}

export default MainView;
