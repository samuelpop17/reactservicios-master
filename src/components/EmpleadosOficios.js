import React, { Component } from 'react'
import Global from "../global";
import axios from "axios";

export default class EmpleadosOficios extends Component {
  
    caja=React.createRef()
  
  
    buscarEmpleados=(e)=>{
        e.preventDefault();

        var idOficio = this.caja.current.value;
        var request="api/Empleados/EmpleadosOficio/"+idOficio
        var url=Global.urlApieEmpleados+request;
        
        axios.get(url).then(response=>{
            this.setState({
                empleados:response.data,
                statusEmpleado:false
            })
            
        })
    }
  
  state={
    oficios:[],
    statusOficio:false,
    empleados:[],
    statusEmpleado:false
  }
  
  
    loadOficios=()=>{
        var request="api/Empleados/oficios"
        var url =Global.urlApieEmpleados+request
        axios.get(url).then((response)=>{
            this.setState({
                oficios:response.data,
                statusOficio:true

            })

        })
    }
  
  
  componentDidMount=()=>{
    this.loadOficios();
  }
  
  
  
    render() {
    return (
      <div>
        <h1>Empleados Oficios</h1>
        <form>

        <label>Seleccione un oficio</label>
        <select ref={this.caja}>
            {
                this.state.statusOficio==true &&
             (this.state.oficios.map((oficio,index)=>{
                return(<option key={index} value={oficio}>{oficio}</option>)
             }))   
            }
            

        </select>
            <button onClick={this.buscarEmpleados}>Mostrar Empleados</button>
        </form>

        <ul>

            {
                this.state.statusEmpleado==true &&

                (this.state.empleados.map((empleado,index)=>{
                    return(<li key={index}>{empleado}</li>)
                }))
            }

        </ul>
      </div>
    )
  }
}
