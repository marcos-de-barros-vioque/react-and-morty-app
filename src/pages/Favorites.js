import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react";

export default function Favorites({ favorite }) {
    
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);

    useEffect(() => {
        if (favorite.length === 0) {
            setFavoriteCharacters([]);
        } else {
            fetch(`https://rickandmortyapi.com/api/character/[${favorite.join()}]`)
              .then((response) => response.json())
              .then((favoriteCharacters) => setFavoriteCharacters(favoriteCharacters));
        }
    }, [favorite]);
    
    return (
        <CharacterContainer>
            {favoriteCharacters.map((favoriteCharacter) => { 
                return (
                    <section key={favoriteCharacter.id}>
                         <img src={favoriteCharacter.image} alt={favoriteCharacter.name} />
                         <h2>{favoriteCharacter.name}</h2>
                    </section>
                )
            })}
        </CharacterContainer>
    );
}

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;

  section {
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  img {
    border-radius: 20%;
  }

  button {
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`
