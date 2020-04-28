import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardModel } from '../../model/cards';

import { Title, Subtitle } from './styles';
import { PaletteModel } from '../../model/palettes';

type CardProps = {
  model: CardModel,
  palette?: PaletteModel,
};

const Card = ({model, palette}: CardProps) => {

  return (
    <div>
      <Title color={palette?.title}>{model.title}</Title>
      <FontAwesomeIcon icon={model.icon} size="8x" color={palette?.icon}/>
      <br />
      &nbsp;
      <br />
      <Subtitle color={palette?.subtitle}>{model.subtitle}</Subtitle>
    </div>
  )
}

export default Card;
