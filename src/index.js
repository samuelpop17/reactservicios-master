import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers';
import BuscadorCustomer from './components/BuscadorCustomer';
import BuscarCoche from './components/BuscarCoche';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import EmpleadosOficios from './components/EmpleadosOficios';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DepartamentosEmpleados></DepartamentosEmpleados>
   <EmpleadosOficios></EmpleadosOficios>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
