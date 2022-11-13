import React, { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

export default function CharacterCard({ favorite, handleFavorite, apiCharacters }) {

  let { characterId } = useParams()

  const character = apiCharacters.find(({ id }) => id === Number(characterId));
  
  const [moreDetails, setMoreDetails] = useState(false);
  const handleMoreDetails = () => {
    setMoreDetails(!moreDetails);
  }

  return (
        <CharacterContainer>
          <FavoriteButton favorite={favorite} onClick={handleFavorite}>Add to favorites</FavoriteButton>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <button onClick={handleMoreDetails}>Show more details</button>
          <CharacterDetails moreDetails={moreDetails}>
            <ul>
              <li>species: {character.species}</li>
              <li>gender: {character.gender}</li>
              <li>status: {character.status}</li>
            </ul>
           </CharacterDetails>
        </CharacterContainer>
)
}

const CharacterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 150px;
`

const CharacterDetails = styled.div`
  ${(props) => !props.moreDetails && "display: none"};

  ul {
    list-style: none;
    margin: 0;
    padding: 0px;
  }
`

const FavoriteButton = styled.button`
  ${(props) => props.isFavorite && "background-color: blue"};
`;