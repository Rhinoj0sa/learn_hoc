import React from 'react';

export const Child2 = ({ mensaje, componente, actualizaState }) => <>
  <h2 className='hijo'>{'El hijo del papa2'}</h2>
  <p>{componente + " " + mensaje}</p>
  <textarea rows='3' onChange={e => actualizaState(e.target.value, 'El hijo del papa 2 dice:')} />
</>;
