import './App.css';
import React from 'react';

function App() {
  return (
    <body className="App">
      <header>
         <h1>Rick and Morty</h1>
      </header>
      <main>
         <section className="App-section">
            <h2>Morty Smith</h2>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty Smith" />
            <button type="button">Learn more about Morty Smith</button>
         </section>
         <section className="App-section">
            <h2>Rick Sanchez</h2>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Rick Sanchez" />
            <button type="button">Learn more about Rick Sanchez</button>
         </section>
      </main>
      <footer>
        <navbar className="Navbar">
           <ul>
            <li>
              <a href="#home">Home
              </a>
            </li>
            <li>
              <a href="#favorites">Favorites
              </a>
            </li>
            <li>
              <a href="#random">Random
              </a>
            </li>
            <li>
              <a href="#other">Other
              </a>
            </li>
          </ul>
        </navbar>
      </footer>
    </body>
  );
}

export default App;
