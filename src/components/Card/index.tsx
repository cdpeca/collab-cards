import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardModel } from '../../model/cards';

import { Title, Subtitle } from './styles';

const Card: FunctionComponent<CardModel> = (model) => {
  return (
    <div>
      <Title>{model.title}</Title>
      <FontAwesomeIcon icon={model.icon} size="8x"/>
      <br />
      &nbsp;
      <br />
      <Subtitle>{model.subtitle}</Subtitle>
    </div>
  )
}

export default Card;
