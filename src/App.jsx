import React, { Component } from 'react';
import Busca from './components/Busca';
import LocalidadeLista from './components/LocalidadeLista';
import GraficoUF from './components/GraficoUF';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localidades: [],  // Lista com as localidades pesquisadas
      estadosPesquisados: {},  // Contagem dos estados pesquisados
    };
  }

  adicionarLocalidade = (novaLocalidade) => {
    this.setState((prevState) => {
      // Contabilizar o estado pesquisado
      const estado = novaLocalidade.uf;
      const novosEstados = { ...prevState.estadosPesquisados };

      novosEstados[estado] = (novosEstados[estado] || 0) + 1;

      return {
        localidades: [novaLocalidade, ...prevState.localidades],
        estadosPesquisados: novosEstados,
      };
    });
  };

  render() {
    return (
      <div className="p-4">
        <h1>Pesquisa de CEP</h1>
        <Busca aoBuscar={this.adicionarLocalidade} />
        <div className="flex">
          <div style={{ width: '50%' }}>
            <LocalidadeLista localidades={this.state.localidades} />
          </div>
          <div style={{ width: '50%' }}>
            <GraficoUF estadosPesquisados={this.state.estadosPesquisados} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
