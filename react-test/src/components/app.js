import React, { useState } from 'react';
import { getCount } from '../count';
import { Item } from './item';

export function App() {
  const count = getCount();
  const [index, setIndex] = useState(-1);
  return (
    <>
      <strong>React</strong>
      <div>count <span>{ count }</span></div>
      <div>index <span>{ index }</span></div>
      {new Array(count).fill(0).map((v, i) => (<Item key={ i } index={ i + 1 } onClick={ () => setIndex(i + 1) } />)) }
    </>
  );
}
