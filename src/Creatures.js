import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';

const Creatures = ({ data }) => {
  const displayCreatures = data.map(creature => {
    const { id, image, type } = creature;
    return (
    <Link to={`/${type}/${id}`} key={ id }>
    <img src={image} alt="" className="app-img" />
    </Link>
    )
  });

  return (
    <>
    <h1>
      {displayCreatures}
    </h1>
    </>
  )
}

export default Creatures;