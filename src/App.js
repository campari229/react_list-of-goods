import React from 'react';
import './App.css';

import { Goods } from './Goods/Goods';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const App = () => (
  <div className="App">
    <h1 className="list-title">
      {`Goods of ${goodsFromServer.length} items`}
    </h1>
    <Goods goods={goodsFromServer} />
  </div>
);

export default App;
