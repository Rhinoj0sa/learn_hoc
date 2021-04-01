import React from 'react';

// import App from './App';
//
export const Child1 = ({ mensaje, componente, actualizaState }) => <>
  <h2 className='hijo'>{'El hijo del papa1'}</h2>
  <p>{componente + " " + mensaje}</p>
  <textarea rows='3' onChange={e => actualizaState(e.target.value, 'El hijo del papa 1 dice:')} />
</>;
