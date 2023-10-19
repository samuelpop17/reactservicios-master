import React, { Component } from "react";
import Global from "../global";
import axios from "axios";
export default class DepartamentosEmpleados extends Component {
  selectDepartamento = React.createRef();

  buscarEmpleados = (e) => {
    e.preventDefault();
    var idDepartamento = this.selectDepartamento.current.value;
    var request = "api/empleados/empleadosdepartamento/" + idDepartamento;
    var url=Global.urlApieEmpleados+request;
console.log(url)
    axios.get(url).then(response=>{
        this.setState({
            empleados:response.data,
            statusEmp:true
        })
    })
};

  loadDepartamentos = () => {
    var request = "/api/departamentos";
    var url = Global.urlApieDepartamentos + request;

    axios.get(url).then((response) => {
      this.setState({
        departamentos: response.data,
        statusDept: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  state = {
    empleados: [],
    departamentos: [],
    statusDept: false,
    statusEmp: false,
  };
  render() {
    return (
      <div>
        <h1>DepartamentosEmpleados</h1>
        <form>
          <laber>seleccione un Departamento</laber>
          <select ref={this.selectDepartamento}>
            {this.state.statusDept == true &&
              this.state.departamentos.map((departamentos, index) => {
                return (
                  <option value={departamentos.Numero}>
                    {departamentos.Nombre}
                  </option>
                );
              })}
          </select>
          <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
        </form>
        <ul>

              {
                this.state.statusEmp==true &&
                (this.state.empleados.map((empleado,index)=>{
                    return(<li key={index}>{empleado.apellido}</li>)
                }))
              }

        </ul>
      </div>
    );
  }
}
