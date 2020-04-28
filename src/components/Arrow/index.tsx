import React, { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

type ArrowProps = {
  direction: string,
  onClick?: any
}

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';
const LEFT = 'left';

const Arrow: FunctionComponent<ArrowProps> = ({ direction = 'up', onClick}) => {
  const getIcon = () => {
    switch (direction) {
      case UP: return faArrowUp;
      case DOWN: return faArrowDown;
      case RIGHT: return faArrowRight;
      case LEFT: return faArrowLeft;
      default: return faArrowUp;
    }
  }

  return (
    <Button variant="link" onClick={onClick}>
      <FontAwesomeIcon icon={getIcon()} size="2x" />
    </Button>
  )
}

export default Arrow;
