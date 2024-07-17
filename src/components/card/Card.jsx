import React, { useState } from 'react';
import './Card.css';

export const Card = ({name,image}) => {

  const [turned, setTurned] = useState(false);

  return (
    <div>
      <img src={image} className={turned ? "card turned" : "card"}  onClick={() => setTurned(!turned)}/>
      <h2>{name}</h2>
    </div>
  )
}
