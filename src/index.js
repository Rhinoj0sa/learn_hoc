import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import './App.css';

const Componente = ({ texto, numero, correo }) =>
  <>
    <p>{texto}</p>
    <p>{numero}</p>
    <p>{correo}</p>
  </>
Componente.propTypes = {
  texto: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
  correo: (props, propName, componentName) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(props[propName])) {
      return new Error(
        'Prop no valida `' + propName + '` Para ' +
        ' `' + componentName + '`. Error en la validación.'
      );
    }
  },
}

ReactDOM.render(
  <React.StrictMode>
    <div className='App-header'>
      <Componente texto='texto' numero={999999999} correo='abcserc.com' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
