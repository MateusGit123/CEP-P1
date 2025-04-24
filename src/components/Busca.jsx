import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

class Busca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
    };
  }

  buscarCep = async () => {
    const cepLimpo = this.state.cep.replace(/\D/g, '');

    if (!cepLimpo) {
      alert('Por favor, digite um CEP.');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      if (response.data.erro || !response.data.cep) {
        alert('CEP não encontrado.');
      } else {
        this.props.aoBuscar(response.data); // Envia os dados para o App
        this.setState({ cep: '' }); // Limpa o campo
      }
    } catch (error) {
      alert('Erro ao buscar o CEP.');
      console.error('Erro:', error);
    }
  };

  render() {
    return (
      <div className="my-4">
        <span className="p-input-icon-left">
          <i className="pi pi-map-marker" />
          <InputText
            value={this.state.cep}
            onChange={(e) => this.setState({ cep: e.target.value })}
            placeholder="Digite o CEP"
          />
        </span>
        <Button
          label="Buscar"
          icon="pi pi-search"
          onClick={this.buscarCep}
          className="ml-2"
        />
      </div>
    );
  }
}

export default Busca;
