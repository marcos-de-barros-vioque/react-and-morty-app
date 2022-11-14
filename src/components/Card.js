import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Card({ apiCharacters }) {
  return (
  <CardContainer>
      {apiCharacters.map((apiCharacter) => {
        return (
          <section key={apiCharacter.id}>
             <img src={apiCharacter.image} alt={apiCharacter.name} />
             <h2>{apiCharacter.name}</h2>
             <Link to={{ pathname: "/character/" + apiCharacter.id, }}><button> More details about {apiCharacter.name}</button></Link>
          </section>
        );
      })}
  </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;

  section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  }

  img {
    border-radius: 10%;
  }

  button {
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  `