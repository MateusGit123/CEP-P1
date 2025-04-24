import React from 'react';
import { Card } from 'primereact/card';

const localidades = [
  {
    cep: '01001-000',
    logradouro: 'Praça da Sé',
    localidade: 'São Paulo',
    uf: 'SP',
  },
  {
    cep: '20040-020',
    logradouro: 'Rua da Assembleia',
    localidade: 'Rio de Janeiro',
    uf: 'RJ',
  },
  {
    cep: '30140-000',
    logradouro: 'Avenida do Contorno',
    localidade: 'Belo Horizonte',
    uf: 'MG',
  },
];

function LocalidadeLista() {
  return (
    <div className="my-4">
      <h2>Localidades Fictícias</h2>
      {localidades.map((l, i) => (
        <Card key={i} title={l.logradouro} className="my-2">
          <p><strong>CEP:</strong> {l.cep}</p>
          <p><strong>Cidade:</strong> {l.localidade}</p>
          <p><strong>Estado:</strong> {l.uf}</p>
        </Card>
      ))}
    </div>
  );
}

export default LocalidadeLista;
