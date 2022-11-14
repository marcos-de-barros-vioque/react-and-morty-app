import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; //react-router hook
import styled from 'styled-components';

export default function CharacterCard({ favorite, handleToggleFavorite = () => {} }) {

  let { characterId } = useParams()
  
  const [moreDetails, setMoreDetails] = useState(false);
  const handleMoreDetails = () => {
    setMoreDetails(!moreDetails);
  }

  const [character, setCharacter] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/" + characterId
      )
      const data = await response.json()
      setCharacter(data)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
        <CharacterContainer>
          <FavoriteButton isFavorite={favorite} onClick={() => 
            handleToggleFavorite(characterId)}>Add to favorites</FavoriteButton>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <button onClick={handleMoreDetails}>Show more details</button>
          <CharacterDetails moreDetails={moreDetails}>
            <ul>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
              <li>Status: {character.status}</li>
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