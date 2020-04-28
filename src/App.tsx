import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';
import Card from './components/Card';
import Arrow from './components/Arrow';

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Arrow direction="left" />
          </Col>
          
          <Col>
            <Card
              title="Test"
              subtitle="Sub"
              image="Image test"
            />
          </Col>
          
          <Col>
            <Arrow direction="right" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
