import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

//
const Child1 = ({ mensaje, componente, actualizaState }) =>
  <>
    <h2 className='hijo'>{'El hijo del papa1'}</h2>
    <p>{componente + " " + mensaje}</p>
    <textarea rows='3' onChange={e => actualizaState(e.target.value, 'El hijo del papa 1 dice:')} />
  </>
const Child2 = ({ mensaje, componente, actualizaState }) =>
  <>
    <h2 className='hijo'>{'El hijo del papa2'}</h2>
    <p>{componente + " " + mensaje}</p>
    <textarea rows='3' onChange={e => actualizaState(e.target.value, 'El hijo del papa 2 dice:')} />
  </>
  const Child3 = ({ mensaje, componente, actualizaState }) =>
  <>
    <h2 className='hijo'>{'El hijo del papa3'}</h2>
    <p>{componente + " " + mensaje}</p>
    <textarea rows='3' onChange={e => actualizaState(e.target.value, 'El hijo del papa 3 dice:')} />
  </>
  const Child4 = ({ mensaje, componente, actualizaState }) =>
  <>
    <h2 className='hijo'>{'El hijo del papa4'}</h2>
    <p>{componente + " " + mensaje}</p>
    <textarea rows='3' onChange={e => actualizaState(e.target.value, 'El hijo del papa 4 dice:')} />
  </>

const Padre = ({ mensaje, componente, children: propsChildren }) => {
  const [state, setstate] = useState({ mensaje: "Hola hijos de la...", componente: "El papa de lo hijos saluda:", })
  const actualizaState = (mensaje, componente) => setstate({ mensaje, componente })
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
    <Padre>
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4 />
    </Padre>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
