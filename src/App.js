import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
