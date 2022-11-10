import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";

function App() {
  return (
    <body className="App">
      <Header />
      <main>
         <Card />
         <Card />
      </main>
      <footer>
        <NavBar />
      </footer>
    </body>
  );
}

export default App;