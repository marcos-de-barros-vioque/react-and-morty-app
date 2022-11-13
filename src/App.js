import React from 'react';
import {Routes, Route } from "react-router-dom";
import './App.css';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import Header from './components/Header';
import NavBar from './components/NavBar';
import CharacterCard from './pages/CharacterCard';
import Home from './pages/Home';
//import CharacterRandom from './pages/CharacterRandom';
//import Favorites from './pages/Favorites';


export default function App() {
  const [apiCharacters, setApiCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setApiCharacters(data.results);
    }
    fetchData();
}, []);

  return (
    <AppContainer>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home apiCharacters={apiCharacters} />} />
        <Route path="/favorites" />
        <Route path="/random" />
        <Route path="/other" />
        <Route path={"/character/:characterId"} element={<CharacterCard apiCharacters={apiCharacters} />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`