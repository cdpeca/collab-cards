import React from 'react';
import { CardModel } from '../../model/cards';

import { Title, Subtitle, Image } from './styles';
import { PaletteModel } from '../../model/palettes';

type CardProps = {
  model: CardModel,
  palette?: PaletteModel,
};

const OctopusCard = ({model, palette}: CardProps) => {

  return (
    <div>
      <Title color={palette?.title} number={model.number}>{model.title}</Title>
      <Image src={process.env.PUBLIC_URL + '/oct.png'} />
      <Subtitle color={palette?.subtitle}>{model.subtitle}</Subtitle>
    </div>
  )
}

export default OctopusCard;
