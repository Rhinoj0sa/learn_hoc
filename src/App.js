import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App({ sucursal, pago, impuesto, ganancia, calcularImpuesto }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Impuestos sucursal: {sucursal} </h1>
        <input type='number' onChange={(e) => calcularImpuesto(e.target.value)} />
        <p>{"Pago: " + pago}</p>
        <p>{"Impuesto: " + impuesto}</p>
        <p>{"Ganancia: " + ganancia}</p>
      </header>
    </div>
  );
}

const withImpuestos = (Component) => ({ sucursal, pago = 0, impuesto = 0.16 }) => () => {
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

  return (<Component sucursal={state.sucursal} pago={state.pago} impuesto={state.impuesto}
    ganancia={state.ganancia} calcularImpuesto={calcularImpuesto} />)

}

export default withImpuestos(App)({ sucursal: "Miguel Nieto" });
