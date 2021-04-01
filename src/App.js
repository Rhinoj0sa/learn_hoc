import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// esto es un patron implicito de transferecia de propiedades 
// component to be wrapped
const App = ({ sucursal, pago, impuesto, ganancia, calcularImpuesto }) =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>(HOC) Suc: {sucursal} </h1>
      <input type='number' onChange={(e) => calcularImpuesto(e.target.value)} />
      <p>{"Pago: " + pago}</p>
      <p>{"Impuesto: " + impuesto}</p>
      <p>{"Ganancia: " + ganancia}</p>
    </header>
  </div>


// (HOC) Wrapper functional high order component ...
const withImpuestos = (WrappedComponent) => ({ sucursal = 'Suc 00 default', pago = 0, impuesto = 0.16 }) => () => {
  const [state, setstate] = useState({
    sucursal,
    pago: '$' + 0,
    impuesto: '$' + 0 + ' al ' + (impuesto * 100) + "%",
    ganancia: ' $' + 0,
  })

  const calcularImpuesto = (pago) => {
    setstate({
      ...state, ...{
        pago: '$' + pago,
        impuesto: '$' + pago * impuesto + ' al ' + (impuesto * 100) + "%",
        ganancia: ' $' + (pago - (pago * impuesto)),
      }
    })
  }

  return (<WrappedComponent sucursal={state.sucursal} pago={state.pago} impuesto={state.impuesto}
    ganancia={state.ganancia} calcularImpuesto={calcularImpuesto} />)

}

export default withImpuestos(App)({sucursal:'mis Tompiates'});
