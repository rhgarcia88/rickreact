import React, { useEffect, useState } from 'react'
import { Card } from '../card/Card';
import './Characters.css';

export const Characters = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
  
        setCharacters(data.results);
      } catch (error) {
    
      }
    };

    // Llamar a la función fetchData
    fetchData();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="cards-contain">
        {characters.map(character => (
          <Card name={character.name} image={character.image} key={character.id}> </Card>
        ))}
      </div>
    </div>
  )
}

export default Characters;