import { useState } from 'react';
import './App.css';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
    createHearts();
  };

  const createHearts = () => {
    const container = document.querySelector('.love-window');
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'falling-heart';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${2 + Math.random() * 3}s`;
      container.appendChild(heart);

      setTimeout(() => {
        heart.remove(); // Remueve el corazón después de la animación
      }, 5000);
    }
  };

  return (
    <div className="love-window">
      <div className="heart-container">
        <div className="heart"></div>
      </div>
      <h1 className="title">BUENAS MI AMORCITO</h1>
      <p className="subtitle">
        TE QUIEROOOOO MUCHOOO 💖
      </p>
      <button className="love-button" onClick={handleClick}>
        {showMessage ? 'MUACK' : 'Tocame🫣'}
      </button>
      {showMessage && (
        <div className="message">
          <p>💌 ¡Te amo! Eres mi razón para sonreír cada día. 💞</p>
        </div>
      )}
    </div>
  );
}

export default App;
