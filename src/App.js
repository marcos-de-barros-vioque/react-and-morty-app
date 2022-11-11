import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import Header from './components/Header';
//import NavBar from './components/NavBar';
//import { Routes, Route } from 'react-router-dom';
//import CharacterCard from './pages/CharacterCard';
//import Home from './pages/Home';
import CharacterRandom from './pages/CharacterRandom';
import Favorites from './pages/Favorites';


function App() {
  const [apiCharacters, setApiCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setApiCharacters(data.results);
    }
    fetchData();
}, []);
  const [page, setPage] = useState("home");
  const changePage = (newPage) => {
  setPage(newPage);
};
  const [characterId, setCharacterId] = useState("");
  const showCharacter = (id) => {
  setPage("character");
  setCharacterId(id);
};
  const myCharacter = apiCharacters.find(
  (apiCharacter) => apiCharacter.id === characterId
);

  return (
    <div className="App">
      <Header />
      <main>
      <StyledCard>
         {page === "home" && apiCharacters.map((apiCharacter) => {
          return (
            <CardContainer>
              <ImageContainer src={apiCharacter.image} alt={apiCharacter.name} />
              <h2>{apiCharacter.name}</h2>
              <Button onClick={() => showCharacter(myCharacter.id)}>Learn more about {apiCharacter.name}</Button>
            </CardContainer>
        )})}
        {page === "character" && apiCharacters.map((myCharacter) => {
          return (
            <CharacterPage>
            <CardContainer>
              <ImageContainer src={myCharacter.image} alt={myCharacter.name} />
              <h2>{myCharacter.name}</h2>
              <Button>Learn more about {myCharacter.name}</Button>
            </CardContainer>
            </CharacterPage>
        )})}
       </StyledCard>
      <NavBar>
      <nav>
      <ul>
      <li><a href="/" onClick={() => changePage("home")}>
            Home
      </a></li>
      <li><a href="/favorites">Favorites</a></li>
      <li><a href="/random">Random</a></li>
      </ul>
      </nav>
      </NavBar>
      </main>
    </div>
  )
}

export default App;

const StyledCard = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`

const CardContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`

const CharacterPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.img`
  border-radius: 20%;
`

const Button = styled.button`
  border-radius: 5px;
  margin-bottom: 1rem;
`

const NavBar = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  & nav > ul {
    display: flex;
    justify-content: space-between;
  }
  & nav > ul > li {
    list-style-type: none;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
  }
    `