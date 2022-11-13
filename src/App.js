import React from 'react';
import {Routes, Route } from "react-router-dom";
import './App.css';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import Header from './components/Header';
import NavBar from './components/NavBar';
import CharacterCard from './pages/CharacterCard';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
//import CharacterRandom from './pages/CharacterRandom';


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

  const [favorite, setFavorite] = useState(() => JSON.parse(localStorage.getItem("favorites") || "[]"));

  function handleFavorite(id) {
    if (favorite.includes(id)) {
      const addFavorite = favorite.filter((favID) => favID !== id);
      setFavorite(addFavorite);
    } else {
      setFavorite([...favorite, id]);
    }
  }

  useEffect(() => {localStorage.setItem("favorites", JSON.stringify(favorite))}, [favorite]);

  return (
    <AppContainer>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home apiCharacters={apiCharacters} />} />
        <Route path="/favorites" element={<Favorites handleFavorite={handleFavorite} favorite={favorite} />} />
        <Route path="/random" />
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