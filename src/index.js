import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'



export const Hijo = () => {
  return (
    <div>
      Yo soy el hijo...
    </div>
  )
}


const Componente = () => {
  const [cont, setcont] = useState(0)
  const [verHijo, setVerHijo] = useState(true)
  useEffect(() => {
    console.log('componentWillMount')
    console.log('componentDidMount')
    console.log(cont)
    return () => console.log('componentwillUnmount')
  }, [cont, verHijo])
  // sin array en todo momento y con array solo en los elementos contenidos en el array...
  return (
    <div>
      <h1>hola</h1>
      <p>{cont}</p>
      <div>
        <button onClick={() => setcont(cont + 1)}>incrementa contador</button>
      </div>
      <div>
        <button onClick={() => setVerHijo(!verHijo)}>verijo</button>
      </div>
      {
        verHijo ? (<Hijo />) : ('')
      }
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <div className='App-header'>
      <Componente />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
