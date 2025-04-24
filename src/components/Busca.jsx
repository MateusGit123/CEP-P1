import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

function Busca() {
  const [cep, setCep] = useState('');

  const buscarCep = async () => {
    const cepLimpo = cep.replace(/\D/g, '');

    if (!cepLimpo) {
      alert('Por favor, digite um CEP.');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);

      if (response.data.erro) {
        alert('CEP não encontrado.');
      } else {
        console.log('Dados recebidos da API:', response.data);
      }
    } catch (error) {
      alert('Erro ao buscar o CEP. Verifique sua conexão ou tente novamente.');
      console.error('Erro na requisição:', error);
    }
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
      <Button
        label="Buscar"
        icon="pi pi-search"
        onClick={buscarCep}
        className="ml-2"
      />
    </div>
  );
}

export default Busca;
