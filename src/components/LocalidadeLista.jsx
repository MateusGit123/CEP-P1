import React from 'react';
import { Card } from 'primereact/card';

function LocalidadeLista({ localidades }) {
  if (localidades.length === 0) return null;

  return (
    <div className="my-4">
      <h2>Localidades Encontradas</h2>
      {localidades.map((localidade, i) => (
        <Card key={i} title={localidade.logradouro || 'Sem logradouro'} className="my-2">
          <p><strong>CEP:</strong> {localidade.cep}</p>
          <p><strong>Cidade:</strong> {localidade.localidade}</p>
          <p><strong>Estado:</strong> {localidade.uf}</p>
        </Card>
      ))}
    </div>
  );
}

export default LocalidadeLista;
