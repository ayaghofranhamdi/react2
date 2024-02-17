// MonComposant.js
import React from 'react';
import {product} from './products';

// Définir le composant fonctionnel
const Name = () => {
  return (
    <div>
          <h1>{ product.name}</h1>
    </div>
  );
};

// Exporter le composant pour pouvoir l'utiliser ailleurs
export default Name;
