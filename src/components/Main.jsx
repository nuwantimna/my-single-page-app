// src/components/Main.jsx
import React from 'react';
import logo from '../logo.svg'; // Adjust the path if your logo is in a different folder

function Main() {
  const logoStyle = {
    animation: 'spin 2s linear infinite',
    width: '100px',
    height: '100px',
  };

  return (
    <main>
      <img src={logo} alt="React Logo" style={logoStyle} />
      <p>Nuwan - DevOps Project 01</p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </main>
  );
}

export default Main;
