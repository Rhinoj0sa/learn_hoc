import React from 'react';

export const Child4 = ({ mensaje, componente, actualizaState }) => <>
  <h2 className='hijo'>{'El hijo del papa4'}</h2>
  <p>{componente + " " + mensaje}</p>
  <textarea rows='3' onChange={e => actualizaState(e.target.value, 'El hijo del papa 4 dice:')} />
</>;
