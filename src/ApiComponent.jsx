import React, { Component } from 'react';
import axios from 'axios';

class ApiComponent extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/')
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Dados da API</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ApiComponent;