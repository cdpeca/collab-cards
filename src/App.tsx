import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';
import Card from './components/Card';
import Arrow from './components/Arrow';
import { Cards } from './model/cards';

function App() {
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
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Arrow direction="left" onClick={moveLeft}/>
          </Col>
          
          <Col>
            <Card 
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon} />
          </Col>
          
          <Col>
            <Arrow direction="right" onClick={moveRight}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
