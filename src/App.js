import React from 'react';
import './App.css';
import Formulario from './componetes/Fornulario';
import Table from './componetes/Table';
import StarWarProvider from './swProvider';

function App() {
  return (
    <StarWarProvider>
      <Table />
      <Formulario />
    </StarWarProvider>
  );
}

export default App;
