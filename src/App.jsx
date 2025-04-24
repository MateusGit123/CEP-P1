import React, { useState } from 'react';
import Busca from './components/Busca';
import LocalidadeLista from './components/LocalidadeLista';

function App() {
  const [localidades, setLocalidades] = useState([]);

  const adicionarLocalidade = (nova) => {
    setLocalidades((atual) => [nova, ...atual]);
  };

  return (
    <div className="p-4">
      <h1>Hello, P1</h1>
      <Busca aoBuscar={adicionarLocalidade} />
      <LocalidadeLista localidades={localidades} />
    </div>
  );
}

export default App;
