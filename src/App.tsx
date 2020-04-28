import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Arrow from './components/Arrow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Arrow direction="up" />
        <Card
          title="Test"
          subtitle="Sub"
          image="Image test"
        />
      </header>
    </div>
  );
}

export default App;
