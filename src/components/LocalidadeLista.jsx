import React from 'react';
import { Card } from 'primereact/card';

function LocalidadeLista({ localidades }) {
  if (localidades.length === 0) return null;

  return (
    <div className="my-4">
      <h2>Localidades Encontradas</h2>
      {localidades.map((l, i) => (
        <Card key={i} title={l.logradouro || 'Sem logradouro'} className="my-2">
          <p><strong>CEP:</strong> {l.cep}</p>
          <p><strong>Cidade:</strong> {l.localidade}</p>
          <p><strong>Estado:</strong> {l.uf}</p>
        </Card>
      ))}
    </div>
  );
}

export default LocalidadeLista;
