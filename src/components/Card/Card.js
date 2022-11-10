import React from 'react';
import styled from "styled.components";

export default function Card() {
    return (
        <StyledCard>
        <h2>Morty Smith</h2>
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty Smith" />
        <button type="button">Learn more about Morty Smith</button>
        </StyledCard>
        );
  }

  const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`