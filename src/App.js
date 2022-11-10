import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";

function App() {
  return (
    <body>
      <Header />
      <main>
         <Card />
      </main>
      <footer>
        <NavBar />
      </footer>
    </body>
  );
}

export default App;
