import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardModel } from '../../model/cards';

const Card: FunctionComponent<CardModel> = (model) => {
  return (
    <div>
      <h1>{model.title}</h1>
      <h2>{model.subtitle}</h2>
      <FontAwesomeIcon icon={model.icon} />
    </div>
  )
}

export default Card;
