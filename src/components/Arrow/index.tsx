import React, { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { PaletteModel } from '../../model/palettes';

type ArrowProps = {
  direction: string,
  onClick?: any,
  palette?: PaletteModel,
}

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';
const LEFT = 'left';

const Arrow = ({ direction = 'up', palette, onClick}: ArrowProps) => {
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
      <FontAwesomeIcon icon={getIcon()} size="2x" color={palette?.arrow} />
    </Button>
  )
}

export default Arrow;
