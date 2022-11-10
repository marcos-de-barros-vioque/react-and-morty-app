import React from 'react';
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Card() {
   const [apiData, SetApiData] = useState([]);

   useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      SetApiData(data.results);
    }
    fetchData();
}, []);

  return (
        <StyledCard>
        {apiData.map((character) => {
          return (
            <li>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <button type="button">Learn more about {character.name}</button>
            </li>
          );
        })}
        </StyledCard>
        );
  };

  const StyledCard = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  
  li {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  `