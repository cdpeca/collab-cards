import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

type CardProps = {
  title: string,
  subtitle?: string,
  image: string,
}

const Card = ({title, subtitle, image}: CardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <FontAwesomeIcon icon={faCoffee} />
      <h3>{image}</h3>
    </div>
  )
}

export default Card;
