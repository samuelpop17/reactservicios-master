import React, { Component } from "react";
import Global from '../global';
import axios from 'axios';

export default class BuscarCoche extends Component {
  url = Global.urlCoches;
  cajaId = React.createRef();

  state = {
    customers: [],
    marcaBuscada: "",
    cochesFiltrados: []
  };

  componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers = async () => {
    try {
      const response = await axios.get(this.url+"/webresources/coches");
      this.setState({ customers: response.data });
    } catch (error) {
      console.error("Error loading customers", error);
    }
  };

  buscarCustomer = (e) => {
    e.preventDefault();
    const marcaBuscada = this.cajaId.current.value.toLowerCase();
    const cochesFiltrados = this.state.customers.filter(
      (coche) => coche.marca.toLowerCase() === marcaBuscada
    );

    this.setState({ marcaBuscada, cochesFiltrados });
  };

  render() {
    const { marcaBuscada, cochesFiltrados, customers } = this.state;

    return (
      <div>
        <h1>Servicio Customers</h1>
        <form onSubmit={this.buscarCustomer}>
          <label>Marca: </label>
          <input type="text" ref={this.cajaId} />
          <button>Buscar Coches</button>
        </form>
        <table style={{ border: "2px" }}>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {(marcaBuscada ? cochesFiltrados : customers).map((coche, index) => (
              <tr key={index}>
                <td>{coche.marca}</td>
                <td>{coche.modelo}</td>
                <td>{coche.conductor}</td>
                <td>
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src={coche.imagen}
                    alt={coche.conductor}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
