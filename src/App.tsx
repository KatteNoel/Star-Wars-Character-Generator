import React from 'react';

import { Container } from 'react-bootstrap';

import { Generator } from './components/generator';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <h1 className="white centerText margin">Random Star Wars Character Generator</h1>
      <Generator />
    </Container>
  );
}

export default App;
