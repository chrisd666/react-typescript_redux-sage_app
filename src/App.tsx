import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import User from './components/User';

function changeUsername(newName?: string) {}

function App() {
  return (
    <div className="App container">
      <Main />
      <User username="Chris" />
    </div>
  );
}

export default App;
