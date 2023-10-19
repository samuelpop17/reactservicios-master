import React, { Component } from 'react'
import axios from 'axios';
import Global from '../global';

export default class ServicioCustomers extends Component {
  
    urlApiCustomers=Global.urlApiCustomers;
    state={
       customers:[]
    }

    loadCustomers=()=>{

        console.log("Loading customers...")
        var request="customers.json"
        axios.get(this.urlApiCustomers+request).then(response=>{
            this.setState({
                customers:response.data.results
            })
        })
    }
  

    componentDidMount=()=>{
        console.log("creando components...")
        this.loadCustomers()
    }

    render() {
    return (
      <div>
        <h1>Servicio Customers</h1>
        {
            this.state.customers.map((cliente,index)=>{
                return(<h2 style={{color:"blue"}} key={index}>{cliente.contactName}</h2>)
            })
        }
      </div>
    )
  }
}
