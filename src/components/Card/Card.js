import React from 'react';
import "./Card.css";

export default function Card() {
    return (
        <section className="Card">
        <h2>Morty Smith</h2>
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty Smith" />
        <button type="button">Learn more about Morty Smith</button>
        </section>
        );
  }