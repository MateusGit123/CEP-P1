import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Busca() {
  const [cep, setCep] = useState('');

  const handleClick = () => {
    alert(`CEP digitado: ${cep}`);
  };

  return (
    <div className="my-4">
      <span className="p-input-icon-left">
        <i className="pi pi-map-marker" />
        <InputText
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
        />
      </span>
      <Button label="Buscar" icon="pi pi-search" onClick={handleClick} className="ml-2" />
    </div>
  );
}

export default Busca;
