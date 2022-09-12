import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import Wrongletters from './components/Wrongletters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';


const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];



function App() {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <>
    <Header />
    <div className="game-container">
      <Figure />
      <Wrongletters />
      <Word />
    </div>
    </>
  );
}

export default App;
