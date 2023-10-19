import React, { Component } from 'react'
import Global from '../global'
import axios from 'axios'


export default class BuscadorCustomer extends Component {

url=Global.urlApiCustomers;
cajaId=React.createRef();

state={
    customer:{},
    status:false
}

buscarCustomer =(e)=>{
e.preventDefault();
var idCustomer=this.cajaId.current.value;
var request="customers/"+idCustomer+".json"
axios.get(this.url+request).then(response=>{
    this.setState({
        customer:response.data.customer,
        status:true
    })
})
}

    render() {
    return (
      <div>
        <h1>Buscador Customer</h1>

        <form onSubmit={this.buscarCustomer}>
            
            
            <label>Id Customer: </label>
            <input type='text' ref={this.cajaId}></input>
            <button>Buscar cliente</button>
        </form>
        {this.state.status==true &&
        (<div>
            <h1>cliente: {this.state.customer.contactName}</h1>
            <h2>Empresa: {this.state.customer.companyName}</h2>
            <h2>Ciudad: {this.state.customer.city}</h2>
            <h2>Cargo: {this.state.customer.contactTitle}</h2>
            
        </div>)}
        
      </div>
    )
  }
}
