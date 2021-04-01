import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';

const Componente =({texto,numero,correo}) => 
<>
<p>{texto}</p>
<p>{numero}</p>
<p>{correo}</p>
</>
  


ReactDOM.render(
  <React.StrictMode>
    <div className='App-header'>
     <Componente texto='texto' numero='999999999' correo='abc@serc.com'/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
