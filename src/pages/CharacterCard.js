import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function CharacterCard() {
    const [apiCharacter, setApiCharacter] = useState({})
    const { id } = useParams()
    useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character' + id);
      const data = await response.json();
      setApiCharacter(data.results);
    }
    fetchData();
}, [])

return (
        <StyledCharacterCard>
          <li>
          <img src={apiCharacter.image} alt="Portrait of Character" />
          <h2>{apiCharacter.name}</h2>
          <button type="button">Show more details</button>
          </li>
        </StyledCharacterCard>
)
}

const StyledCharacterCard = styled.ul`
  margin: 0;
  `