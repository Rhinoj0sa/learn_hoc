import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Child1 } from './components/Child1';
import { Child2 } from './components/Child2';
import { Child3 } from './components/Child3';
import { Child4 } from './components/Child4';
import './index.css';
import './App.css';

const Padre = ({ mensaje, componente, children: propsChildren }) => {
  const [state, setstate] = useState({ mensaje: "Hola hijos de la...", componente: "(init state) El papa de lo hijos saluda:", })
  const actualizaState = (mensaje, componente) => setstate({ mensaje, componente })
  // esto es un patron implicito de transferecia de propiedades a cada hijo le agregamos las propiedades para modificar el estado del padre y el componente hijo
  const children = React.Children.map(propsChildren,
    child => React.cloneElement(child, { mensaje: state.mensaje, componente: state.componente, actualizaState }))
  return (
    <div className="padre">
      <h1>{"El papa de los hijos"}</h1>
      <p>{state.componente + ' ' + state.mensaje}</p>
      <textarea rows='3' onChange={e => actualizaState(e.target.value, 'El papa de lo hijos dice:')} />
      <div className='hijos'>
        {children}
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <div className='App-header'>
      <Padre >
        <Child1 />
        <Child2 />
        <Child3 />
        <Child4 />
      </Padre>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
